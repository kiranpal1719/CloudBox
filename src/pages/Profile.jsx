import Sidebar from "../components/Sidebar";

function Profile() {
  return (
    <div className="flex">

      <Sidebar />

      <main className="flex-1 bg-gray-100 min-h-screen p-8">

        <h1 className="text-4xl font-bold text-blue-600 mb-8">
          My Profile
        </h1>

        <div className="bg-white rounded-xl shadow-lg p-8 max-w-xl">

          <div className="flex justify-center">
            <img
              src=""
              alt="Profile"
              className="w-28 h-28 rounded-full"
            />
          </div>

          <div className="mt-8 space-y-5">

            <div>
              <label className="font-semibold">
                Full Name
              </label>

              <input
                type="text"
                value="Kiran Pal"
                readOnly
                className="w-full mt-2 border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="font-semibold">
                Email
              </label>

              <input
                type="email"
                value="kiran@example.com"
                readOnly
                className="w-full mt-2 border rounded-lg p-3"
              />
            </div>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Edit Profile
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Profile;