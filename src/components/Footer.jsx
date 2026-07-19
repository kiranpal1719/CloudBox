import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400">
            CloudVault
          </h2>

          <p className="mt-4 text-gray-400">
            Store, organize and access your files securely from anywhere,
            anytime.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-400">
            Quick Links
          </h3>

          <ul className="space-y-2">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-400">
            Contact
          </h3>

          <p>Email: support@cloudvault.com</p>
          <p className="mt-2">Greater Noida, India</p>
        </div>

      </div>

      <hr className="my-8 border-gray-700" />

      <p className="text-center text-gray-400">
        © 2026 CloudVault. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;