import React from 'react';
import AddNewPost from '../components/add_new_post';
import UpdatePostPrompt from '../components/update_post_prompt';
import UpdateCommentPrompt from '../components/update_comment_prompt';
import Header from '../components/header';

const PostsPage = () => {
    return (
        <>
            <Header page_title="Posts Analytics"/>
            <div className='bg-gray-100'>
                <div className='m-5 mx-5'>
                    <div className='flex flex-col lg:flex-row w-full my-5 gap-3' >
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
