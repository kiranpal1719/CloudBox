import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaCloudUploadAlt,
  FaFolderOpen,
  FaUser,
  FaSignOutAlt,
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
  ];

  return (
    <>
      {/* Mobile Header */}

      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-gray-900 text-white flex items-center justify-between px-5 shadow-md z-50">

        <button onClick={() => setIsOpen(true)}>
          <FaBars size={22} />
        </button>

        <h1 className="text-xl font-bold text-blue-400">
          CloudVault
        </h1>

        <div className="w-6"></div>

      </header>

      {/* Overlay */}

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}

      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white z-50 transform transition-transform duration-300
        ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }
        lg:translate-x-0`}
      >

        {/* Logo */}

        <div className="flex items-center justify-between p-6 border-b border-gray-700">

          <h1 className="text-3xl font-bold text-blue-400">
            CloudVault
          </h1>

          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden"
          >
            <FaTimes size={22} />
          </button>

        </div>

        {/* Menu */}

        <nav className="mt-6 px-3">

          {menuItems.map((item) => (

            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-4 px-5 py-4 rounded-xl mb-2 transition-all
              ${
                location.pathname === item.path
                  ? "bg-blue-600"
                  : "hover:bg-gray-800"
              }`}
            >

              <span className="text-xl">
                {item.icon}
              </span>

              <span className="text-lg">
                {item.name}
              </span>

            </Link>

          ))}

        </nav>

        {/* Logout */}

        <div className="absolute bottom-5 left-0 w-full px-3">

          <Link
            to="/login"
            className="flex items-center gap-4 px-5 py-4 rounded-xl hover:bg-red-600 transition"
          >

            <FaSignOutAlt className="text-xl" />

            <span className="text-lg">
              Logout
            </span>

          </Link>

        </div>

      </aside>

      {/* Desktop Spacer */}

      <div className="hidden lg:block w-64 flex-shrink-0"></div>
    </>
  );
}

export default Sidebar;