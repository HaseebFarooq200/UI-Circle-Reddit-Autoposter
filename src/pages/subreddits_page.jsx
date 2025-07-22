import React, { useEffect, useRef, useState } from 'react';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Input, message } from 'antd';
import DataTable from '../components/data_table';
import DataCards from '../components/data_cards';
import SubredditsFilter from '../components/subreddits_filter';
import SubredditsValidation from '../components/subreddits_validation';
import AddSubreddits from '../components/add_subreddits';
import Header from '../components/header';
import { subreddits_management_columns } from '../assets/static_data';
import { add_subreddit, delete_subreddit, get_settings, get_subreddits_activity, get_total_posts_fetched, get_total_subreddits } from '../apis/apis';

const SubredditsPage = () => {
    const [defaultTimeFilter, setDefaultTimeFilter] = useState();
    const [defaultLimit, setDefaultLimit] = useState();
    const [defaultUpvotes, setDefaultUpvotes] = useState();
    const [defaultComments, setDefaultComments] = useState();

    const [total_subreddits, setTotalSubreddits] = useState(0);
    const [totalPostsFetched, setTotalPostsFetched] = useState(0);
    const [subredditsActivityData, setSubredditsActivityData] = useState([]);
    const subredditsActivityRef = useRef([]);
    const [updatedColumns, setUpdatedColumns] = useState([]);
    const [newSubreddit, setNewSubreddit] = useState('');


    const handleDelete = async (record) => {
        await delete_subreddit(record.subreddit_name)
            .then(response => {
                if (response.status === 200) {
                    message.success('Subreddit deleted successfully.');
                } else {
                    message.error('Failed to delete subreddit.');
                }
            })
            .catch(error => {
                message.error('Failed to delete subreddit.');
            })
        const updatedList = subredditsActivityRef.current.filter(item => item.key !== record.key);
        subredditsActivityRef.current = updatedList;
        setSubredditsActivityData(updatedList);  
    };

    const handleAddSubreddit = () => {
        const trimmed = newSubreddit.trim();
        if (!trimmed) {
            message.error('Subreddit name cannot be empty.');
            return;
        }

        const exists = subredditsActivityData.some(item => item.subreddit_name.toLowerCase() === trimmed.toLowerCase());
        if (exists) {
            message.error('Subreddit already exists.');
            return;
        }
        add_subreddit([{ name: trimmed }])
            .then(response => {
                if (response.status === 200) {
                    message.success('Subreddit added successfully.');
                    const newEntry = {
                        key: trimmed, // Use subreddit name as unique key
                        subreddit_name: trimmed,
                    };
                    const updatedList = [...subredditsActivityData, newEntry];
                    subredditsActivityRef.current = updatedList;
                    setSubredditsActivityData(updatedList);
                    setNewSubreddit('');
                } else {
                    message.error('Failed to add subreddit.');
                }
            })
            .catch(error => {
                message.error('Something went wrong.');
            })
    };

    const delete_column = {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Button
                type="text"
                danger
                icon={<DeleteOutlined />}
                onClick={() => handleDelete(record)}
            >
                Delete
            </Button>
        ),
    };


    useEffect(() => {
        setUpdatedColumns([...subreddits_management_columns, delete_column]);
        get_total_posts_fetched().then(total_posts_fetched => {
            setTotalPostsFetched(total_posts_fetched);
        });

        get_total_subreddits().then(total_subreddits => {
            setTotalSubreddits(total_subreddits);
        });

        get_subreddits_activity().then(subreddits_obj => {
        const subreddits_activity = subreddits_obj.map((item, index) => ({
            key: item.subreddit, // Use subreddit as unique key
            subreddit_name: item.subreddit,
            }));

            subredditsActivityRef.current = subreddits_activity;
            setSubredditsActivityData(subreddits_activity);
        });
        get_settings().then(settings => {
            setDefaultTimeFilter(settings[0].time_filter);
            setDefaultLimit(settings[0].set_limit);
            setDefaultUpvotes(settings[0].upvotes);
            setDefaultComments(settings[0].comments);
        })
    }, []);




    return (
        <>
            <Header page_title="Subreddits Management" />
            <div className='bg-gray-100'>
                <div className='flex m-5 space-x-3 '>
                    <DataCards title="Total Subreddits" total={total_subreddits} />
                    <DataCards title="Total Posts Fetched from Subreddits" total={totalPostsFetched} />
                </div>
                <div className='m-5 mx-5'>
                    <div className='w-full text-sm'>
                        <DataTable
                            title="Subreddits Activity"
                            columns={updatedColumns}
                            tableData={subredditsActivityData}
                        />
                    </div>

                    <div className='flex w-full my-5 space-x-3'>
                        <SubredditsFilter  />
                        <SubredditsValidation />
                        <AddSubreddits
                            value={newSubreddit}
                            onChange={(e) => setNewSubreddit(e.target.value)}
                            onAdd={handleAddSubreddit}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SubredditsPage;
