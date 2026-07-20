import Sidebar from "../components/Sidebar";
import { FaUserCircle, FaEnvelope, FaPhone, FaCloud } from "react-icons/fa";

function Profile() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <main className="flex-1 p-5 sm:p-6 lg:p-8 mt-16 lg:mt-0">

        {/* Heading */}

        <div className="mb-8">

          <h1 className="text-3xl md:text-4xl font-bold text-blue-600">
            My Profile
          </h1>

          <p className="text-gray-500 mt-2">
            View and manage your account details.
          </p>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Left Card */}

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

            <img
              src="https://ui-avatars.com/api/?name=Kiran+Pal&background=2563eb&color=fff&size=256"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500"
            />

            <h2 className="text-2xl font-bold mt-5">
              Kiran Pal
            </h2>

            <p className="text-gray-500">
              CloudVault User
            </p>

            <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition">
              Edit Profile
            </button>

          </div>

          {/* Right Card */}

          <div className="lg:col-span-2 space-y-6">

            {/* Personal Details */}

            <div className="bg-white rounded-2xl shadow-lg p-6">

              <h2 className="text-2xl font-bold mb-6">
                Personal Information
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">

                <div>

                  <label className="font-semibold">
                    Full Name
                  </label>

                  <div className="mt-2 flex items-center border rounded-xl p-3 bg-gray-50">

                    <FaUserCircle className="text-blue-600 mr-3" />

                    <input
                      type="text"
                      value="Kiran Pal"
                      readOnly
                      className="bg-transparent w-full outline-none"
                    />

                  </div>

                </div>

                <div>

                  <label className="font-semibold">
                    Email
                  </label>

                  <div className="mt-2 flex items-center border rounded-xl p-3 bg-gray-50">

                    <FaEnvelope className="text-blue-600 mr-3" />

                    <input
                      type="email"
                      value="kiran@example.com"
                      readOnly
                      className="bg-transparent w-full outline-none"
                    />

                  </div>

                </div>

                <div>

                  <label className="font-semibold">
                    Phone
                  </label>

                  <div className="mt-2 flex items-center border rounded-xl p-3 bg-gray-50">

                    <FaPhone className="text-blue-600 mr-3" />

                    <input
                      type="text"
                      value="+91 XXXXX XXXXX"
                      readOnly
                      className="bg-transparent w-full outline-none"
                    />

                  </div>

                </div>

                <div>

                  <label className="font-semibold">
                    Account Type
                  </label>

                  <div className="mt-2 border rounded-xl p-3 bg-gray-50">

                    Free Plan

                  </div>

                </div>

              </div>

            </div>

            {/* Storage */}

            <div className="bg-white rounded-2xl shadow-lg p-6">

              <div className="flex items-center gap-3">

                <FaCloud className="text-blue-600 text-3xl" />

                <h2 className="text-2xl font-bold">
                  Storage
                </h2>

              </div>

              <div className="mt-6">

                <div className="flex justify-between mb-2">

                  <span>Storage Used</span>

                  <span>0 MB / 100 MB</span>

                </div>

                <div className="w-full bg-gray-300 rounded-full h-4">

                  <div
                    className="bg-blue-600 h-4 rounded-full"
                    style={{ width: "0%" }}
                  ></div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Profile;