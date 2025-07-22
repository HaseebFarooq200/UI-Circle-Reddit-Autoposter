import React, { useEffect, useState } from 'react';
import { Button, InputNumber, message } from 'antd';
import { get_settings, update_post_validation_settings } from '../apis/apis';

const SubredditsValidation = () => {
    const [numberOfComments, setNumberOfComments] = useState();
    const [upvotes, setUpvotes] = useState();

    const handleSave = () => {
        update_post_validation_settings(upvotes, numberOfComments)
            .then(response => {
                if (response.status === 200) {
                    message.success('Changes saved successfully!');
                } else {
                    message.error('Failed to save changes.')}
                })
            .catch(error => {
                message.error('An error occurred while saving changes.',error);
            })
    }

    useEffect(() => {
        get_settings().then(settings => {
            setNumberOfComments(settings[0].comments);
            setUpvotes(settings[0].upvotes);
        })
    }, []);
            

    return (
        <div className='w-full bg-[#fbfeff] border border-gray-200 rounded-lg shadow-md p-3'>
            <p className='text-[#151D48] text-lg font-semibold'>Posts Validation</p>

            <div className='text-[14px] flex items-center space-x-6 mt-5'>
                <p>Upvotes</p>
                <InputNumber
                    min={1}
                    max={1000}
                    value={upvotes}
                    onChange={(value) => setUpvotes(value)}
                    className="w-[120px]"
                />
            </div>

            <div className='text-[14px] flex items-center space-x-2 mt-5'>
                <p>Comments</p>
                <InputNumber
                    min={1} 
                    max={1000}
                    value={numberOfComments}
                    onChange={(value) => setNumberOfComments(value)}
                    className="w-[120px]"
                />
            </div>

            <div className='mt-5 flex justify-end'>
                <Button type="primary" onClick={handleSave}>
                    Save
                </Button>
            </div>
        </div>
    );
};

export default SubredditsValidation;
