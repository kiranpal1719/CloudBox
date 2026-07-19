import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email.");
      return;
    }

    // Backend API baad me call hogi
    setMessage(
      "Password reset link has been sent to your email."
    );

    setEmail("");
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">

          <h2 className="text-3xl font-bold text-center text-blue-600">
            Forgot Password
          </h2>

          <p className="text-center text-gray-500 mt-2 mb-8">
            Enter your registered email to receive a password reset link.
          </p>

          {message && (
            <div className="bg-green-100 text-green-700 p-3 rounded mb-4">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <label className="block font-medium mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg px-4 py-3 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
            >
              Send Reset Link
            </button>

            <p className="text-center mt-6">
              <Link
                to="/login"
                className="text-blue-600 hover:underline"
              >
                Back to Login
              </Link>
            </p>

          </form>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default ForgotPassword;