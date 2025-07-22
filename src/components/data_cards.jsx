import React from 'react';

const DataCards = ({title,total}) => {
    return (        
        <div className='flex-1 shadow-md rounded-lg p-3 bg-[#DCFCE7] ' >
            <div className='flex flex-column justify-between items-center' >
                <p className='text-[#425166] text-[14px] font-semibold' >{title}</p>
            </div>
            <p className='text-[#151D48] text-2xl font-semibold mt-2' >{total}</p>
            <small className='text-[#425166]'> Latest updated </small>
        </div>
    );
}

export default DataCards;
