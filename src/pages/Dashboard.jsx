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

  const totalStorage = 100; // 100 MB Demo

  const usedStorage = files.reduce((total, file) => {
    return total + parseFloat(file.size);
  }, 0);

  const freeStorage = totalStorage - usedStorage;

  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 bg-gray-100 min-h-screen p-8">

        <div className="flex justify-between items-center mb-8">

          <h1 className="text-4xl font-bold text-blue-600">
            Dashboard
          </h1>

          <button
            onClick={() => navigate("/upload")}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Upload New File
          </button>

        </div>

        {/* Storage Cards */}

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-gray-500">Total Storage</h3>

            <p className="text-3xl font-bold text-blue-600 mt-3">
              {totalStorage} MB
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-gray-500">Used Storage</h3>

            <p className="text-3xl font-bold text-green-600 mt-3">
              {usedStorage.toFixed(2)} MB
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-gray-500">Free Storage</h3>

            <p className="text-3xl font-bold text-purple-600 mt-3">
              {freeStorage.toFixed(2)} MB
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-gray-500">Total Files</h3>

            <p className="text-3xl font-bold text-red-600 mt-3">
              {files.length}
            </p>
          </div>

        </div>

        {/* Progress Bar */}

        <div className="bg-white rounded-xl shadow-lg p-6 mt-8">

          <h2 className="text-2xl font-bold mb-4">
            Storage Usage
          </h2>

          <div className="w-full bg-gray-300 rounded-full h-5">

            <div
              className="bg-blue-600 h-5 rounded-full"
              style={{
                width: `${(usedStorage / totalStorage) * 100}%`,
              }}
            ></div>

          </div>

          <p className="mt-3 text-gray-600">
            {usedStorage.toFixed(2)} MB used of {totalStorage} MB
          </p>

        </div>

        {/* Recent Files */}

        <div className="bg-white rounded-xl shadow-lg p-6 mt-8">

          <h2 className="text-2xl font-bold mb-5">
            Recent Files
          </h2>

          {files.length === 0 ? (
            <p className="text-gray-500">
              No files uploaded yet.
            </p>
          ) : (
            files
              .slice(-5)
              .reverse()
              .map((file) => (
                <div
                  key={file.id}
                  className="flex justify-between border-b py-3"
                >
                  <span>{file.name}</span>

                  <span>{file.size}</span>
                </div>
              ))
          )}

        </div>

      </main>
    </div>
  );
}

export default Dashboard;