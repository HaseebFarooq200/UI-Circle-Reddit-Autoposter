import React from 'react';
import { Button, Input } from 'antd';

const AddSubreddits = ({ value, onChange, onAdd }) => {
    return (
        <div className='w-full bg-[#fbfeff] border border-gray-200 rounded-lg shadow-md p-3 '>
            <p className='text-[#151D48] text-lg font-semibold'>New Subreddit</p>
            <div className='text-[14px] flex flex-col space-y-2 mt-5'>
                <p>Subreddit Name</p>
                <Input
                    placeholder="r/PCOS"
                    value={value}
                    onChange={onChange}
                />
            </div>
            <div className='mt-10 flex justify-end'>
                <Button type="primary" onClick={onAdd}>
                    Add New Subreddit
                </Button>
            </div>
        </div>
    );
};

export default AddSubreddits;
