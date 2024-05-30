'use client';
import React from 'react';
import { useRouter } from 'next/navigation';  // Import useRouter from next/navigation

const Login = () => {
    const router = useRouter();  // Initialize useRouter

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {  // Explicitly type the event parameter
        e.preventDefault();
        alert("Login successful!");
        router.push('/');
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-black">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-3xl shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white/20 backdrop-blur-md shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold text-white">Login Form</h1>
                        </div>
                        <div className="divide-y divide-gray-200">
                            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <form onSubmit={handleSubmit}>
                                    <div className="relative mb-4">
                                        <label
                                            htmlFor="email"
                                            className="block text-black text-sm mb-2"
                                        >
                                            Email Address
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="text"
                                            className="p-3 h-12 w-full bg-white/30 backdrop-blur-lg border-b-2 border-white-400 text-black focus:outline-none focus:ring-2 focus:ring-white-600 rounded-md"
                                            required
                                        />
                                    </div>
                                    <div className="relative mt-6">
                                        <label
                                            htmlFor="password"
                                            className="block text-black text-sm mb-2"
                                        >
                                            Password
                                        </label>
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            className="p-3 h-12 w-full bg-white/10 backdrop-blur-lg border-b-2 border-white-400 text-black focus:outline-none focus:ring-2 focus:ring-white-600 rounded-md"
                                            required
                                        />
                                    </div>
                                    <div className="relative mt-8">
                                        <button
                                            type="submit"
                                            className="bg-blue-600 text-white rounded-md px-4 py-2 w-full hover:bg-blue-700 transition"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
