import React from "react";
import { Link, Navigate } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg">
        <div className="text-center">
          {/* Logo placeholder */}
          <div className="mb-4 text-green-700 text-3xl font-bold">
            AgriSathi
          </div>
          <p className="text-sm text-green-600">
            Welcome back! Please login to continue.
          </p>
        </div>
        <form className="space-y-4">
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
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2 text-green-700">
              <input type="checkbox" className="form-checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-green-600 hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            onClick={Navigate('/')}
            className="w-full py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-green-700">
          Don’t have an account?{" "}
          <Link to={'/signup'} className="font-medium text-green-800 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
