// import React, { useState } from 'react';
// import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
// import NotificationModal from '../components/Modals/NotificationModal';
// import LogoutModal from '../components/LogoutModal'; // Ensure path is correct

// const DashLayout = () => {
//   const [isNotifOpen, setIsNotifOpen] = useState(false);
//   const [isLogoutOpen, setIsLogoutOpen] = useState(false); // New state for Logout
//   const location = useLocation();
//   const navigate = useNavigate();
  
//   const menuItems = [
//     { name: 'Dashboard', path: '/dashboard', icon: '⊞' },
//     { name: 'Categories', path: '/categories', icon: '⊞' },
//     { name: 'Reports', path: '/reports', icon: 'ⓘ' },
//     { name: 'Legal Policy', path: '/legal-policy', icon: '🛡' },
//     { name: 'Location', path: '/location', icon: '📍' },
//     { name: 'Rating', path: '/rating', icon: '☆' },
//   ];

//   const getPageTitle = () => {
//     const path = location.pathname.replace('/', '').replace('-', ' ');
//     return path.charAt(0).toUpperCase() + path.slice(1) || 'Dashboard';
//   };

//   const handleLogoutConfirm = () => {
//     setIsLogoutOpen(false);
//     navigate('/login'); // Redirects to login
//   };

//   return (
//     <div className="flex h-screen bg-[#F8F9FB]">
//       {/* Sidebar Section */}
//       <aside className="w-64 bg-[#1E1E1E] text-white flex flex-col shrink-0">
//         <div className="p-6 flex items-center gap-3">
//           <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-xl">v</div>
//           <span className="text-xl font-bold tracking-tight">Searchkro</span>
//         </div>

//         <nav className="flex-1 mt-4 px-4 space-y-2">
//           {menuItems.map((item) => {
//             const isActive = location.pathname === item.path;
//             return (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all font-medium
//                   ${isActive ? 'bg-[#00CCE5] text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
//               >
//                 <span>{item.icon}</span>
//                 {item.name}
//               </Link>
//             );
//           })}
//         </nav>

//         {/* Updated Logout Trigger */}
//         <div className="p-6">
//           <button 
//             onClick={() => setIsLogoutOpen(true)} // This triggers the modal
//             className="flex items-center gap-4 w-full px-4 py-3 text-gray-400 bg-white/5 rounded-xl hover:text-white hover:bg-white/10 transition-colors"
//           >
//             <span>➔</span> Logout
//           </button>
//         </div>
//       </aside>

//       {/* Main Content Area */}
//       <div className="flex-1 flex flex-col min-w-0">
//         <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-10 shrink-0">
//           <h1 className="text-xl font-bold text-gray-800">{getPageTitle()}</h1>

//           <div className="flex items-center gap-6">
//             <button onClick={() => setIsNotifOpen(true)} className="relative p-2 text-gray-400 hover:bg-gray-50 rounded-full transition-colors">
//               <span className="text-2xl">🔔</span>
//               <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
//             </button>
//             <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border border-gray-100">
//               <img src="https://i.pravatar.cc/150?u=searchkro" alt="User" />
//             </div>
//           </div>
//         </header>

//         <main className="flex-1 overflow-y-auto bg-[#F8F9FB]">
//           <Outlet />
//         </main>
//       </div>

//       {/* Modals placed at the bottom to ensure they overlay everything */}
//       <NotificationModal isOpen={isNotifOpen} onClose={() => setIsNotifOpen(false)} />
      
//       <LogoutModal 
//         isOpen={isLogoutOpen} 
//         onClose={() => setIsLogoutOpen(false)} 
//         onConfirm={handleLogoutConfirm} 
//       />
//     </div>
//   );
// };

// export default DashLayout;

import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import NotificationModal from '../components/Modals/NotificationModal';
import LogoutModal from '../components/LogoutModal';

const DashLayout = () => {
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // UI ONLY

  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: '⊞' },
    { name: 'Categories', path: '/categories', icon: '⊞' },
    { name: 'Reports', path: '/reports', icon: 'ⓘ' },
    { name: 'Legal Policy', path: '/legal-policy', icon: '🛡' },
    { name: 'Location', path: '/location', icon: '📍' },
    { name: 'Rating', path: '/rating', icon: '☆' },
  ];

  const getPageTitle = () => {
    const path = location.pathname.replace('/', '').replace('-', ' ');
    return path.charAt(0).toUpperCase() + path.slice(1) || 'Dashboard';
  };

  const handleLogoutConfirm = () => {
    setIsLogoutOpen(false);
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-[#F8F9FB] overflow-hidden">

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static top-0 left-0 z-40
          h-screen w-64 bg-[#1E1E1E] text-white
          flex flex-col shrink-0
          transform transition-transform duration-300
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
        `}
      >
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center font-bold text-xl">
            v
          </div>
          <span className="text-xl font-bold tracking-tight">Searchkro</span>
        </div>

        <nav className="flex-1 mt-4 px-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsSidebarOpen(false)} // mobile close
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all font-medium
                  ${isActive ? 'bg-[#00CCE5] text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
              >
                <span>{item.icon}</span>
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-6">
          <button
            onClick={() => setIsLogoutOpen(true)}
            className="flex items-center gap-4 w-full px-4 py-3 text-gray-400 bg-white/5 rounded-xl hover:text-white hover:bg-white/10 transition"
          >
            <span>➔</span> Logout
          </button>
        </div>
      </aside>

      {/* Main Section */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* Header */}
        <header className="h-16 sm:h-20 bg-white border-b border-gray-100 flex items-center justify-between px-4 sm:px-6 lg:px-10 shrink-0">
          <div className="flex items-center gap-3">
            {/* Hamburger */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 rounded-md bg-gray-100"
            >
              ☰
            </button>

            <h1 className="text-lg sm:text-xl font-bold text-gray-800">
              {getPageTitle()}
            </h1>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={() => setIsNotifOpen(true)}
              className="relative p-2 text-gray-400 hover:bg-gray-50 rounded-full"
            >
              <span className="text-xl sm:text-2xl">🔔</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>

            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 overflow-hidden border">
              <img src="https://i.pravatar.cc/150?u=searchkro" alt="User" />
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto bg-[#F8F9FB] p-2 sm:p-4">
          <Outlet />
        </main>
      </div>

      {/* Modals */}
      <NotificationModal
        isOpen={isNotifOpen}
        onClose={() => setIsNotifOpen(false)}
      />

      <LogoutModal
        isOpen={isLogoutOpen}
        onClose={() => setIsLogoutOpen(false)}
        onConfirm={handleLogoutConfirm}
      />
    </div>
  );
};

export default DashLayout;
