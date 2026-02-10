// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import API from '../../api'; 

// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState({ type: '', text: '' });
//   const navigate = useNavigate();

//   const handleSendVerification = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage({ type: '', text: '' });

//     try {
//       // Hits the backend endpoint to trigger the OTP email
//       const response = await API.post('/auth/forgot-password', { email });
      
//       if (response.status === 200) {
//         setMessage({ type: 'success', text: 'Verification code sent to your email!' });
//         // Optional: Navigate to the OTP entry page after a short delay
//         // setTimeout(() => navigate('/verify-otp'), 2000);
//       }
//     } catch (error) {
//       // Handles the 'Network Error' or 'Connection Refused' issue
//       const errorMsg = error.code === 'ERR_NETWORK' 
//         ? "Server is down. Please check if your backend is running on port 3000."
//         : (error.response?.data?.message || "Something went wrong.");
      
//       setMessage({ type: 'error', text: errorMsg });
//       console.error("Forgot Password Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex w-full max-w-6xl bg-white rounded-3xl overflow-hidden min-h-[600px] shadow-lg mx-auto mt-10">
//       <div className="w-full md:w-1/2 p-8 lg:p-20 flex flex-col justify-center">
//         <div className="max-w-md w-full mx-auto">
//           <h1 className="text-5xl font-bold text-gray-900 mb-3">Forgot password?</h1>
//           <p className="text-gray-500 mb-10 text-lg">
//             Enter the email address you used when you joined and we'll send you code to reset your password.
//           </p>

//           {/* Status Message Display */}
//           {message.text && (
//             <div className={`p-4 mb-6 rounded-xl font-medium ${
//               message.type === 'success' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
//             }`}>
//               {message.text}
//             </div>
//           )}

//           <form className="space-y-6" onSubmit={handleSendVerification}>
//             <input 
//               type="email" 
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter email address" 
//               className="w-full p-4 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-cyan-400 transition"
//             />

//             <button 
//               type="submit" 
//               disabled={loading}
//               className={`w-full bg-[#00CCE5] hover:bg-[#00b4cc] text-white font-semibold py-4 rounded-xl transition shadow-md mt-4 text-lg ${
//                 loading ? 'opacity-70 cursor-not-allowed' : ''
//               }`}
//             >
//               {loading ? 'Sending...' : 'Send verification'}
//             </button>
//           </form>

//           <button 
//             onClick={() => navigate(-1)} 
//             className="mt-8 flex items-center gap-2 text-gray-900 font-bold hover:underline"
//           >
//             <span>←</span> Back
//           </button>
//         </div>
//       </div>

//       <div className="hidden md:flex w-1/2 items-center justify-center p-12 bg-gray-50/50">
//         <img 
//           src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1123.jpg" 
//           alt="Illustration" 
//           className="max-w-full h-auto"
//         />
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../api'; 

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const navigate = useNavigate();

  const handleSendVerification = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await API.post('/auth/forgot-password', { email });
      
      if (response.status === 200) {
        setMessage({ type: 'success', text: 'Verification code sent to your email!' });
      }
    } catch (error) {
      const errorMsg = error.code === 'ERR_NETWORK' 
        ? "Server is down. Please check if your backend is running on port 3000."
        : (error.response?.data?.message || "Something went wrong.");
      
      setMessage({ type: 'error', text: errorMsg });
      console.error("Forgot Password Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6">
      <div className="flex w-full max-w-6xl bg-white rounded-3xl overflow-hidden shadow-lg">

        {/* Left Section */}
        <div className="w-full md:w-1/2 px-6 py-10 sm:px-10 sm:py-14 lg:px-20 lg:py-20 flex flex-col justify-center">
          <div className="max-w-md w-full mx-auto">

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              Forgot password?
            </h1>

            <p className="text-gray-500 mb-8 sm:mb-10 text-base sm:text-lg">
              Enter the email address you used when you joined and we'll send you a code to reset your password.
            </p>

            {/* Status Message */}
            {message.text && (
              <div
                className={`p-4 mb-6 rounded-xl font-medium text-sm sm:text-base ${
                  message.type === 'success'
                    ? 'bg-green-50 text-green-600'
                    : 'bg-red-50 text-red-600'
                }`}
              >
                {message.text}
              </div>
            )}

            <form className="space-y-5 sm:space-y-6" onSubmit={handleSendVerification}>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-cyan-400 transition text-sm sm:text-base"
              />

              <button 
                type="submit" 
                disabled={loading}
                className={`w-full bg-[#00CCE5] hover:bg-[#00b4cc] text-white font-semibold py-3 sm:py-4 rounded-xl transition shadow-md text-base sm:text-lg ${
                  loading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'Sending...' : 'Send verification'}
              </button>
            </form>

            <button 
              onClick={() => navigate(-1)} 
              className="mt-6 sm:mt-8 flex items-center gap-2 text-gray-900 font-bold hover:underline text-sm sm:text-base"
            >
              <span>←</span> Back
            </button>
          </div>
        </div>

        {/* Right Illustration (hidden on mobile) */}
        <div className="hidden md:flex w-1/2 items-center justify-center p-10 lg:p-12 bg-gray-50/50">
          <img 
            src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1123.jpg" 
            alt="Illustration"
            className="max-w-full h-auto"
          />
        </div>

      </div>
    </div>
  );
};

export default ForgotPassword;
