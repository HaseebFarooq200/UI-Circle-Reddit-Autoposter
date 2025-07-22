import React from 'react';

const Header = ({page_title}) => {
    return (
        <div className='text-[#151D48] bg-[#FFFFFF] py-4 px-6 text-2xl font-semibold'>
            {page_title}
        </div>
    );
}

export default Header;
