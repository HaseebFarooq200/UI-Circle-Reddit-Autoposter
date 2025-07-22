import React from 'react';

const RecentAutomationLogs = ({recentLogs}) => {
    return (
        <>
        <div className='flex justify-between items-center'>
            <p className='text-lg text-[#151D48] font-semibold' >Recent Automation Logs </p>
        </div>
        <div className='flex flex-col mt-2 space-y-2'>
            {
                recentLogs.map((element, index) => (
                    <small
                    key={index}
                    className={`text-[12px] border py-1 px-2 rounded-md ${
                        element.log_message_type === 'success' ? 'bg-green-200' :
                        element.log_message_type === 'info' ? 'bg-blue-200' :
                        element.log_message_type === 'error' ? 'bg-red-200' : 'bg-gray-200'
                    }`}
                    >
                        {element.log_message}
                    </small>
                ))
            }            
        </div>
        </>
        
    );
}

export default RecentAutomationLogs;
