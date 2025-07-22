import React, { useEffect, useState } from 'react';
import { Button, Input, message } from 'antd';
import { get_settings, update_post_prompt_settings } from '../apis/apis';
const { TextArea } = Input;

const UpdatePostPrompt = () => {
// const gpt_prompt = 
// `You are tasked to rephrase the following post title and content in Spanish to match the avatar's personality and style.
// IMPORTANT INSTRUCTIONS:
// - Completely remove any links, references to Reddit, phrases like "View Poll," "upvotes," "subreddit," or any wording that indicates this content was fetched from Reddit.
// - The rewritten content should sound like a natural, stand-alone social media post.
// - Return ONLY a JSON object with:
//     - "PostTitle": rewritten title
//     - "PostContent": rewritten content
//     `

    const [prompt, setPrompt] = useState();

    const handlePromptChange = (e) => {
        setPrompt(e.target.value);
    };

    const handleUpdate = () => {
        update_post_prompt_settings(prompt)
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
            setPrompt(settings[0].post_prompt);
        })
    }, []);

    return (
        <div className='w-full bg-[#fbfeff] border border-gray-200 rounded-lg shadow-md p-3 '>
            <p className='text-[#151D48] text-lg font-semibold' >Post Prompt</p>
            <div className='flex flex-col space-y-2 mt-5' >
                <TextArea
                    rows={6}
                    value={prompt}
                    onChange={handlePromptChange}
                />
            </div>
            <div className='mt-10 flex justify-end'>
                <Button type="primary" onClick={handleUpdate}>
                    Update Prompt
                </Button>
            </div>
        </div>
    );
}

export default UpdatePostPrompt;
