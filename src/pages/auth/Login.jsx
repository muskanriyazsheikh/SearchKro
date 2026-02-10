// import React, { useState } from 'react'; // Consolidated imports
// import { Link, useNavigate } from 'react-router-dom';
// import loginImg from '/src/assets/login.png'; // Renamed to avoid confusion with the component name
// import API from '../../api'; // This is your Axios instance

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(""); // Added to show user errors

//   const navigate = useNavigate();

//   const checkLogin = async (e) => {
//     // Prevent form reload if not already handled
//     if (e) e.preventDefault(); 
    
//     setError(""); // Clear previous errors
    
//     try {
//       // Use your Axios instance 'API' directly. 
//       // You just need to provide the endpoint path, not the whole fetch object.
//       const response = await API.post('/auth/login', {
//         email: email,
//         password: password,
//       });

//       // Axios puts the response data inside a 'data' property
//       if (response.status === 200 || response.status === 201) {
//         console.log("Login successful:", response.data);
        
//         // Save token for future requests
//         localStorage.setItem('token', response.data.token); 
        
//         navigate("/dashboard");
//       }
//     } catch (error) {
//       // Axios errors are handled in the catch block
//       const message = error.response?.data?.message || "Login failed. Please check your credentials.";
//       setError(message);
//       console.error("Error during login:", message);
//     }
//   };

//   return (
//     <div className="flex w-full max-w-6xl bg-white rounded-3xl overflow-hidden min-h-[600px] shadow-sm">
      
//       {/* Left Side: Illustration Section */}
//       <div className="hidden md:flex w-1/2 items-center justify-center p-12 bg-white">
//         <div className="relative w-full max-w-md">
//           <img 
//             src={loginImg} 
//             alt="Login Illustration" 
//             className="max-w-full h-auto drop-shadow-sm"
//           />
//         </div>
//       </div>

//       {/* Right Side: Form Section */}
//       <div className="w-full md:w-1/2 p-8 lg:p-20 flex flex-col justify-center bg-white">
//         <div className="max-w-md w-full mx-auto">
//           <h1 className="text-5xl font-bold text-gray-900 mb-8 font-sans">Welcome back</h1>

//           {/* Show error message if login fails */}
//           {error && <p className="text-red-500 text-sm mb-4 bg-red-50 p-3 rounded-lg">{error}</p>}

//           <form className="space-y-6" onSubmit={checkLogin}>
//             <div>
//               <input 
//                 type="email" 
//                 required
//                 onChange={(e)=> setEmail(e.target.value)}
//                 placeholder="Email" 
//                 className="w-full p-4 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-cyan-400 transition placeholder:text-gray-400"
//               />
//             </div>
//             <div>
//               <input 
//                 type="password" 
//                 required
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password" 
//                 className="w-full p-4 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-cyan-400 transition placeholder:text-gray-400"
//               />
//             </div>

//             <div className="text-right">
//               <Link to="/forgot-password" size="sm" className="text-sm text-gray-900 font-semibold hover:underline">
//                 Forgot password?
//               </Link>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-[#00CCE5] hover:bg-[#00b4cc] text-white font-semibold py-4 rounded-xl transition shadow-md mt-4 text-lg"
//             >
//               Log in
//             </button>
//           </form>

//           <div className="mt-6 text-sm text-center md:text-left">
//             <p className="text-gray-500">
//               Don't have an account?{' '}
//               <Link to="/signup" className="text-gray-900 font-bold underline">Sign up</Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginImg from '/src/assets/login.png';
import API from '../../api';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const checkLogin = async (e) => {
    if (e) e.preventDefault(); 
    setError("");
    
    try {
      const response = await API.post('/auth/login', {
        email: email,
        password: password,
      });

      if (response.status === 200 || response.status === 201) {
        localStorage.setItem('token', response.data.token); 
        navigate("/dashboard");
      }
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "Login failed. Please check your credentials.";
      setError(message);
      console.error("Error during login:", message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6">
      <div className="flex w-full max-w-6xl bg-white rounded-3xl overflow-hidden shadow-sm">

        {/* Left: Illustration */}
        <div className="hidden md:flex w-1/2 items-center justify-center p-10 lg:p-12 bg-white">
          <div className="relative w-full max-w-md">
            <img
              src={loginImg}
              alt="Login Illustration"
              className="max-w-full h-auto drop-shadow-sm"
            />
          </div>
        </div>

        {/* Right: Form */}
        <div className="w-full md:w-1/2 px-6 py-10 sm:px-10 sm:py-14 lg:px-20 lg:py-20 flex flex-col justify-center bg-white">
          <div className="max-w-md w-full mx-auto">

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 font-sans">
              Welcome back
            </h1>

            {error && (
              <p className="text-red-500 text-sm mb-4 bg-red-50 p-3 rounded-lg">
                {error}
              </p>
            )}

            <form className="space-y-5 sm:space-y-6" onSubmit={checkLogin}>
              <input
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-cyan-400 transition placeholder:text-gray-400 text-sm sm:text-base"
              />

              <input
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-cyan-400 transition placeholder:text-gray-400 text-sm sm:text-base"
              />

              <div className="text-right">
                <Link
                  to="/forgot-password"
                  className="text-sm text-gray-900 font-semibold hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-[#00CCE5] hover:bg-[#00b4cc] text-white font-semibold py-3 sm:py-4 rounded-xl transition shadow-md text-base sm:text-lg"
              >
                Log in
              </button>
            </form>

            <div className="mt-6 text-sm text-center md:text-left">
              <p className="text-gray-500">
                Don't have an account?{' '}
                <Link to="/signup" className="text-gray-900 font-bold underline">
                  Sign up
                </Link>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
