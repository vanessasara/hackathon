'use client'

import { useState } from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { ImAppleinc } from "react-icons/im";

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);
  
    const toggleAuthMode = () => {
      setIsLogin((prev) => !prev);
    };
  
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-md w-full bg-white shadow-lg rounded-md p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">
            {isLogin ? "Sign In" : "Sign Up"}
          </h3>
          <form>
            {!isLogin && (
              <div className="mb-4">
                <label className="block mb-2 font-medium">Name</label>
                <div className="flex items-center border rounded px-3 py-2">
                  <FaUser className="mr-2 text-gray-400" />
                  <input
                    type="text"
                    className="w-full focus:outline-none"
                    placeholder="Enter your name"
                  />
                </div>
              </div>
            )}
            <div className="mb-4">
              <label className="block mb-2 font-medium">Email</label>
              <div className="flex items-center border rounded px-3 py-2">
                <FaEnvelope className="mr-2 text-gray-400" />
                <input
                  type="email"
                  className="w-full focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Password</label>
              <div className="flex items-center border rounded px-3 py-2">
                <FaLock className="mr-2 text-gray-400" />
                <input
                  type="password"
                  className="w-full focus:outline-none"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            {isLogin && (
              <div className="flex items-center mb-4">
                <input type="checkbox" className="mr-2" />
                <span>Remember me?</span>
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-secondary text-white font-bold py-2 rounded"
            >
              {isLogin ? "Sign In" : "Sign Up"}
            </button>
          </form>
          <div className="text-center mt-4">
            <p>
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                type="button"
                className="text-secondary underline"
                onClick={toggleAuthMode}
              >
                {isLogin ? "Sign Up" : "Sign In"}
              </button>
            </p>
          </div>
          <div className="text-center mt-8">
            <p>or</p>
            <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              <FcGoogle className="h-6 mr-2" />
              {isLogin ? "Sign in with Google" : "Sign up with Google"}
            </button>
            <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              <ImAppleinc className="h-6 mr-2" />
              {isLogin ? "Sign in with Apple" : "Sign up with Apple"}
            </button>
          </div>
        </div>
      </div>
    );
  }