// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';

// // We pass onLogoutClick as a prop from the Parent (DashLayout)
// const Sidebar = ({ onLogoutClick }) => {
//   const location = useLocation();

//   const menuItems = [
//     { name: 'Dashboard', path: '/dashboard', icon: '⊞' },
//     { name: 'Categories', path: '/categories', icon: '⊞' },
//     { name: 'Reports', path: '/reports', icon: 'ⓘ' },
//     { name: 'Legal Policy', path: '/legal-policy', icon: '🛡' },
//     { name: 'Location', path: '/location', icon: '📍' },
//     { name: 'Rating', path: '/rating', icon: '☆' },
//   ];

//   return (
//     <aside className="w-64 bg-[#1E1E1E] text-white flex flex-col shrink-0 h-screen">
//       {/* Brand Identity */}
//       <div className="p-6 flex items-center gap-3">
//         <div className="w-8 h-8 bg-[#00CCE5] rounded-full flex items-center justify-center text-white font-bold text-xl">
//           v
//         </div>
//         <span className="text-xl font-bold tracking-tight">Searchkro</span>
//       </div>

//       {/* Navigation Links */}
//       <nav className="flex-1 mt-4 px-4 space-y-2">
//         {menuItems.map((item) => {
//           const isActive = location.pathname === item.path;
//           return (
//             <Link
//               key={item.name}
//               to={item.path}
//               className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all font-medium
//                 ${isActive ? 'bg-[#00CCE5] text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
//             >
//               <span className="text-lg">{item.icon}</span>
//               {item.name}
//             </Link>
//           );
//         })}
//       </nav>

//       {/* Logout Button Section */}
//       <div className="p-6 border-t border-white/5">
//         <button 
//           onClick={onLogoutClick} // Triggers the function in DashLayout
//           className="flex items-center gap-4 w-full px-4 py-3 text-gray-400 bg-white/5 rounded-xl hover:text-white hover:bg-white/10 transition-colors"
//         >
//           <span className="text-xl">⏻</span> 
//           <span className="font-medium text-[15px]">Logout</span>
//         </button>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;


import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ onLogoutClick, isOpen, setIsOpen }) => {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: "⊞" },
    { name: "Categories", path: "/categories", icon: "⊞" },
    { name: "Reports", path: "/reports", icon: "ⓘ" },
    { name: "Legal Policy", path: "/legal-policy", icon: "🛡" },
    { name: "Location", path: "/location", icon: "📍" },
    { name: "Rating", path: "/rating", icon: "☆" },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static top-0 left-0 z-40
          h-screen w-64 bg-[#1E1E1E] text-white
          flex flex-col shrink-0
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* Brand */}
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-[#00CCE5] rounded-full flex items-center justify-center font-bold text-xl">
            v
          </div>
          <span className="text-xl font-bold tracking-tight">
            Searchkro
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 mt-4 px-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)} // close on mobile
                className={`flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all
                  ${
                    isActive
                      ? "bg-[#00CCE5] text-white"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
              >
                <span className="text-lg">{item.icon}</span>
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-6 border-t border-white/5">
          <button
            onClick={onLogoutClick}
            className="flex items-center gap-4 w-full px-4 py-3 text-gray-400 bg-white/5 rounded-xl hover:text-white hover:bg-white/10 transition"
          >
            <span className="text-xl">⏻</span>
            <span className="font-medium text-sm">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
