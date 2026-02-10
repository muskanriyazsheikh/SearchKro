// import React, { useState, useEffect } from 'react';
// import API from '../api';

// const Location = () => {
//   const [locationData, setLocationData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isCustomLocation, setIsCustomLocation] = useState(false);
//   const [isCustomRegion, setIsCustomRegion] = useState(false);

//   const [formData, setFormData] = useState({
//     role: '',
//     location: '',
//     region: '',
//     popular: 'Positive'
//   });

//   // 1. FIX: Use the correct GET endpoint to avoid 405 error
//   const fetchLocations = async () => {
//     setLoading(true);
//     try {
//       const res = await API.get('/location');
//       setLocationData(res.data || []);
//     } catch (err) {
//       console.error("Error fetching locations:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchLocations();
//   }, []);

//   // 2. FIX: Ensure data keys match what your backend expects
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//        const payload = {
//         role: formData.role,
//         location: formData.location,
//         region: formData.region,
//         popular: formData.popular
//       };

//       // POST to your specific endpoint (do NOT include /api — baseURL already has it)
//       const res = await API.post('/postLocation', payload);
//       setIsModalOpen(false);
//       setFormData({ role: '', location: '', region: '', popular: 'Yes' });
//       fetchLocations(); // Refresh list
//       alert("Location added successfully!");
//     } catch (err) {
//       console.error("Submit error:", err);
//       console.error("Response status:", err.response?.status);
//       console.error("Response data:", err.response?.data);
//       alert("Error adding location. Check if all fields are filled.");
//     }
//   };

//   return (
//     <div className="p-6">
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-4xl font-bold text-[#1E1E1E]">Location</h1>
//         <button 
//           onClick={() => setIsModalOpen(true)}
//           className="bg-[#00CCE5] text-white px-6 py-3 rounded-xl font-bold shadow-md hover:bg-[#00b8cc] flex items-center gap-2 transition-all active:scale-95"
//         >
//           <span className="text-2xl">+</span> Add Location
//         </button>
//       </div>

//       {/* --- Added Table implementation from your initial code --- */}
//       <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
//         <div className="p-8 border-b border-gray-100">
//           <h2 className="text-xl font-bold text-gray-800">Location List</h2>
//         </div>
        
//         <div className="overflow-x-auto">
//           <table className="w-full text-left">
//             <thead>
//               <tr className="text-gray-900 font-bold border-b border-gray-100 bg-gray-50/30">
//                 <th className="px-8 py-5">S.no.</th>
//                 <th className="px-8 py-5">Role</th>
//                 <th className="px-8 py-5">Location</th>
//                 <th className="px-8 py-5">Region</th>
//                 <th className="px-8 py-5">Popular</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-50">
//               {loading ? (
//                 <tr><td colSpan="5" className="p-10 text-center">Loading locations...</td></tr>
//               ) : locationData.length > 0 ? (
//                 locationData.map((item, index) => (
//                   <tr key={item.id || index} className="hover:bg-gray-50/50 transition-colors">
//                     <td className="px-8 py-5 text-gray-600 font-medium">{index + 1}</td>
//                     <td className="px-8 py-5 text-gray-600 font-medium">{item.role || "N/A"}</td>
//                     <td className="px-8 py-5 text-gray-900 font-semibold">{item.location || item.locationName || "N/A"}</td>
//                     <td className="px-8 py-5 text-gray-900 font-semibold">{item.region || "N/A"}</td>
//                     <td className="px-8 py-5">
//                       <span className={`inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-sm font-bold shadow-sm border
//                         ${(item.popular === 'Positive' || item.status === 'Positive') 
//                           ? 'bg-[#E6F9F1] text-[#22C55E] border-[#DCFCE7]' 
//                           : 'bg-[#FFF1F2] text-[#F43F5E] border-[#FFE4E6]'}`}
//                       >
//                         {item.popular || item.status || "N/A"}
//                         <span>{(item.popular === 'Positive' || item.status === 'Positive') ? '↑' : '↓'}</span>
//                       </span>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr><td colSpan="5" className="p-20 text-center text-gray-400">No locations found.</td></tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* --- Add New Location Modal --- */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl">
//             <div className="flex justify-between items-center p-6 border-b border-gray-100">
//               <h2 className="text-2xl font-bold text-gray-900">Add New Location</h2>
//               <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 text-2xl">&times;</button>
//             </div>

//             <form onSubmit={handleSubmit} className="p-8 space-y-6">
//               <div>
//                 <label className="block text-gray-700 font-bold mb-2">Role</label>
//                 <select 
//                   className="w-full p-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-[#00CCE5]"
//                   value={formData.role}
//                   onChange={(e) => setFormData({...formData, role: e.target.value})}
//                   required
//                 >
//                   <option value="">Select Role</option>
//                   <option value="Buyer">Buyer</option>
//                   <option value="Seller">Seller</option>
//                 </select>
//               </div>

//               <div>
//                 <div className="flex justify-between mb-2">
//                   <label className="text-gray-700 font-bold">Location</label>
//                   <button 
//                     type="button" 
//                     onClick={() => setIsCustomLocation(!isCustomLocation)}
//                     className="text-[#00CCE5] text-sm font-bold"
//                   >
//                     {isCustomLocation ? "← Select List" : "+ Custom location"}
//                   </button>
//                 </div>
//                 <input 
//                   type="text"
//                   placeholder={isCustomLocation ? "Enter custom location" : "Search locations..."}
//                   className="w-full p-3 border border-gray-300 rounded-xl outline-none"
//                   value={formData.location}
//                   onChange={(e) => setFormData({...formData, location: e.target.value})}
//                   required
//                 />
//               </div>

//               <div>
//                 <div className="flex justify-between mb-2">
//                   <label className="text-gray-700 font-bold">Region</label>
//                   <button 
//                     type="button" 
//                     onClick={() => setIsCustomRegion(!isCustomRegion)}
//                     className="text-[#00CCE5] text-sm font-bold"
//                   >
//                     {isCustomRegion ? "← Select List" : "+ Custom region"}
//                   </button>
//                 </div>
//                 <input 
//                   type="text"
//                   placeholder={isCustomRegion ? "Enter custom region" : "Search regions..."}
//                   className="w-full p-3 border border-gray-300 rounded-xl outline-none"
//                   value={formData.region}
//                   onChange={(e) => setFormData({...formData, region: e.target.value})}
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-bold mb-2">Popular</label>
//                 <select 
//                   className="w-full p-3 border border-[#00CCE5] rounded-xl bg-white font-bold"
//                   value={formData.popular}
//                   onChange={(e) => setFormData({...formData, popular: e.target.value})}
//                 >
//                   <option value="Positive">Positive</option>
//                   <option value="Negative">Negative</option>
//                 </select>
//               </div>

//               <div className="flex gap-4 pt-4">
//                 <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 py-3 border border-gray-300 rounded-xl font-bold text-gray-500">Cancel</button>
//                 <button type="submit" className="flex-1 py-3 bg-[#00CCE5] text-white rounded-xl font-bold hover:bg-[#00b8cc]">Add Location</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Location;



import React, { useState, useEffect } from 'react';
import API from '../api';

const Location = () => {
  const [locationData, setLocationData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCustomLocation, setIsCustomLocation] = useState(false);
  const [isCustomRegion, setIsCustomRegion] = useState(false);

  const [formData, setFormData] = useState({
    role: '',
    location: '',
    region: '',
    popular: 'Positive'
  });

  const fetchLocations = async () => {
    setLoading(true);
    try {
      const res = await API.get('/location');
      setLocationData(res.data || []);
    } catch (err) {
      console.error("Error fetching locations:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        role: formData.role,
        location: formData.location,
        region: formData.region,
        popular: formData.popular
      };

      await API.post('/postLocation', payload);
      setIsModalOpen(false);
      setFormData({ role: '', location: '', region: '', popular: 'Yes' });
      fetchLocations();
      alert("Location added successfully!");
    } catch (err) {
      console.error("Submit error:", err);
      alert("Error adding location. Check if all fields are filled.");
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E1E1E]">
          Location
        </h1>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#00CCE5] text-white px-5 py-3 rounded-xl font-bold shadow-md hover:bg-[#00b8cc] flex items-center justify-center gap-2 transition-all active:scale-95 w-full sm:w-auto"
        >
          <span className="text-2xl">+</span> Add Location
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 sm:p-6 lg:p-8 border-b border-gray-100">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800">
            Location List
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-[900px] w-full text-left">
            <thead>
              <tr className="text-gray-900 font-bold border-b border-gray-100 bg-gray-50/30">
                <th className="px-6 py-4">S.no.</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Location</th>
                <th className="px-6 py-4">Region</th>
                <th className="px-6 py-4">Popular</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-50">
              {loading ? (
                <tr>
                  <td colSpan="5" className="p-10 text-center">
                    Loading locations...
                  </td>
                </tr>
              ) : locationData.length > 0 ? (
                locationData.map((item, index) => (
                  <tr
                    key={item.id || index}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="px-6 py-4 text-gray-600 font-medium">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 text-gray-600 font-medium">
                      {item.role || "N/A"}
                    </td>
                    <td className="px-6 py-4 text-gray-900 font-semibold">
                      {item.location || item.locationName || "N/A"}
                    </td>
                    <td className="px-6 py-4 text-gray-900 font-semibold">
                      {item.region || "N/A"}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-bold border
                        ${(item.popular === 'Positive' || item.status === 'Positive')
                          ? 'bg-[#E6F9F1] text-[#22C55E] border-[#DCFCE7]'
                          : 'bg-[#FFF1F2] text-[#F43F5E] border-[#FFE4E6]'}`}
                      >
                        {item.popular || item.status || "N/A"}
                        <span>
                          {(item.popular === 'Positive' || item.status === 'Positive') ? '↑' : '↓'}
                        </span>
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="p-16 text-center text-gray-400">
                    No locations found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl">
            <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-100">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Add New Location
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-5">
              {/* Role */}
              <div>
                <label className="block text-gray-700 font-bold mb-2">
                  Role
                </label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-xl"
                  value={formData.role}
                  onChange={(e) =>
                    setFormData({ ...formData, role: e.target.value })
                  }
                  required
                >
                  <option value="">Select Role</option>
                  <option value="Buyer">Buyer</option>
                  <option value="Seller">Seller</option>
                </select>
              </div>

              {/* Location */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-gray-700 font-bold">Location</label>
                  <button
                    type="button"
                    onClick={() => setIsCustomLocation(!isCustomLocation)}
                    className="text-[#00CCE5] text-sm font-bold"
                  >
                    {isCustomLocation ? "← Select List" : "+ Custom location"}
                  </button>
                </div>
                <input
                  type="text"
                  placeholder={
                    isCustomLocation
                      ? "Enter custom location"
                      : "Search locations..."
                  }
                  className="w-full p-3 border border-gray-300 rounded-xl"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  required
                />
              </div>

              {/* Region */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-gray-700 font-bold">Region</label>
                  <button
                    type="button"
                    onClick={() => setIsCustomRegion(!isCustomRegion)}
                    className="text-[#00CCE5] text-sm font-bold"
                  >
                    {isCustomRegion ? "← Select List" : "+ Custom region"}
                  </button>
                </div>
                <input
                  type="text"
                  placeholder={
                    isCustomRegion
                      ? "Enter custom region"
                      : "Search regions..."
                  }
                  className="w-full p-3 border border-gray-300 rounded-xl"
                  value={formData.region}
                  onChange={(e) =>
                    setFormData({ ...formData, region: e.target.value })
                  }
                  required
                />
              </div>

              {/* Popular */}
              <div>
                <label className="block text-gray-700 font-bold mb-2">
                  Popular
                </label>
                <select
                  className="w-full p-3 border border-[#00CCE5] rounded-xl font-bold"
                  value={formData.popular}
                  onChange={(e) =>
                    setFormData({ ...formData, popular: e.target.value })
                  }
                >
                  <option value="Positive">Positive</option>
                  <option value="Negative">Negative</option>
                </select>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-full sm:flex-1 py-3 border border-gray-300 rounded-xl font-bold text-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3 bg-[#00CCE5] text-white rounded-xl font-bold hover:bg-[#00b8cc]"
                >
                  Add Location
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Location;
