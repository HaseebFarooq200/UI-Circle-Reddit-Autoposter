import React, { useState } from 'react';
import DataTable from '../components/data_table';
import AddNewAvatar from '../components/add_new_avatar';
import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import Header from '../components/header';

const UsersPage = () => {

const data = [
{
    key: 1,
    user_name: 'Isabell Aserrano',
    email: 'isabellaserrano3544@gmail.com',
    password: 'ejcui#62n',
    total_posts: 13,
    total_likes: 5,
    total_comments: 13,
},
{
    key: 2,
    user_name: 'Isabell Aserrano',
    email: 'isabellaserrano3544@gmail.com',
    password: 'ejcui#62n',
    total_posts: 13,
    total_likes: 5,
    total_comments: 13,
},
{
    key: 3,
    user_name: 'Isabell Aserrano',
    email: 'isabellaserrano3544@gmail.com',
    password: 'ejcui#62n',
    total_posts: 13,
    total_likes: 5,
    total_comments: 13,
},
{
    key: 4,
    user_name: 'Isabell Aserrano',
    email: 'isabellaserrano3544@gmail.com',
    password: 'ejcui#62n',
    total_posts: 13,
    total_likes: 5,
    total_comments: 13,
},
{
    key: 5,
    user_name: 'Isabell Aserrano',
    email: 'isabellaserrano3544@gmail.com',
    password: 'ejcui#62n',
    total_posts: 13,
    total_likes: 5,
    total_comments: 13,
},
{
    key: 6,
    user_name: 'Isabell Aserrano',
    email: 'isabellaserrano3544@gmail.com',
    password: 'ejcui#62n',
    total_posts: 13,
    total_likes: 5,
    total_comments: 13,
}];
const columns = [
{
    title: 'User Name',
    dataIndex: 'user_name',
    key: 'user_name',
},
{
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
},
{
    title: 'Password',
    dataIndex: 'password',
    key: 'password',
},
{
    title: 'Total Posts',
    dataIndex: 'total_posts',
    key: 'total_posts',
},
{
    title: 'Total Likes',
    dataIndex: 'total_likes',
    key: 'total_likes',
},
{
    title: 'Total Comments',
    dataIndex: 'total_comments',
    key: 'total_comments',
},
{
    title: 'Action',
    key: 'action',
    render: (_, record) => (
    <Button
        type="text" 
        danger 
        icon={<DeleteOutlined />} 
        onClick={() => handleDelete(record.key)}
    >
        Delete
    </Button>
    ),
},
];

const [tableData, setTableData] = useState(data);

const handleDelete = (key) => {
    setTableData(prev => prev.filter(item => item.key !== key));
};

    return (
        <>
            <Header page_title="User Activity"/>
            <div className='bg-gray-100'>
                <div className='m-5 mx-5'>
                    <div className='w-full text-sm' >
                        <DataTable title="Users Avatars" columns={columns} tableData={tableData} />
                    </div>   
                    <div className='w-full mt-5' >
                        <AddNewAvatar title="Users Avatars" columns={columns} tableData={tableData} />
                    </div>   
                </div>        
            </div>        
        </>
    );
}

export default UsersPage;
