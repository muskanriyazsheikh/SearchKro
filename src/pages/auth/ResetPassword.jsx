import React from 'react';
import { Link } from 'react-router-dom';
import ResetPass from '/src/assets/resetPass.png';

const ResetPassword = () => {
  return (
    <div className="flex w-full max-w-6xl bg-white rounded-3xl overflow-hidden min-h-[600px] shadow-sm">
      
      {/* Left Side: Form Section */}
      <div className="w-full md:w-1/2 p-8 lg:p-20 flex flex-col justify-center bg-white">
        <div className="max-w-md w-full mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 font-sans">Create new password</h1>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm text-gray-400 block ml-1">create password</label>
              <input 
                type="password" 
                placeholder="password" 
                className="w-full p-4 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-cyan-400 transition placeholder:text-gray-300"
                required
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#00CCE5] hover:bg-[#00b4cc] text-white font-semibold py-4 rounded-xl transition shadow-md mt-4 text-lg"
            >
              Submit
            </button>
          </form>

          {/* Back Navigation */}
          <div className="mt-12">
            <Link 
              to="/login" 
              className="flex items-center gap-2 text-gray-900 font-bold hover:gap-3 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side: Illustration Section */}
      <div className="hidden md:flex w-1/2 items-center justify-center p-12 bg-white">
        <div className="relative w-full max-w-md">
          <img 
            src={ResetPass}
            alt="Reset Password Illustration" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;