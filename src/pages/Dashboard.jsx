import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const navigate = useNavigate();

  const [files, setFiles] = useState([]);

  useEffect(() => {
    const storedFiles =
      JSON.parse(localStorage.getItem("myFiles")) || [];

    setFiles(storedFiles);
  }, []);

  const totalStorage = 100;

  const usedStorage = files.reduce((total, file) => {
    return total + parseFloat(file.size);
  }, 0);

  const freeStorage = totalStorage - usedStorage;

  return (
    <div className="flex bg-gray-100">

      <Sidebar />

      <main className="flex-1 min-h-screen p-4 sm:p-6 lg:p-8">

        {/* Header */}

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">

          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-blue-600">
              Dashboard
            </h1>

            <p className="text-gray-500 mt-2">
              Welcome to your personal cloud storage.
            </p>
          </div>

          <button
            onClick={() => navigate("/upload")}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-md transition"
          >
            Upload New File
          </button>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6">

            <p className="text-gray-500">
              Total Storage
            </p>

            <h2 className="text-3xl font-bold text-blue-600 mt-3">
              {totalStorage} MB
            </h2>

          </div>

          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6">

            <p className="text-gray-500">
              Used Storage
            </p>

            <h2 className="text-3xl font-bold text-green-600 mt-3">
              {usedStorage.toFixed(2)} MB
            </h2>

          </div>

          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6">

            <p className="text-gray-500">
              Free Storage
            </p>

            <h2 className="text-3xl font-bold text-purple-600 mt-3">
              {freeStorage.toFixed(2)} MB
            </h2>

          </div>

          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6">

            <p className="text-gray-500">
              Total Files
            </p>

            <h2 className="text-3xl font-bold text-red-500 mt-3">
              {files.length}
            </h2>

          </div>

        </div>

        {/* Storage Usage */}

        <div className="bg-white rounded-2xl shadow-md mt-8 p-6">

          <div className="flex justify-between items-center mb-4">

            <h2 className="text-xl sm:text-2xl font-bold">
              Storage Usage
            </h2>

            <span className="text-blue-600 font-semibold">
              {usedStorage.toFixed(2)} / {totalStorage} MB
            </span>

          </div>

          <div className="w-full bg-gray-300 rounded-full h-4">

            <div
              className="bg-blue-600 h-4 rounded-full transition-all duration-500"
              style={{
                width: `${Math.min(
                  (usedStorage / totalStorage) * 100,
                  100
                )}%`,
              }}
            ></div>

          </div>

        </div>

        {/* Recent Files */}

        <div className="bg-white rounded-2xl shadow-md mt-8 p-6">

          <div className="flex justify-between items-center mb-5">

            <h2 className="text-xl sm:text-2xl font-bold">
              Recent Files
            </h2>

            <button
              onClick={() => navigate("/files")}
              className="text-blue-600 hover:underline"
            >
              View All
            </button>

          </div>

          {files.length === 0 ? (

            <div className="text-center py-12">

              <h3 className="text-xl font-semibold text-gray-600">
                No Files Uploaded
              </h3>

              <p className="text-gray-500 mt-2">
                Upload your first file to see it here.
              </p>

            </div>

          ) : (

            <div className="space-y-3">

              {files
                .slice(-5)
                .reverse()
                .map((file) => (

                  <div
                    key={file.id}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition"
                  >

                    <div>

                      <h3 className="font-semibold">
                        {file.name}
                      </h3>

                      <p className="text-gray-500 text-sm">
                        Uploaded File
                      </p>

                    </div>

                    <span className="font-semibold text-blue-600 mt-2 sm:mt-0">
                      {file.size}
                    </span>

                  </div>

                ))}

            </div>

          )}

        </div>

      </main>

    </div>
  );
}

export default Dashboard;