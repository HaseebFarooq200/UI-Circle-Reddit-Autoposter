import React, { useState } from 'react';

const SignIn = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const handleSignIn = () => {
    if (!username || !password) {
    alert("Fields can't be empty");
    return;
    }

    // You can handle sign-in logic here
    console.log('Username:', username);
    console.log('Password:', password);
};

return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <div className="mb-4">
        <label className="block text-gray-700 mb-2">Username</label>
        <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter username"
        />
        </div>
        <div className="mb-6">
        <label className="block text-gray-700 mb-2">Password</label>
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter password"
        />
        </div>
        <button
        onClick={handleSignIn}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
        Sign In
        </button>
    </div>
    </div>
);
};

export default SignIn;
