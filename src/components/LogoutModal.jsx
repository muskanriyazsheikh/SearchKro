import React from 'react';

const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  const token = localStorage.removeItem('token');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-3xl p-8 w-[450px] shadow-2xl relative text-center">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 border border-gray-200 rounded-md w-6 h-6 flex items-center justify-center"
        >
          ✕
        </button>

        {/* Logout Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-[#00CCE5] rounded-xl flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </div>
        </div>

        {/* Text Content */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">You are Logged Out?</h2>
        <p className="text-gray-500 text-sm mb-8 px-4">
          You are about to logout in 3 secs. Do you want to continue?
        </p>

        {/* Action Button */}
        <button
          onClick={onConfirm}
          className="w-full py-4 bg-[#00CCE5] text-white font-bold rounded-xl hover:bg-[#00b8cc] transition-colors text-lg"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default LogoutModal;