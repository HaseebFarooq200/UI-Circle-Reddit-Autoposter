const baseURL = 'http://173.212.216.200'
const PORT = 8000

// -------------- GET APIs ---------------- //

export const get_recent_posts_from_circle = async () => {
    const response = await fetch(`${baseURL}:${PORT}/api/get_posts_from_circle`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    console.log("data",data)
    return data
}


export const get_total_posts_uploaded_to_circle = async () => {
    let page = 1;
    let totalCount = 0;
    let hasNextPage = true;

    while (hasNextPage) {
        const response = await fetch(`${baseURL}:${PORT}/api/get_totalcount_posts_from_circle`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();

        // Count how many posts are returned on this page
        totalCount += data || 0;

        hasNextPage = data.has_next_page;
        page += 1;
    }
    console.log("totalCount",totalCount)
    return totalCount;
}


export const get_total_posts_fetched = async () => {
    const response = await fetch(`${baseURL}:${PORT}/api/total_posts_from_subreddit`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const total_posts = await response.json();
    return total_posts
}

export const get_total_subreddits = async () => {
    const response = await fetch(`${baseURL}:${PORT}/api/total_subreddits`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const total_subreddits = await response.json();
    return total_subreddits
}

export const get_subreddits_activity = async () => {
    const response = await fetch(`${baseURL}:${PORT}/api/get_subreddits`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const subreddits_activity = await response.json();
    return subreddits_activity
}

export const get_avatars_list = async () => {
    const response = await fetch(`${baseURL}:${PORT}/api/get_avatar_emails`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const avatars_list = await response.json();
    return avatars_list
}

export const get_settings = async () => {
    const response = await fetch(`${baseURL}:${PORT}/api/settings`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const settings = await response.json();
    return settings
}

export const get_recent_logs = async ()=>{
    const response = await fetch(`${baseURL}:${PORT}/api/get_recent_logs`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const recent_logs = await response.json();
    return recent_logs
}


// -------------- POST APIs ---------------- //


export const add_subreddit = async (subreddit_name_list) => { 
        const response = await fetch(`${baseURL}:${PORT}/api/add_subreddit`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(subreddit_name_list)
    });
    return response;
}

export const add_new_post = async (email) => {
    const response = await fetch(`${baseURL}:${PORT}/api/upload_post_manually`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify({email})
    });
    return response;

}

export const run_script = async (script_status) =>{
    const response = await fetch(`${baseURL}:${PORT}/api/run_script`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify({script_status})
    });
    return response;
}

// -------------- DELETE APIs ---------------- //

export const delete_subreddit = async (subreddit_name) => { 
    const response = await fetch(`${baseURL}:${PORT}/api/delete_subreddit`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json', 
    },
    body: JSON.stringify({ subreddit_name })
    });
    return response;
}

// -------------- UPDATE APIs ---------------- //

export const update_adjust_filter_settings = async (timeFilter, limit) => {
    const response = await fetch(`${baseURL}:${PORT}/api/update_settings_filter`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json', 
    },
    body: JSON.stringify({ time_filter:timeFilter, set_limit:limit })
    });
    return response
}

export const update_post_validation_settings = async (upvotes, comments) => {
    const response = await fetch(`${baseURL}:${PORT}/api/update_settings_validation`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json', 
    },
    body: JSON.stringify({ upvotes, comments })
    });
    return response
}

export const update_post_prompt_settings = async (post_prompt) => {
    const response = await fetch(`${baseURL}:${PORT}/api/update_settings_post_prompt`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json', 
    },
    body: JSON.stringify({ post_prompt })
    });
    return response
}

export const update_comment_prompt_settings = async (comment_prompt) => {
    const response = await fetch(`${baseURL}:${PORT}/api/update_settings_comment_prompt`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json', 
    },
    body: JSON.stringify({ comment_prompt })
    });
    return response
}