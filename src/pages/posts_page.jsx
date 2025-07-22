import React from 'react';
// import { Button } from 'antd';
// import DataTable from '../components/data_table';
// import { DeleteOutlined } from '@ant-design/icons';
import AddNewPost from '../components/add_new_post';
import UpdatePostPrompt from '../components/update_post_prompt';
import UpdateCommentPrompt from '../components/update_comment_prompt';
// import { posts_activity_columns } from '../assets/static_data';
import Header from '../components/header';

const PostsPage = () => {
    // const [updatedColumns, setUpdatedColumns] = useState([]);
    // const data = [
    // {
    //     key: 1,
    //     post_title: 'Is everyone here a diabetic?	',
    //     space_name: 'Diabeties Pro',
    //     total_likes: 27,
    //     total_comments: 13,
    //     total_posts: 5,
    //     date_posted: '2023-10-01',
    // },
    // {
    //     key: 2,
    //     post_title: 'Is everyone here a diabetic?	',
    //     space_name: 'Diabeties Pro',
    //     total_likes: 27,
    //     total_comments: 13,
    //     total_posts: 5,
    //     date_posted: '2023-10-01',
    // },
    // {
    //     key: 3,
    //     post_title: 'Is everyone here a diabetic?	',
    //     space_name: 'Diabeties Pro',
    //     total_likes: 27,
    //     total_comments: 13,
    //     total_posts: 5,
    //     date_posted: '2023-10-01',
    // },
    // {
    //     key: 4,
    //     post_title: 'Is everyone here a diabetic?	',
    //     space_name: 'Diabeties Pro',
    //     total_likes: 27,
    //     total_comments: 13,
    //     total_posts: 5,
    //     date_posted: '2023-10-01',
    // },
    // {
    //     key: 5,
    //     post_title: 'Is everyone here a diabetic?	',
    //     space_name: 'Diabeties Pro',
    //     total_likes: 27,
    //     total_comments: 13,
    //     total_posts: 5,
    //     date_posted: '2023-10-01',
    // },
    // {
    //     key: 6,
    //     post_title: 'Is everyone here a diabetic?	',
    //     space_name: 'Diabeties Pro',
    //     total_likes: 27,
    //     total_comments: 13,
    //     total_posts: 5,
    //     date_posted: '2023-10-01',
    // }];

    // const delete_column = {
    //     title: 'Action',
    //     key: 'action',
    //     render: (_, record) => (
    //         <Button
    //             type="text"
    //             danger
    //             icon={<DeleteOutlined />}
    //             onClick={() => handleDelete(record)}
    //         >
    //             Delete
    //         </Button>
    //     ),
    // };

    // useEffect(() => {
    //     setUpdatedColumns([...posts_activity_columns, delete_column]);
    // }, []);

    // const handleDelete = (key) => {
    //     setUpdatedColumns(prev => prev.filter(item => item.key !== key));
    // };

    return (
        <>
            <Header page_title="Posts Analytics"/>
            <div className='bg-gray-100'>
                <div className='m-5 mx-5'>
                    {/* <div className='w-full text-sm' >
                        <DataTable title="Posts Analytics" columns={updatedColumns} tableData={data} />
                    </div> */}
                    <div className='flex w-full my-5 space-x-3' >
                        <UpdatePostPrompt/>
                        <UpdateCommentPrompt/>
                    </div>
                    <div className='flex w-full my-5 space-x-3' >
                        <AddNewPost/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostsPage;
