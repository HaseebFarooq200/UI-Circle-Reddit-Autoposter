import React, { useState, useEffect, useRef } from 'react';
import { Power } from 'lucide-react';
import Header from '../components/header';
import { run_script } from '../apis/apis';
import { Toast } from 'primereact/toast';


const Settings = () => {
    const getInitialPower = () => {
        const storedPower = localStorage.getItem('power');
        return storedPower === 'true'; 
    };
    const [power, setPower] = useState(getInitialPower);

    const toast = useRef(null);

    const showSuccessON = () => {
        toast.current.show({severity:'success', summary: 'Success', detail:'Script Activated Successfully', life: 3000});
    }
    const showSuccessOFF = () => {
        toast.current.show({severity:'success', summary: 'Success', detail:'Script Deactivated Successfully', life: 3000});
    }


    // const successForOn = () => {
    //     const modal = Modal.success({
    //         content: 'Script Activated Successfully',
    //         okButtonProps: { style: { display: 'none' } },
    //     });

    //     setTimeout(() => {
    //         modal.destroy();
    //     }, 3000)
    // };

    // const successForOFF = () => {
    //     const modal = Modal.success({
    //         content: 'Script Deactivated Successfully',
    //         okButtonProps: { style: { display: 'none' } },
    //     });

    //     setTimeout(() => {
    //         modal.destroy();
    //     }, 3000)
    // };


    useEffect(() => {
    localStorage.setItem('power', power);
    }, [power]);

return (
<>
    <Header page_title="Settings" />
    <div className='bg-gray-100 h-screen'>
    <div className='m-5 mx-5'>
        <div className='text-sm'>
        {power ? (
            // POWER ON
            <>
            <div
                className='inline-block bg-[#00b600] p-2 cursor-pointer rounded-lg'
                onClick={async () => {
                    const res = await run_script('OFF')
                    if (res.status === 200) {
                        setPower(false);
                        showSuccessOFF()
                    } else {
                        console.error("Failed to start script:", res);
                    }
                }}
                >
                <Power size={40} className='text-white' />
            </div>
            </>
        ) : (
            // POWER OFF
            <>
                <div
                className='inline-block bg-[#ff2121] p-2 cursor-pointer rounded-lg'
                onClick={async () => {
                    const res = await run_script('ON')
                    if (res.status === 200) {
                        setPower(true);
                        showSuccessON()
                    } else {
                        console.error("Failed to start script:", res);
                    }
                }}
                >
                <Power size={40} className='text-white' />
                </div>
            </>
        )}
        </div>
    </div>
    </div>
    <Toast ref={toast} />
</>
);
};

export default Settings;
