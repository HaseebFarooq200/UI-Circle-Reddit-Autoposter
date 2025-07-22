import React, { useEffect, useState } from 'react';
import { Button, message, Select } from 'antd';
import { add_new_post, get_avatars_list } from '../apis/apis';

const AddNewPost = () => {
    const [avatarEmails, setAvatarEmails] = useState([]);
    const [selectedAvatarEmail, setSelectedAvatarEmail] = useState('gabrielasuarez4590@gmail.com');
    const [loading, setLoading] = useState(false); // loader state

    const handleEmailAvatarChange = value => {
        setSelectedAvatarEmail(value);
    };

    const handleAddNewPostButton = async () => {
        setLoading(true); // start loader
        try {
            const response = await add_new_post(selectedAvatarEmail);
            if (response.status === 200) {
                message.success('Post added successfully.');
            } else {
                message.error('Failed to add post.');
            }
        } catch (err) {
            console.error('Error: ', err);
            message.error('Something went wrong.');
        } finally {
            setLoading(false); // stop loader
        }
    };

    useEffect(() => {
        get_avatars_list().then(avatars_list => {
            const formattedOptions = avatars_list.map(avatar => ({
                value: avatar['Email'],
                label: avatar['Email']
            }));
            setAvatarEmails(formattedOptions);
        });
    }, []);

    return (
        <div className='w-full bg-[#fbfeff] border border-gray-200 rounded-lg shadow-md p-3 '>
            <p className='text-[#151D48] text-lg font-semibold'>Add Manual Post</p>
            <div className='flex flex-col space-y-2 mt-5'>
                <p>Email</p>
                <Select
                    defaultValue="gabrielasuarez4590@gmail.com"
                    onChange={handleEmailAvatarChange}
                    options={avatarEmails}
                />
            </div>
            <div className='mt-10 flex justify-end'>
                <Button
                    type="primary"
                    onClick={handleAddNewPostButton}
                    loading={loading} // 👈 loader added here
                >
                    Add New Post
                </Button>
            </div>
        </div>
    );
};

export default AddNewPost;
