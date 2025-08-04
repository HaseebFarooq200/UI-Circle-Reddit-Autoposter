import React, { useEffect, useState } from 'react';
import DataTable from '../components/data_table';
import RecentAutomationLogs from '../components/recent_automation_logs';
import DataCards from '../components/data_cards';
import Header from '../components/header';
import { recent_post_acivity_columns } from '../assets/static_data';
import {
    get_recent_logs,
    get_recent_posts_from_circle,
    get_total_posts_fetched,
    get_total_posts_uploaded_to_circle,
    get_total_subreddits
} from '../apis/apis';

const CACHE_EXPIRY_MS = 120 * 60 * 1000; // 120 minutes

const Dashboard = () => {
    const [recentLogs, setRecentLogs] = useState([])
    const [total_subreddits, setTotalSubreddits] = useState(0);
    const [totalPostsFetched, setTotalPostsFetched] = useState(0);
    const [totalPostsUploadedToCircle, setTotalPostsUploadedToCircle] = useState(0);
    const [postsActivityTableData, setPostsActivityTableData] = useState([]);

    const handleForceReload = () => {
        localStorage.removeItem('circle_total_posts_uploaded');
        localStorage.removeItem('circle_total_posts_uploaded_time');
        localStorage.removeItem('circle_recent_posts');
        localStorage.removeItem('circle_recent_posts_time');

        // Refetch fresh data
        get_total_posts_uploaded_to_circle().then(count => {
            setTotalPostsUploadedToCircle(count);
            localStorage.setItem('circle_total_posts_uploaded', JSON.stringify(count));
            localStorage.setItem('circle_total_posts_uploaded_time', Date.now().toString());
        });

        get_recent_posts_from_circle().then(recent_posts_list => {
            const formattedData = recent_posts_list.map((post, index) => ({
                key: index + 1,
                post_title: post.name,
                space_name: post.space.name,
                total_likes: post.user_likes_count,
                total_comments: post.comment_count,
            }));
            setPostsActivityTableData(formattedData);
            localStorage.setItem('circle_recent_posts', JSON.stringify(formattedData));
            localStorage.setItem('circle_recent_posts_time', Date.now().toString());
        });
    };


    useEffect(() => {
        get_total_posts_fetched().then(total_posts_fetched => {
            setTotalPostsFetched(total_posts_fetched);
        });

        get_total_subreddits().then(total_subreddits => {
            setTotalSubreddits(total_subreddits);
        });
        get_recent_logs().then(recent_logs=>{
            setRecentLogs(recent_logs)
        })

        const now = Date.now();

        const cachedUploaded = localStorage.getItem('circle_total_posts_uploaded');
        const cachedUploadedTime = localStorage.getItem('circle_total_posts_uploaded_time');

        if (cachedUploaded && cachedUploadedTime && now - cachedUploadedTime < CACHE_EXPIRY_MS) {
            setTotalPostsUploadedToCircle(JSON.parse(cachedUploaded));
        } else {
            get_total_posts_uploaded_to_circle().then(count => {
                setTotalPostsUploadedToCircle(count);
                localStorage.setItem('circle_total_posts_uploaded', JSON.stringify(count));
                localStorage.setItem('circle_total_posts_uploaded_time', now.toString());
            });
        }

        const cachedPosts = localStorage.getItem('circle_recent_posts');
        const cachedPostsTime = localStorage.getItem('circle_recent_posts_time');

        if (cachedPosts && cachedPostsTime && now - cachedPostsTime < CACHE_EXPIRY_MS) {
            setPostsActivityTableData(JSON.parse(cachedPosts));
        } else {
            get_recent_posts_from_circle().then(recent_posts_list => {
                const formattedData = recent_posts_list.map((post, index) => ({
                    key: index + 1,
                    post_title: post.name,
                    space_name: post.space.name,
                    total_likes: post.user_likes_count,
                    total_comments: post.comment_count,
                }));
                setPostsActivityTableData(formattedData);
                localStorage.setItem('circle_recent_posts', JSON.stringify(formattedData));
                localStorage.setItem('circle_recent_posts_time', now.toString());
            });
        }
    }, []);

    return (
        <>
            <Header page_title="Dashboard" />
            <div className='bg-gray-100'>
                <div className='flex flex-col md:flex-row m-5 gap-3 '>
                    <DataCards title="Total Subreddits" total={total_subreddits} />
                    <DataCards title="Posts Fetched" total={totalPostsFetched} />
                    <DataCards title="Posts Uploaded To Circle" total={totalPostsUploadedToCircle} />
                </div>
                <div className='flex flex-col lg:flex-row gap-3 m-5'>
                    <div className='w-full text-sm'>
                        <DataTable
                            title="Recent Posts Activity"
                            columns={recent_post_acivity_columns}
                            tableData={postsActivityTableData}
                            handleForceReload={handleForceReload}
                        />
                    </div>
                    <div className='w-full lg:w-1/2 p-3 h-[390px] overflow-y-auto bg-[#fbfeff] border border-gray-200 rounded-md'>
                        <RecentAutomationLogs recentLogs={recentLogs} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
