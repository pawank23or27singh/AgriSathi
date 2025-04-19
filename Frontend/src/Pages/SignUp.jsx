import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-green-50">
            <div className="w-full max-w-lg p-8 space-y-6 bg-white rounded-2xl shadow-xl">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-green-700">AgriSathi</h1>
                    <p className="text-sm text-green-600 mt-1">
                        Join the green movement. Create your account today!
                    </p>
                </div>

                <form className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <label className="block text-green-800 text-sm font-semibold mb-1">
                                First Name
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                                placeholder="John"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-green-800 text-sm font-semibold mb-1">
                                Last Name
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                                placeholder="Doe"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-green-800 text-sm font-semibold mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-green-800 text-sm font-semibold mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-green-800 text-sm font-semibold mb-1">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition"
                    >
                        Create Account
                    </button>
                </form>

                <p className="text-center text-sm text-green-700">
                    Already have an account?{" "}
                    <Link to={'/login'} className="font-medium text-green-800 hover:underline">
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default SignUp
