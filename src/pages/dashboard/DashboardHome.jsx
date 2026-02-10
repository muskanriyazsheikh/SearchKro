// import React from 'react';
// import { Link } from 'react-router-dom';

// const DashboardHome = () => {
// return (
//   <div className="p-4 sm:p-6 lg:p-8 space-y-8 bg-[#F8F9FB] min-h-screen">

//     {/* Top Row */}
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

//       {/* Categories */}
//       <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-sm border border-gray-100">
//         <div className="flex justify-between items-center mb-4 sm:mb-6">
//           <h3 className="text-base sm:text-lg font-bold text-gray-800">
//             Categories
//           </h3>
//           <Link
//             to="/categories"
//             className="px-3 sm:px-4 py-1 bg-[#1E1E1E] text-white text-xs sm:text-sm rounded-md"
//           >
//             View
//           </Link>
//         </div>

//         {/* Responsive Table */}
//         <div className="overflow-x-auto">
//           <table className="min-w-[500px] w-full text-left text-sm">
//             <thead>
//               <tr className="text-gray-400 border-b">
//                 <th className="pb-3">S.no.</th>
//                 <th className="pb-3">Role</th>
//                 <th className="pb-3">Category</th>
//                 <th className="pb-3">Product</th>
//               </tr>
//             </thead>
//             <tbody className="text-gray-600">
//               <tr className="border-b"><td className="py-3">1</td><td>Buyer</td><td>Clothes</td><td>Jeans</td></tr>
//               <tr className="border-b"><td className="py-3">2</td><td>Buyer</td><td>Mobile</td><td>iPhone</td></tr>
//               <tr><td className="py-3">3</td><td>Seller</td><td>Laptop</td><td>Dell</td></tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Location */}
//       <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-sm border border-gray-100">
//         <div className="flex justify-between items-center mb-4 sm:mb-6">
//           <h3 className="text-base sm:text-lg font-bold text-gray-800">
//             Location
//           </h3>
//           <Link
//             to="/location"
//             className="px-3 sm:px-4 py-1 bg-[#1E1E1E] text-white text-xs sm:text-sm rounded-md"
//           >
//             View
//           </Link>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="min-w-[500px] w-full text-left text-sm">
//             <thead>
//               <tr className="text-gray-400 border-b">
//                 <th className="pb-3">S.no.</th>
//                 <th className="pb-3">Role</th>
//                 <th className="pb-3">Location</th>
//                 <th className="pb-3">Region</th>
//               </tr>
//             </thead>
//             <tbody className="text-gray-600">
//               <tr className="border-b"><td className="py-3">1</td><td>Buyer</td><td>London</td><td>Europe</td></tr>
//               <tr className="border-b"><td className="py-3">2</td><td>Buyer</td><td>Mumbai</td><td>Asia</td></tr>
//               <tr><td className="py-3">3</td><td>Seller</td><td>Berlin</td><td>Europe</td></tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>

//     {/* Bottom Row */}
//     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">

//       {/* Legal Policy */}
//       <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-sm border">
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-base sm:text-lg font-bold">Legal Policy</h3>
//           <Link to="/legal-policy" className="px-3 py-1 bg-black text-white text-xs sm:text-sm rounded-md">
//             View
//           </Link>
//         </div>

//         <div className="space-y-3">
//           <div className="bg-black text-white p-4 rounded-xl text-xs sm:text-sm">
//             <div className="flex justify-between mb-2">
//               <span className="font-bold">How do I book a service?</span>
//               <span>✕</span>
//             </div>
//             <p className="text-gray-400">
//               You can book a service by selecting your category and time slot.
//             </p>
//           </div>

//           <div className="p-3 bg-gray-50 rounded-xl text-sm flex justify-between">
//             <span>How do I track my provider?</span>
//             <span>›</span>
//           </div>

//           <div className="p-3 bg-gray-50 rounded-xl text-sm flex justify-between">
//             <span>How do I rate a service?</span>
//             <span>›</span>
//           </div>
//         </div>
//       </div>

//       {/* Report */}
//       <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-sm border">
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-base sm:text-lg font-bold">Report</h3>
//           <Link to="/reports" className="px-3 py-1 bg-black text-white text-xs sm:text-sm rounded-md">
//             View
//           </Link>
//         </div>

//         <h4 className="font-bold mb-2">Company Overview</h4>
//         <p className="text-sm text-gray-500">
//           Lorem Ipsum is dummy text used in the printing and typesetting industry.
//         </p>
//       </div>

//       {/* Rating */}
//       <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-sm border">
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-base sm:text-lg font-bold">Rating</h3>
//           <Link to="/rating" className="px-3 py-1 bg-black text-white text-xs sm:text-sm rounded-md">
//             View
//           </Link>
//         </div>

//         <div className="flex flex-col items-center">
//           <div
//             className="relative w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full mb-6"
//             style={{
//               background: "conic-gradient(#4ADE80 0% 50%, #F43F5E 50% 100%)"
//             }}
//           >
//             <div className="absolute inset-4 bg-white rounded-full"></div>
//           </div>

//           <div className="w-full space-y-3 text-sm">
//             <div className="flex justify-between">
//               <span className="flex items-center gap-2">
//                 <span className="w-3 h-3 bg-green-400 rounded-full"></span>
//                 Positive
//               </span>
//               <span className="text-green-500 font-bold">50%</span>
//             </div>

//             <div className="flex justify-between">
//               <span className="flex items-center gap-2">
//                 <span className="w-3 h-3 bg-red-400 rounded-full"></span>
//                 Negative
//               </span>
//               <span className="text-red-500 font-bold">50%</span>
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
//   </div>
// );

// };

// export default DashboardHome;




import React from 'react';
import { Link } from 'react-router-dom';

const DashboardHome = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 bg-[#F8F9FB] min-h-screen">

      {/* Top Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

        {/* Categories */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h3 className="text-sm sm:text-lg font-bold text-gray-800">
              Categories
            </h3>
            <Link
              to="/categories"
              className="px-3 sm:px-4 py-1 bg-[#1E1E1E] text-white text-xs sm:text-sm rounded-md"
            >
              View
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-[520px] w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="text-gray-400 border-b">
                  <th className="pb-3">S.no.</th>
                  <th className="pb-3">Role</th>
                  <th className="pb-3">Category</th>
                  <th className="pb-3">Product</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b">
                  <td className="py-3">1</td><td>Buyer</td><td>Clothes</td><td>Jeans</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">2</td><td>Buyer</td><td>Mobile</td><td>iPhone</td>
                </tr>
                <tr>
                  <td className="py-3">3</td><td>Seller</td><td>Laptop</td><td>Dell</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Location */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h3 className="text-sm sm:text-lg font-bold text-gray-800">
              Location
            </h3>
            <Link
              to="/location"
              className="px-3 sm:px-4 py-1 bg-[#1E1E1E] text-white text-xs sm:text-sm rounded-md"
            >
              View
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-[520px] w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="text-gray-400 border-b">
                  <th className="pb-3">S.no.</th>
                  <th className="pb-3">Role</th>
                  <th className="pb-3">Location</th>
                  <th className="pb-3">Region</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b">
                  <td className="py-3">1</td><td>Buyer</td><td>London</td><td>Europe</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">2</td><td>Buyer</td><td>Mumbai</td><td>Asia</td>
                </tr>
                <tr>
                  <td className="py-3">3</td><td>Seller</td><td>Berlin</td><td>Europe</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">

        {/* Legal Policy */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-sm border">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm sm:text-lg font-bold">Legal Policy</h3>
            <Link to="/legal-policy" className="px-3 py-1 bg-black text-white text-xs sm:text-sm rounded-md">
              View
            </Link>
          </div>

          <div className="space-y-3">
            <div className="bg-black text-white p-4 rounded-xl text-xs sm:text-sm">
              <div className="flex justify-between mb-2">
                <span className="font-bold">How do I book a service?</span>
                <span>✕</span>
              </div>
              <p className="text-gray-400">
                You can book a service by selecting your category and time slot.
              </p>
            </div>

            <div className="p-3 bg-gray-50 rounded-xl text-xs sm:text-sm flex justify-between">
              <span>How do I track my provider?</span>
              <span>›</span>
            </div>

            <div className="p-3 bg-gray-50 rounded-xl text-xs sm:text-sm flex justify-between">
              <span>How do I rate a service?</span>
              <span>›</span>
            </div>
          </div>
        </div>

        {/* Report */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-sm border">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm sm:text-lg font-bold">Report</h3>
            <Link to="/reports" className="px-3 py-1 bg-black text-white text-xs sm:text-sm rounded-md">
              View
            </Link>
          </div>

          <h4 className="font-bold mb-2 text-sm sm:text-base">Company Overview</h4>
          <p className="text-xs sm:text-sm text-gray-500">
            Lorem Ipsum is dummy text used in the printing and typesetting industry.
          </p>
        </div>

        {/* Rating */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-sm border">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm sm:text-lg font-bold">Rating</h3>
            <Link to="/rating" className="px-3 py-1 bg-black text-white text-xs sm:text-sm rounded-md">
              View
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <div
              className="relative w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full mb-6"
              style={{
                background: "conic-gradient(#4ADE80 0% 50%, #F43F5E 50% 100%)"
              }}
            >
              <div className="absolute inset-4 bg-white rounded-full"></div>
            </div>

            <div className="w-full space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between">
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                  Positive
                </span>
                <span className="text-green-500 font-bold">50%</span>
              </div>

              <div className="flex justify-between">
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-red-400 rounded-full"></span>
                  Negative
                </span>
                <span className="text-red-500 font-bold">50%</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardHome;
