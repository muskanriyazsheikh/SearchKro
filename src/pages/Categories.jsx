// import React, { useState, useEffect } from 'react';
// import API from '../api';

// const Categories = () => {
//   const [categoryData, setCategoryData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // States for toggling between search/list and custom input
//   const [isCustomCategory, setIsCustomCategory] = useState(false);
//   const [isCustomProduct, setIsCustomProduct] = useState(false);

//   // Modal Form State
//   const [formData, setFormData] = useState({
//     role: '',
//     categoryName: '',
//     productName: '',
//     status: true
//   });

//   const fetchCategories = async () => {
//     setLoading(true);
//     try {
//       // Use GET categories endpoint (server expects POST at /postCategories)
//       const res = await API.get('/categories');
//       setCategoryData(res.data || []);
//     } catch (err) {
//       console.error("Error fetching categories:", err);
//       setCategoryData([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const handleAddCategorySubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Build payload matching backend shape
//       const payload = {
//         role: formData.role,
//         categoryName: formData.categoryName,
//         productName: formData.productName,
//         status: !!formData.status
//       };

//       // POST to your specific endpoint
//       const res = await API.post('/postCategories', payload);
      
//       if (res.data) {
//         setCategoryData(prev => [...prev, res.data]);
//       } else {
//         fetchCategories();
//       }
      
//       setIsModalOpen(false);
//       // Reset form and toggles
//       setFormData({ role: '', categoryName: '', productName: '', status: true });
//       setIsCustomCategory(false);
//       setIsCustomProduct(false);
//       alert("Category added successfully!");
//     } catch (err) {
//       console.error("Add Error:", err);
//       alert("Failed to add category.");
//     }
//   };

//   return (
//     <div className="p-6">
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-4xl font-bold text-[#1E1E1E]">Categories</h1>
//         <button 
//           onClick={() => setIsModalOpen(true)}
//           className="bg-[#00CCE5] text-white px-6 py-3 rounded-xl font-bold shadow-md hover:bg-[#00b8cc] flex items-center gap-2 transition-all active:scale-95"
//         >
//           <span className="text-2xl">+</span> Add Category
//         </button>
//       </div>

//       <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
//         <div className="p-8 border-b border-gray-100">
//           <h2 className="text-xl font-bold text-gray-800">Categories</h2>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="text-gray-900 font-bold border-b border-gray-100 bg-gray-50/30">
//                 <th className="px-8 py-5 text-lg">S.no.</th>
//                 <th className="px-8 py-5 text-lg">Role</th>
//                 <th className="px-8 py-5 text-lg">Categories</th>
//                 <th className="px-8 py-5 text-lg">Product</th>
//                 <th className="px-8 py-5 text-lg">Popular</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-50">
//               {loading ? (
//                 <tr><td colSpan="5" className="p-10 text-center">Loading...</td></tr>
//               ) : categoryData.length > 0 ? (
//                 categoryData.map((item, index) => (
//                   <tr key={item.id || index} className="hover:bg-gray-50/50">
//                     <td className="px-8 py-5 text-gray-600 font-medium">{index + 1}</td>
//                     <td className="px-8 py-5 text-gray-600 font-medium">{item.role || "N/A"}</td>
                    
//                     {/* MEDIUM FONT SIZE (text-lg) for Category and Product */}
//                     <td className="px-8 py-5 text-gray-900 text-lg font-semibold">
//                       {item.categoryName || item.category || item.categories || "N/A"}
//                     </td>
//                     <td className="px-8 py-5 text-gray-900 text-lg font-semibold">
//                       {item.productName || item.product || "N/A"}
//                     </td>
                    
//                     {/* POSITIVE STATUS WITH BLUE ARROW */}
//                     <td className="px-8 py-5">
//                       {item.status === true ? (
//                         <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6F9F1] text-[#22C55E] font-bold text-sm">
//                           Positive 
//                           <span className="text-[#00CCE5] text-lg font-bold">↑</span>
//                         </span>
//                       ) : (
//                         <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF1F2] text-[#F43F5E] font-bold text-sm">
//                           Negative 
//                           <span className="text-lg">↓</span>
//                         </span>
//                       )}
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="5" className="p-20 text-center text-gray-400">
//                     No categories in your page.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* MODAL */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl">
//             <div className="flex justify-between items-center p-6 border-b border-gray-100">
//               <h2 className="text-2xl font-bold text-gray-900">Add New Category</h2>
//               <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 text-2xl">&times;</button>
//             </div>

//             <form onSubmit={handleAddCategorySubmit} className="p-8 space-y-6">
//               {/* Role */}
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

//               {/* Category with Custom Toggle */}
//               <div>
//                 <div className="flex justify-between mb-2">
//                   <label className="text-gray-700 font-bold">Category</label>
//                   <button 
//                     type="button" 
//                     onClick={() => setIsCustomCategory(!isCustomCategory)}
//                     className="text-[#00CCE5] text-sm font-bold"
//                   >
//                     {isCustomCategory ? "← Select List" : "+ Custom category"}
//                   </button>
//                 </div>
//                 <input 
//                   type="text"
//                   placeholder={isCustomCategory ? "Enter custom category" : "Search categories..."}
//                   className="w-full p-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-[#00CCE5]"
//                   value={formData.categoryName}
//                   onChange={(e) => setFormData({...formData, categoryName: e.target.value})}
//                   required
//                 />
//               </div>

//               {/* Product with Custom Toggle */}
//               <div>
//                 <div className="flex justify-between mb-2">
//                   <label className="text-gray-700 font-bold">Product</label>
//                   <button 
//                     type="button" 
//                     onClick={() => setIsCustomProduct(!isCustomProduct)}
//                     className="text-[#00CCE5] text-sm font-bold"
//                   >
//                     {isCustomProduct ? "← Select List" : "+ Custom product"}
//                   </button>
//                 </div>
//                 <input 
//                   type="text"
//                   placeholder={isCustomProduct ? "Enter custom product" : "Search products..."}
//                   className="w-full p-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-[#00CCE5]"
//                   value={formData.productName}
//                   onChange={(e) => setFormData({...formData, productName: e.target.value})}
//                   required
//                 />
//               </div>

//               {/* Popular */}
//               <div>
//                 <label className="block text-gray-700 font-bold mb-2">Popular</label>
//                 <select 
//                   className="w-full p-3 border border-[#00CCE5] rounded-xl bg-white font-bold"
//                   value={formData.status ? 'true' : 'false'}
//                   onChange={(e) => setFormData({...formData, status: e.target.value === 'true'})}
//                 >
//                   <option value="true">Positive</option>
//                   <option value="false">Negative</option>
//                 </select>
//               </div>

//               {/* Actions */}
//               <div className="flex gap-4 pt-4">
//                 <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 py-3 border border-gray-300 rounded-xl font-bold text-gray-500">Cancel</button>
//                 <button type="submit" className="flex-1 py-3 bg-[#00CCE5] text-white rounded-xl font-bold hover:bg-[#00b8cc] shadow-md">Add Category</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Categories;


import React, { useState, useEffect } from 'react';
import API from '../api';

const Categories = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isCustomCategory, setIsCustomCategory] = useState(false);
  const [isCustomProduct, setIsCustomProduct] = useState(false);

  const [formData, setFormData] = useState({
    role: '',
    categoryName: '',
    productName: '',
    status: true
  });

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const res = await API.get('/categories');
      setCategoryData(res.data || []);
    } catch (err) {
      console.error("Error fetching categories:", err);
      setCategoryData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleAddCategorySubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        role: formData.role,
        categoryName: formData.categoryName,
        productName: formData.productName,
        status: !!formData.status
      };

      const res = await API.post('/postCategories', payload);

      if (res.data) {
        setCategoryData(prev => [...prev, res.data]);
      } else {
        fetchCategories();
      }

      setIsModalOpen(false);
      setFormData({ role: '', categoryName: '', productName: '', status: true });
      setIsCustomCategory(false);
      setIsCustomProduct(false);
      alert("Category added successfully!");
    } catch (err) {
      console.error("Add Error:", err);
      alert("Failed to add category.");
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E1E1E]">
          Categories
        </h1>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#00CCE5] text-white px-5 sm:px-6 py-3 rounded-xl font-bold shadow-md hover:bg-[#00b8cc] flex items-center gap-2 transition-all active:scale-95"
        >
          <span className="text-xl sm:text-2xl">+</span>
          <span>Add Category</span>
        </button>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-gray-100">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800">
            Categories
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-[700px] w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-900 font-bold border-b border-gray-100 bg-gray-50/30 text-sm sm:text-base">
                <th className="px-4 sm:px-8 py-4">S.no.</th>
                <th className="px-4 sm:px-8 py-4">Role</th>
                <th className="px-4 sm:px-8 py-4">Categories</th>
                <th className="px-4 sm:px-8 py-4">Product</th>
                <th className="px-4 sm:px-8 py-4">Popular</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-50 text-sm sm:text-base">
              {loading ? (
                <tr>
                  <td colSpan="5" className="p-10 text-center">
                    Loading...
                  </td>
                </tr>
              ) : categoryData.length > 0 ? (
                categoryData.map((item, index) => (
                  <tr key={item.id || index} className="hover:bg-gray-50/50">
                    <td className="px-4 sm:px-8 py-4 text-gray-600 font-medium">
                      {index + 1}
                    </td>
                    <td className="px-4 sm:px-8 py-4 text-gray-600 font-medium">
                      {item.role || "N/A"}
                    </td>
                    <td className="px-4 sm:px-8 py-4 text-gray-900 font-semibold">
                      {item.categoryName || item.category || item.categories || "N/A"}
                    </td>
                    <td className="px-4 sm:px-8 py-4 text-gray-900 font-semibold">
                      {item.productName || item.product || "N/A"}
                    </td>
                    <td className="px-4 sm:px-8 py-4">
                      {item.status === true ? (
                        <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[#E6F9F1] text-[#22C55E] font-bold text-xs sm:text-sm">
                          Positive
                          <span className="text-[#00CCE5] text-base sm:text-lg">↑</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[#FFF1F2] text-[#F43F5E] font-bold text-xs sm:text-sm">
                          Negative
                          <span className="text-base sm:text-lg">↓</span>
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="p-12 text-center text-gray-400">
                    No categories in your page.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden">
            <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-100">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Add New Category
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleAddCategorySubmit} className="p-4 sm:p-6 space-y-5">
              {/* Role */}
              <div>
                <label className="block text-gray-700 font-bold mb-2">
                  Role
                </label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-[#00CCE5]"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  required
                >
                  <option value="">Select Role</option>
                  <option value="Buyer">Buyer</option>
                  <option value="Seller">Seller</option>
                </select>
              </div>

              {/* Category */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-gray-700 font-bold">Category</label>
                  <button
                    type="button"
                    onClick={() => setIsCustomCategory(!isCustomCategory)}
                    className="text-[#00CCE5] text-sm font-bold"
                  >
                    {isCustomCategory ? "← Select List" : "+ Custom category"}
                  </button>
                </div>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-[#00CCE5]"
                  value={formData.categoryName}
                  onChange={(e) =>
                    setFormData({ ...formData, categoryName: e.target.value })
                  }
                  required
                />
              </div>

              {/* Product */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-gray-700 font-bold">Product</label>
                  <button
                    type="button"
                    onClick={() => setIsCustomProduct(!isCustomProduct)}
                    className="text-[#00CCE5] text-sm font-bold"
                  >
                    {isCustomProduct ? "← Select List" : "+ Custom product"}
                  </button>
                </div>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-[#00CCE5]"
                  value={formData.productName}
                  onChange={(e) =>
                    setFormData({ ...formData, productName: e.target.value })
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
                  className="w-full p-3 border border-[#00CCE5] rounded-xl bg-white font-bold"
                  value={formData.status ? 'true' : 'false'}
                  onChange={(e) =>
                    setFormData({ ...formData, status: e.target.value === 'true' })
                  }
                >
                  <option value="true">Positive</option>
                  <option value="false">Negative</option>
                </select>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-3 border border-gray-300 rounded-xl font-bold text-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-[#00CCE5] text-white rounded-xl font-bold hover:bg-[#00b8cc] shadow-md"
                >
                  Add Category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default Categories;
