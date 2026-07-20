import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  FaHome,
  FaCloudUploadAlt,
  FaFolderOpen,
  FaUser,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaHome />,
    },
    {
      name: "Upload",
      path: "/upload",
      icon: <FaCloudUploadAlt />,
    },
    {
      name: "My Files",
      path: "/files",
      icon: <FaFolderOpen />,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <FaUser />,
    },
    {
      name: "Logout",
      path: "/login",
      icon: <FaSignOutAlt />,
    },
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden bg-gray-900 text-white flex justify-between items-center px-5 py-4 shadow-md sticky top-0 z-40">
        <h1 className="text-2xl font-bold text-blue-400">
          CloudVault
        </h1>

        <button
          onClick={() => setIsOpen(true)}
          className="text-2xl"
        >
          <FaBars />
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 z-50
        w-64 h-screen bg-gray-900 text-white shadow-lg
        transform transition-transform duration-300
        ${
          isOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h1 className="text-3xl font-bold text-blue-400">
            CloudVault
          </h1>

          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-2xl"
          >
            <FaTimes />
          </button>
        </div>

        {/* Menu */}
        <nav className="mt-6">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-4 px-6 py-4 transition duration-300
              ${
                location.pathname === item.path
                  ? "bg-blue-600"
                  : "hover:bg-gray-800"
              }`}
            >
              <span className="text-xl">{item.icon}</span>

              <span className="text-lg">{item.name}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;