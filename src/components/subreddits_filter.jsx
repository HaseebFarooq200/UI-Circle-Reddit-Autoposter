import React, { useEffect, useState } from 'react';
import { Button, InputNumber, Select, message } from 'antd';
import { get_settings, update_adjust_filter_settings } from '../apis/apis';

const SubredditsFilter = () => {
    const [timeFilter, setTimeFilter] = useState('');
    const [limit, setLimit] = useState();

    const time_filter_options = [
        { value: 'all', label: 'All' },
        { value: 'year', label: 'Year' },
        { value: 'month', label: 'Month' },
        { value: 'week', label: 'Week' },
        { value: 'day', label: 'Day' }
    ];

    
    useEffect(() => {
        get_settings().then(settings => {
            setTimeFilter(settings[0].time_filter);
            setLimit(settings[0].set_limit);
        })
    }, []);

    const handleSave = () => {
        update_adjust_filter_settings(timeFilter, limit)
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


    return (
        <div className='w-full bg-[#fbfeff] border border-gray-200 rounded-lg shadow-md p-3'>
            <p className='text-[#151D48] text-lg font-semibold'>Adjust Filter</p>
            <div className='text-[14px] flex items-center space-x-2 mt-5'>
                <p>Time Filter</p>
                <Select
                    style={{ width: 120 }}
                    value={timeFilter}
                    onChange={(value) => setTimeFilter(value)}
                    options={time_filter_options}
                />
            </div>

            <div className='text-[14px] flex items-center space-x-5 mt-5'>
                <p>Set Limit</p>
                <InputNumber
                    value={limit}
                    onChange={(value) => setLimit(value)}
                    min={1}
                    max={1000}
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

export default SubredditsFilter;