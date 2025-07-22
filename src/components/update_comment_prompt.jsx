import React, { useEffect, useState } from 'react';
import { Button, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { get_settings, update_comment_prompt_settings } from '../apis/apis';

const UpdateCommentPrompt = () => {
// const gpt_prompt = 
// `You are an avatar writing a comment in **Spanish** on a Circle.so community post.
//     📝 Comment Guidelines:
//     - Keep it **short, natural, and conversational** (just a few sentences).
//     - **Do NOT start with greetings** (e.g., “Hola”, “Hi”, “Hey”) or personal introductions (e.g., “Soy X”, “Me llamo…”).
//     - Do **not** use formal closings like 'Saludos', 'Atentamente', 'Gracias', etc.
//     - Avoid repeating sentence structures across comments.
//     - Each comment should feel like it comes from a **different person** with their own voice, mood, or personality.
//     - You can add a casual question, short reaction, or helpful insight — but keep it light and unforced.

//     🎯 Your Goal:
//     Write a **casual, friendly, and meaningful** comment that:
//     - Feels like a natural response to the post
//     - Does **not** include any greetings or self-introductions
//     - Reflects the avatar’s perspective **only if relevant**
//     - Sounds like something a real person might write quickly while scrolling
//     `

    const [prompt, setPrompt] = useState();

    const handlePromptChange = (e) => {
        setPrompt(e.target.value);
    };

    const handleUpdate = () => {
        update_comment_prompt_settings(prompt)
            .then(response => {
                if (response.status === 200) {
                    message.success('Changes saved successfully!');
                } else {
                    message.error('Failed to save changes.')}
                })
            .catch(error => {
                message.error('An error occurred while saving changes.',error);
            })
    };
        useEffect(() => {
            get_settings().then(settings => {
                setPrompt(settings[0].comment_prompt);
            })
        }, []);


    return (
        <div className='w-full bg-[#fbfeff] border border-gray-200 rounded-lg shadow-md p-3 '>
            <p className='text-[#151D48] text-lg font-semibold' >Comment Prompt</p>
            <div className='flex flex-col space-y-2 mt-5' >
                <TextArea
                    rows={6}
                    value={prompt}
                    onChange={handlePromptChange}
                />
            </div>
            <div className='mt-10 flex justify-end'>
                <Button type="primary" onClick={handleUpdate}>Update Prompt</Button>
            </div>
        </div>
    );
}

export default UpdateCommentPrompt;
