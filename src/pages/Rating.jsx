// import React, { useState, useEffect } from 'react';
// import API from '../api';

// const Rating = () => {
//   const [ratingData, setRatingData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isModalOpen, setIsModalOpen] = useState(false);
  
//   const [isCustomCategory, setIsCustomCategory] = useState(false);
//   const [isCustomShop, setIsCustomShop] = useState(false);

//   const [formData, setFormData] = useState({
//     category: '',
//     shop: '',
//     rating: '5',
//     status: true
//   });

//   const fetchRatings = async () => {
//     setLoading(true);
//     try {
//       const res = await API.get('/rating'); 
//       setRatingData(res.data || []);
//     } catch (err) {
//       console.error("Error fetching ratings:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchRatings();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (!formData.category.trim()) { alert('Enter category'); return; }
//       if (!formData.shop.trim()) { alert('Enter shop'); return; }
      
//       const payload = {
//         category: formData.category.trim(),
//         shop: formData.shop.trim(),
//         rating: Number(formData.rating),
//         status: !!formData.status
//       };
//       console.log('Sending payload:', payload);
//       console.log('Token:', localStorage.getItem('token'));
//       const res = await API.post('/postRating', payload);
//       console.log('POST response:', res?.data);
//       setIsModalOpen(false);
//       setFormData({ category: '', shop: '', rating: '5', status: true });
//       fetchRatings();
//       alert("Rating added successfully!");
//     } catch (err) {
//       console.error("Error adding rating:", err);
//       console.error("Response status:", err.response?.status);
//       console.error("Response data:", err.response?.data);
//       alert("Failed to add rating. Check console for details.");
//     }
//   };

//   const renderStars = (ratingValue) => {
//     const count = parseInt(ratingValue) || 5; 
//     return (
//       <div className="flex text-[#FBBF24]">
//         {[...Array(5)].map((_, i) => (
//           <span key={i} className="text-lg">
//             {i < count ? '★' : '☆'}
//           </span>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="p-6">
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-4xl font-bold text-[#1E1E1E]">Rating</h1>
//         <button 
//           onClick={() => setIsModalOpen(true)}
//           className="flex items-center gap-2 bg-[#00CCE5] hover:bg-[#00b8cc] text-white px-6 py-3 rounded-xl font-bold shadow-md transition-all active:scale-95"
//         >
//           <span className="text-2xl">+</span> Add Rating
//         </button>
//       </div>

//       <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
//         <div className="p-8 border-b border-gray-100">
//           <h2 className="text-xl font-bold text-gray-800">Rating List</h2>
//         </div>
        
//         <div className="overflow-x-auto">
//           <table className="w-full text-left">
//             <thead>
//               <tr className="text-gray-900 font-bold border-b border-gray-100 bg-gray-50/30">
//                 <th className="px-8 py-5">S.no.</th>
//                 <th className="px-8 py-5">Categories</th>
//                 <th className="px-8 py-5">Shop</th>
//                 <th className="px-8 py-5">Rating</th>
//                 <th className="px-8 py-5">Status</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-50">
//               {loading ? (
//                 <tr><td colSpan="5" className="p-10 text-center">Loading...</td></tr>
//               ) : ratingData.length > 0 ? (
//                 ratingData.map((item, index) => {
//                   // Use status boolean to determine display
//                   const isActive = item.status === true || item.status === 'true';

//                   return (
//                     <tr key={item._id || index} className="hover:bg-gray-50/50 transition-colors">
//                       <td className="px-8 py-5 text-gray-600 font-medium">{index + 1}</td>
//                       <td className="px-8 py-5 text-gray-600 font-medium">{item.category || "N/A"}</td>
//                       <td className="px-8 py-5 text-gray-600 font-medium">{item.shop || "N/A"}</td>
//                       <td className="px-8 py-5">{renderStars(item.rating)}</td>
//                       <td className="px-8 py-5">
//                         <span className={`inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-sm font-bold shadow-sm border
//                           ${isActive 
//                             ? 'bg-[#E6F9F1] text-[#22C55E] border-[#DCFCE7]' 
//                             : 'bg-[#FFF1F2] text-[#F43F5E] border-[#FFE4E6]'}`}
//                         >
//                           {isActive ? 'Active' : 'Inactive'}
//                           <span>{isActive ? '↑' : '↓'}</span>
//                         </span>
//                       </td>
//                     </tr>
//                   );
//                 })
//               ) : (
//                 <tr><td colSpan="5" className="p-20 text-center text-gray-400">No ratings found.</td></tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Modal remains the same */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl">
//             <div className="flex justify-between items-center p-6 border-b border-gray-100">
//               <h2 className="text-2xl font-bold text-gray-900">Add New Rating</h2>
//               <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 text-2xl">&times;</button>
//             </div>

//             <form onSubmit={handleSubmit} className="p-8 space-y-5">
//               <div>
//                 <div className="flex justify-between mb-2">
//                   <label className="text-gray-700 font-bold">Categories</label>
//                   <button type="button" onClick={() => setIsCustomCategory(!isCustomCategory)} className="text-[#00CCE5] text-sm font-bold">
//                     {isCustomCategory ? "+ Select from list" : "+ Custom category"}
//                   </button>
//                 </div>
//                 <input 
//                   type="text"
//                   placeholder="Search categories..."
//                   className="w-full p-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-[#00CCE5]"
//                   value={formData.category}
//                   onChange={(e) => setFormData({...formData, category: e.target.value})}
//                   required
//                 />
//               </div>

//               <div>
//                 <div className="flex justify-between mb-2">
//                   <label className="text-gray-700 font-bold">Shop</label>
//                   <button type="button" onClick={() => setIsCustomShop(!isCustomShop)} className="text-[#00CCE5] text-sm font-bold">
//                     {isCustomShop ? "+ Select from list" : "+ Custom shop"}
//                   </button>
//                 </div>
//                 <input 
//                   type="text"
//                   placeholder="Search shops..."
//                   className="w-full p-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-[#00CCE5]"
//                   value={formData.shop}
//                   onChange={(e) => setFormData({...formData, shop: e.target.value})}
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-bold mb-2">Rating</label>
//                 <select 
//                   className="w-full p-3 border border-gray-300 rounded-xl outline-none"
//                   value={formData.rating}
//                   onChange={(e) => setFormData({...formData, rating: e.target.value})}
//                 >
//                   <option value="5">5 Stars</option>
//                   <option value="4">4 Stars</option>
//                   <option value="3">3 Stars</option>
//                   <option value="2">2 Stars</option>
//                   <option value="1">1 Star</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-bold mb-2">Status</label>
//                 <select 
//                   className="w-full p-3 border border-[#00CCE5] rounded-xl bg-white font-bold"
//                   value={String(formData.status)}
//                   onChange={(e) => setFormData({...formData, status: e.target.value === 'true'})}
//                 >
//                   <option value="true">Active</option>
//                   <option value="false">Inactive</option>
//                 </select>
//               </div>

//               <div className="flex gap-4 pt-4">
//                 <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 py-3 border border-gray-300 rounded-xl font-bold text-gray-500">Cancel</button>
//                 <button type="submit" className="flex-1 py-3 bg-[#00CCE5] text-white rounded-xl font-bold hover:bg-[#00b8cc]">Add Rating</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Rating;



import React, { useState, useEffect } from 'react';
import API from '../api';

const Rating = () => {
  const [ratingData, setRatingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [isCustomCategory, setIsCustomCategory] = useState(false);
  const [isCustomShop, setIsCustomShop] = useState(false);

  const [formData, setFormData] = useState({
    category: '',
    shop: '',
    rating: '5',
    status: true
  });

  const fetchRatings = async () => {
    setLoading(true);
    try {
      const res = await API.get('/rating'); 
      setRatingData(res.data || []);
    } catch (err) {
      console.error("Error fetching ratings:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRatings();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!formData.category.trim()) { alert('Enter category'); return; }
      if (!formData.shop.trim()) { alert('Enter shop'); return; }
      
      const payload = {
        category: formData.category.trim(),
        shop: formData.shop.trim(),
        rating: Number(formData.rating),
        status: !!formData.status
      };
      const res = await API.post('/postRating', payload);
      setIsModalOpen(false);
      setFormData({ category: '', shop: '', rating: '5', status: true });
      fetchRatings();
      alert("Rating added successfully!");
    } catch (err) {
      console.error("Error adding rating:", err);
      alert("Failed to add rating.");
    }
  };

  const renderStars = (ratingValue) => {
    const count = parseInt(ratingValue) || 5; 
    return (
      <div className="flex text-[#FBBF24]">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-lg sm:text-xl">
            {i < count ? '★' : '☆'}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E1E1E]">
          Rating
        </h1>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center gap-2 bg-[#00CCE5] hover:bg-[#00b8cc] text-white px-5 py-3 rounded-xl font-bold shadow-md transition-all active:scale-95 w-full sm:w-auto"
        >
          <span className="text-2xl">+</span> Add Rating
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 sm:p-6 lg:p-8 border-b border-gray-100">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800">
            Rating List
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-[900px] w-full text-left">
            <thead>
              <tr className="text-gray-900 font-bold border-b border-gray-100 bg-gray-50/30">
                <th className="px-6 py-4">S.no.</th>
                <th className="px-6 py-4">Categories</th>
                <th className="px-6 py-4">Shop</th>
                <th className="px-6 py-4">Rating</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {loading ? (
                <tr>
                  <td colSpan="5" className="p-10 text-center">Loading...</td>
                </tr>
              ) : ratingData.length > 0 ? (
                ratingData.map((item, index) => {
                  const isActive = item.status === true || item.status === 'true';

                  return (
                    <tr key={item._id || index} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 text-gray-600 font-medium">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 text-gray-600 font-medium">
                        {item.category || "N/A"}
                      </td>
                      <td className="px-6 py-4 text-gray-600 font-medium">
                        {item.shop || "N/A"}
                      </td>
                      <td className="px-6 py-4">
                        {renderStars(item.rating)}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-bold border
                          ${isActive 
                            ? 'bg-[#E6F9F1] text-[#22C55E] border-[#DCFCE7]' 
                            : 'bg-[#FFF1F2] text-[#F43F5E] border-[#FFE4E6]'}`}
                        >
                          {isActive ? 'Active' : 'Inactive'}
                          <span>{isActive ? '↑' : '↓'}</span>
                        </span>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="5" className="p-16 text-center text-gray-400">
                    No ratings found.
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
                Add New Rating
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 text-2xl">
                &times;
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-5">
              {/* Category */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-gray-700 font-bold">Categories</label>
                  <button
                    type="button"
                    onClick={() => setIsCustomCategory(!isCustomCategory)}
                    className="text-[#00CCE5] text-sm font-bold"
                  >
                    {isCustomCategory ? "+ Select from list" : "+ Custom category"}
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Search categories..."
                  className="w-full p-3 border border-gray-300 rounded-xl"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  required
                />
              </div>

              {/* Shop */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-gray-700 font-bold">Shop</label>
                  <button
                    type="button"
                    onClick={() => setIsCustomShop(!isCustomShop)}
                    className="text-[#00CCE5] text-sm font-bold"
                  >
                    {isCustomShop ? "+ Select from list" : "+ Custom shop"}
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Search shops..."
                  className="w-full p-3 border border-gray-300 rounded-xl"
                  value={formData.shop}
                  onChange={(e) => setFormData({ ...formData, shop: e.target.value })}
                  required
                />
              </div>

              {/* Rating */}
              <div>
                <label className="block text-gray-700 font-bold mb-2">Rating</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-xl"
                  value={formData.rating}
                  onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                >
                  <option value="5">5 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="2">2 Stars</option>
                  <option value="1">1 Star</option>
                </select>
              </div>

              {/* Status */}
              <div>
                <label className="block text-gray-700 font-bold mb-2">Status</label>
                <select
                  className="w-full p-3 border border-[#00CCE5] rounded-xl font-bold"
                  value={String(formData.status)}
                  onChange={(e) =>
                    setFormData({ ...formData, status: e.target.value === 'true' })
                  }
                >
                  <option value="true">Active</option>
                  <option value="false">Inactive</option>
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
                  Add Rating
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rating;
