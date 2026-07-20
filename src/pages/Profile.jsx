import Sidebar from "../components/Sidebar";

function Profile() {
  return (
    <div className="flex bg-gray-100">

      <Sidebar />

      <main className="flex-1 min-h-screen p-4 sm:p-6 lg:p-8">

        {/* Heading */}

        <div className="mb-8">

          <h1 className="text-3xl sm:text-4xl font-bold text-blue-600">
            My Profile
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your personal information.
          </p>

        </div>

        {/* Profile Card */}

        <div className="bg-white rounded-2xl shadow-lg max-w-3xl mx-auto p-6 sm:p-8">

          {/* Profile Image */}

          <div className="flex justify-center">

            <img
              src="https://ui-avatars.com/api/?name=Kiran+Pal&background=2563eb&color=fff&size=256"
              alt="Profile"
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-blue-500 shadow-lg object-cover"
            />

          </div>

          {/* Profile Form */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

            <div>

              <label className="font-semibold text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                value="Kiran Pal"
                readOnly
                className="w-full mt-2 border rounded-xl p-3 bg-gray-100"
              />

            </div>

            <div>

              <label className="font-semibold text-gray-700">
                Email
              </label>

              <input
                type="email"
                value="kiran@example.com"
                readOnly
                className="w-full mt-2 border rounded-xl p-3 bg-gray-100"
              />

            </div>

            <div>

              <label className="font-semibold text-gray-700">
                Mobile
              </label>

              <input
                type="text"
                value="+91 XXXXX XXXXX"
                readOnly
                className="w-full mt-2 border rounded-xl p-3 bg-gray-100"
              />

            </div>

            <div>

              <label className="font-semibold text-gray-700">
                Account Type
              </label>

              <input
                type="text"
                value="Free Plan"
                readOnly
                className="w-full mt-2 border rounded-xl p-3 bg-gray-100"
              />

            </div>

          </div>

          {/* Storage */}

          <div className="mt-8">

            <div className="flex justify-between mb-2">

              <span className="font-semibold">
                Storage Used
              </span>

              <span className="text-blue-600 font-semibold">
                0 MB / 100 MB
              </span>

            </div>

            <div className="w-full bg-gray-300 rounded-full h-4">

              <div
                className="bg-blue-600 h-4 rounded-full"
                style={{ width: "0%" }}
              ></div>

            </div>

          </div>

          {/* Button */}

          <div className="mt-8">

            <button
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl transition"
            >
              Edit Profile
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Profile;