import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaFolderOpen,
  FaClock,
  FaPlus,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

const handleLogout = () => {
  navigate("/", { replace: true });
  setIsOpen(false);
};

  return (
    <>
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#181818] border-b border-gray-800 flex items-center justify-between px-4 z-50">
        <button onClick={() => setIsOpen(true)}>
          <FaBars className="text-white text-xl" />
        </button>

        <h1 className="text-white font-semibold text-lg">
          CloudVault
        </h1>

        <div className="w-6"></div>
      </header>


      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        ></div>
      )}


      <aside
        className={`
          fixed top-0 left-0 h-screen
          w-60 sm:w-64
          bg-[#1B1B1B]
          border-r border-gray-800
          text-white
          flex flex-col
          transition-transform duration-300
          z-50
          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >

        <div className="lg:hidden flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <FaTimes className="text-xl" />
          </button>
        </div>


        <div className="px-5 pt-4">
          <div className="text-lg text-blue-600">
            CloudVault
          </div>
        </div>


        <div className="px-4 mt-6">
          <Link
            to="/upload"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 bg-white text-gray-900 py-2.5 rounded-lg font-medium hover:bg-gray-200 transition"
          >
            <FaPlus />
            New
          </Link>
        </div>


        <nav className="mt-6 px-2 space-y-1">

          <Link
            to="/dashboard"
            onClick={() => setIsOpen(false)}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
              location.pathname === "/dashboard"
                ? "bg-[#313131]"
                : "hover:bg-[#2A2A2A]"
            }`}
          >
            <FaHome />
            Dashboard
          </Link>


          <Link
            to="/files"
            onClick={() => setIsOpen(false)}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
              location.pathname === "/files"
                ? "bg-[#313131]"
                : "hover:bg-[#2A2A2A]"
            }`}
          >
            <FaFolderOpen />
            My Files
          </Link>


          <Link
            to="/recent"
            onClick={() => setIsOpen(false)}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
              location.pathname === "/recent"
                ? "bg-[#313131]"
                : "hover:bg-[#2A2A2A]"
            }`}
          >
            <FaClock />
            Recent
          </Link>

        </nav>


        {/* Bottom Section */}
        <div className="mt-auto border-t border-gray-700 p-4">


          {/* Profile */}
          <Link
            to="/profile"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 hover:bg-[#2A2A2A] rounded-lg p-2 transition"
          >

            <FaUserCircle
              size={38}
              className="text-gray-400"
            />

            <div>
              <h3 className="text-sm font-semibold">
                My Profile
              </h3>

              <p className="text-xs text-gray-400">
                CloudVault User
              </p>
            </div>

          </Link>


          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="mt-4 w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-[#2A2A2A] transition"
          >
            <FaSignOutAlt />
            Logout
          </button>


        </div>

      </aside>


      <div className="hidden lg:block w-60 sm:w-64"></div>

    </>
  );
}

export default Sidebar;