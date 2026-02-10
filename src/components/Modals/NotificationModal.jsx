import React from 'react';

const NotificationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const notifications = [
    { id: 1, title: "Toast title", message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: 2, title: "Toast title", message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: 3, title: "Toast title", message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: 4, title: "Toast title", message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end p-6 bg-black/20 backdrop-blur-sm">
      {/* Modal Container */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Notification</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200">
            <span className="text-xl px-1">✕</span>
          </button>
        </div>

        {/* Notification List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {notifications.map((notif) => (
            <div key={notif.id} className="relative p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex gap-4">
                <div className="mt-1 w-6 h-6 flex items-center justify-center rounded-full border-2 border-gray-900 text-gray-900">
                  <span className="text-xs">✓</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-1">{notif.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed italic">
                    {notif.message} {notif.message}
                  </p>
                </div>
                <button className="text-gray-400 hover:text-gray-900 transition-colors self-start border border-gray-200 rounded p-0.5">
                  <span className="text-xs px-1 font-bold">✕</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;