import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaCloudUploadAlt,
  FaFolderOpen,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  const location = useLocation();

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
    <aside className="w-64 min-h-screen bg-gray-900 text-white shadow-lg">

      {/* Logo */}
      <div className="p-6 border-b border-gray-700">
        <h1 className="text-3xl font-bold text-blue-400">
          CloudVault
        </h1>
      </div>

      {/* Menu */}
      <nav className="mt-6">

        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-4 px-6 py-4 transition duration-300
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
    </aside>
  );
}

export default Sidebar;