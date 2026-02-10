// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import API from '../../api'; // Ensure this path to your api.js is correct

// const Signup = () => {
//   // 1. Define state to store form inputs
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
  
//   const navigate = useNavigate();

//   // 2. Handle Input Changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // 3. Handle Form Submission
//   const handleCreateAccount = async (e) => {
//     e.preventDefault(); // Prevent page refresh
//     setLoading(true);
//     setError('');

//     try {
//       // Use the API instance to send a POST request
//       const response = await API.post('/auth/signup', formData);

//       if (response.status === 201 || response.status === 200) {
//         console.log("Account created successfully!");
//         // Save token if your backend sends one on signup
//         if (response.data.token) localStorage.setItem('token', response.data.token);
        
//         navigate("/login"); // Redirect to login after successful signup
//       }
//     } catch (err) {
//       // Handle errors (e.g., email already exists)
//       setError(err.response?.data?.message || "Failed to create account. Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex w-full max-w-6xl bg-white rounded-3xl overflow-hidden min-h-[600px] shadow-lg mx-auto mt-10">
      
//       {/* Left Side: Form Section */}
//       <div className="w-full md:w-1/2 p-8 lg:p-20 flex flex-col justify-center">
//         <div className="max-w-md w-full mx-auto">
//           <h1 className="text-5xl font-bold text-gray-900 mb-3 font-sans">Create account</h1>
//           <p className="text-gray-500 mb-10 text-lg">Let's get started with your 30 days trial</p>

//           {/* Show Error Message */}
//           {error && <p className="text-red-500 mb-4 font-medium bg-red-50 p-3 rounded-lg">{error}</p>}

//           <form className="space-y-6" onSubmit={handleCreateAccount}>
//             <div>
//               <input 
//                 type="text" 
//                 name="name"
//                 required
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Name" 
//                 className="w-full p-4 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-cyan-400 transition placeholder:text-gray-400"
//               />
//             </div>
//             <div>
//               <input 
//                 type="email" 
//                 name="email"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Email" 
//                 className="w-full p-4 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-cyan-400 transition placeholder:text-gray-400"
//               />
//             </div>
//             <div>
//               <input 
//                 type="password" 
//                 name="password"
//                 required
//                 value={formData.password}
//                 onChange={handleChange}
//                 placeholder="Password" 
//                 className="w-full p-4 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-cyan-400 transition placeholder:text-gray-400"
//               />
//             </div>

//             <button 
//               type="submit" 
//               disabled={loading}
//               className={`w-full bg-[#00CCE5] hover:bg-[#00b4cc] text-white font-semibold py-4 rounded-xl transition shadow-md mt-4 text-lg ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
//             >
//               {loading ? 'Creating account...' : 'Create account'}
//             </button>
//           </form>

//           <div className="mt-6 text-sm">
//             <p className="text-gray-600">
//               Already have an account? <Link to="/login" className="text-gray-900 font-bold underline">Log in</Link>
//             </p>
//           </div>
//           {/* ... Rest of your Google Button code ... */}
//         </div>
//       </div>

//       {/* Right Side: Illustration Section */}
//       <div className="hidden md:flex w-1/2 items-center justify-center p-12 bg-gray-50/50">
//         <img 
//           src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg" 
//           alt="Signup Illustration" 
//           className="max-w-full h-auto drop-shadow-sm"
//         />
//       </div>
//     </div>
//   );
// };

// export default Signup;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../../api';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await API.post('/auth/signup', formData);

      if (response.status === 201 || response.status === 200) {
        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
        }
        navigate("/login");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create account. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="flex w-full max-w-6xl bg-white rounded-3xl overflow-hidden shadow-lg">

        {/* Left Side: Form Section */}
        <div className="w-full md:w-1/2 px-6 sm:px-10 lg:px-20 py-12 flex flex-col justify-center">
          <div className="max-w-md w-full mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              Create account
            </h1>

            <p className="text-gray-500 mb-8 sm:mb-10 text-base sm:text-lg">
              Let's get started with your 30 days trial
            </p>

            {error && (
              <p className="text-red-500 mb-4 font-medium bg-red-50 p-3 rounded-lg text-sm">
                {error}
              </p>
            )}

            <form className="space-y-5" onSubmit={handleCreateAccount}>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full p-4 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-cyan-400 transition"
              />

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-4 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-cyan-400 transition"
              />

              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full p-4 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-cyan-400 transition"
              />

              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-[#00CCE5] hover:bg-[#00b4cc] text-white font-semibold py-4 rounded-xl transition shadow-md text-base sm:text-lg ${
                  loading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'Creating account...' : 'Create account'}
              </button>
            </form>

            <div className="mt-6 text-sm text-center sm:text-left">
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-gray-900 font-bold underline">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Illustration */}
        <div className="hidden md:flex w-1/2 items-center justify-center p-10 lg:p-12 bg-gray-50">
          <img
            src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg"
            alt="Signup Illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
