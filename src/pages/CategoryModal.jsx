// import React, { useState } from 'react';

// const CategoryModal = ({ isOpen, onClose, onAdd }) => {
//   // State to track if user is using 'Custom' input or 'List' selection
//   const [isCustomCategory, setIsCustomCategory] = useState(false);
//   const [isCustomProduct, setIsCustomProduct] = useState(false);

//   const [formData, setFormData] = useState({
//     role: '',
//     category: '', // Using 'category' singular to match common backend patterns
//     product: '',
//     popular: 'Positive'
//   });

//   if (!isOpen) return null;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onAdd(formData);
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl">
//         <div className="flex justify-between items-center p-6 border-b border-gray-100">
//           <h2 className="text-2xl font-bold text-gray-900">Add New Category</h2>
//           <button onClick={onClose} className="text-gray-400 text-2xl">&times;</button>
//         </div>

//         <form onSubmit={handleSubmit} className="p-8 space-y-6">
//           {/* Role Selection */}
//           <div>
//             <label className="block text-gray-700 font-bold mb-2 text-base">Role</label>
//             <select 
//               className="w-full p-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-[#00CCE5]"
//               value={formData.role}
//               onChange={(e) => setFormData({...formData, role: e.target.value})}
//               required
//             >
//               <option value="">Select Role</option>
//               <option value="Buyer">Buyer</option>
//               <option value="Seller">Seller</option>
//             </select>
//           </div>

//           {/* Category with Toggle Logic */}
//           <div>
//             <div className="flex justify-between mb-2">
//               <label className="text-gray-700 font-bold text-base">Category</label>
//               <button 
//                 type="button"
//                 onClick={() => setIsCustomCategory(!isCustomCategory)}
//                 className="text-[#00CCE5] text-sm font-semibold"
//               >
//                 {isCustomCategory ? '← Select from list' : '+ Custom category'}
//               </button>
//             </div>
//             <input 
//               type="text"
//               placeholder={isCustomCategory ? "Enter custom category" : "Search categories..."}
//               className="w-full p-3 border border-gray-300 rounded-xl outline-none"
//               value={formData.category}
//               onChange={(e) => setFormData({...formData, category: e.target.value})}
//               required
//             />
//           </div>

//           {/* Product with Toggle Logic */}
//           <div>
//             <div className="flex justify-between mb-2">
//               <label className="text-gray-700 font-bold text-base">Product</label>
//               <button 
//                 type="button"
//                 onClick={() => setIsCustomProduct(!isCustomProduct)}
//                 className="text-[#00CCE5] text-sm font-semibold"
//               >
//                 {isCustomProduct ? '← Select from list' : '+ Custom product'}
//               </button>
//             </div>
//             <input 
//               type="text"
//               placeholder={isCustomProduct ? "Enter custom product" : "Search products..."}
//               className="w-full p-3 border border-gray-300 rounded-xl outline-none"
//               value={formData.product}
//               onChange={(e) => setFormData({...formData, product: e.target.value})}
//               required
//             />
//           </div>

//           {/* Popular Selection */}
//           <div>
//             <label className="block text-gray-700 font-bold mb-2 text-base">Popular</label>
//             <select 
//               className="w-full p-3 border border-[#00CCE5] rounded-xl outline-none bg-white font-semibold text-gray-700"
//               value={formData.popular}
//               onChange={(e) => setFormData({...formData, popular: e.target.value})}
//             >
//               <option value="Positive">Positive</option>
//               <option value="Negative">Negative</option>
//             </select>
//           </div>

//           <div className="flex gap-4 pt-4">
//             <button type="button" onClick={onClose} className="flex-1 py-3 border border-gray-300 rounded-xl font-bold text-gray-500">Cancel</button>
//             <button type="submit" className="flex-1 py-3 bg-[#00CCE5] text-white rounded-xl font-bold hover:bg-[#00b8cc]">Add Category</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CategoryModal;




import React, { useState } from 'react';

const CategoryModal = ({ isOpen, onClose, onAdd }) => {
  const [isCustomCategory, setIsCustomCategory] = useState(false);
  const [isCustomProduct, setIsCustomProduct] = useState(false);

  const [formData, setFormData] = useState({
    role: '',
    category: '',
    product: '',
    popular: 'Positive'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      
      {/* Modal Container */}
      <div className="bg-white rounded-2xl sm:rounded-3xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl">

        {/* Header */}
        <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-100">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            Add New Category
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 text-2xl leading-none"
          >
            &times;
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-8 space-y-5">

          {/* Role */}
          <div>
            <label className="block text-gray-700 font-bold mb-2 text-sm sm:text-base">
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
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-1">
              <label className="text-gray-700 font-bold text-sm sm:text-base">
                Category
              </label>
              <button
                type="button"
                onClick={() => setIsCustomCategory(!isCustomCategory)}
                className="text-[#00CCE5] text-sm font-semibold self-start sm:self-auto"
              >
                {isCustomCategory ? '← Select from list' : '+ Custom category'}
              </button>
            </div>
            <input
              type="text"
              placeholder={isCustomCategory ? "Enter custom category" : "Search categories..."}
              className="w-full p-3 border border-gray-300 rounded-xl outline-none"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              required
            />
          </div>

          {/* Product */}
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-1">
              <label className="text-gray-700 font-bold text-sm sm:text-base">
                Product
              </label>
              <button
                type="button"
                onClick={() => setIsCustomProduct(!isCustomProduct)}
                className="text-[#00CCE5] text-sm font-semibold self-start sm:self-auto"
              >
                {isCustomProduct ? '← Select from list' : '+ Custom product'}
              </button>
            </div>
            <input
              type="text"
              placeholder={isCustomProduct ? "Enter custom product" : "Search products..."}
              className="w-full p-3 border border-gray-300 rounded-xl outline-none"
              value={formData.product}
              onChange={(e) => setFormData({ ...formData, product: e.target.value })}
              required
            />
          </div>

          {/* Popular */}
          <div>
            <label className="block text-gray-700 font-bold mb-2 text-sm sm:text-base">
              Popular
            </label>
            <select
              className="w-full p-3 border border-[#00CCE5] rounded-xl outline-none bg-white font-semibold text-gray-700"
              value={formData.popular}
              onChange={(e) => setFormData({ ...formData, popular: e.target.value })}
            >
              <option value="Positive">Positive</option>
              <option value="Negative">Negative</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="w-full py-3 border border-gray-300 rounded-xl font-bold text-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full py-3 bg-[#00CCE5] text-white rounded-xl font-bold hover:bg-[#00b8cc]"
            >
              Add Category
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default CategoryModal;
