import React from 'react';
import { Button, Form, Input, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';


const AddNewAvatar = () => {
    const onFinish = values => {
        console.log('Success:', values);
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    const normFile = e => {
    if (Array.isArray(e)) {
        return e;
    }
    return e === null || e === void 0 ? void 0 : e.fileList;
};
    return (
        <div className='w-full bg-[#fbfeff] border border-gray-200 rounded-lg shadow-md p-3 '>
            <p className='text-[#151D48] text-lg font-semibold' >Add New Avatar</p>
            <div className='flex flex-col space-y-2 mt-5' >
                <Form
                    name="basic"
                    // labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    // style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off">
                        <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                        <Input/>
                        </Form.Item>

                        <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                        <Input.Password/>
                        </Form.Item>

                        <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
                            <Upload action="/upload.do" listType="picture-card">
                                <button
                                style={{ color: 'inherit', cursor: 'inherit', border: 0, background: 'none' }}
                                type="button"
                                >
                                <PlusOutlined />
                                <div style={{ marginTop: 8 }}>Upload</div>
                                </button>
                            </Upload>
                        </Form.Item>

                        <Form.Item label={null}>
                            <Button  type="primary" htmlType="submit">
                                Create an Avatar
                            </Button>
                        </Form.Item>
                </Form>

            </div>
        </div>
    );
}

export default AddNewAvatar;
