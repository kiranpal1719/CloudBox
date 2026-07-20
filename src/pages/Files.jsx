import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

function Files() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const storedFiles =
      JSON.parse(localStorage.getItem("myFiles")) || [];

    setFiles(storedFiles);
  }, []);

  const handleDelete = (id) => {
    const updatedFiles = files.filter((file) => file.id !== id);

    setFiles(updatedFiles);

    localStorage.setItem(
      "myFiles",
      JSON.stringify(updatedFiles)
    );
  };

  const handleDownload = (file) => {
    alert(`Downloading ${file.name}`);
  };

  return (
    <div className="flex bg-gray-100">

      <Sidebar />

      <main className="flex-1 min-h-screen p-4 sm:p-6 lg:p-8">

        {/* Heading */}

        <div className="mb-8">

          <h1 className="text-3xl sm:text-4xl font-bold text-blue-600">
            My Files
          </h1>

          <p className="text-gray-500 mt-2">
            View, download and manage your uploaded files.
          </p>

        </div>

        {files.length === 0 ? (

          <div className="bg-white rounded-2xl shadow-lg p-10 text-center">

            <h2 className="text-2xl font-bold text-gray-600">
              No Files Uploaded
            </h2>

            <p className="text-gray-500 mt-3">
              Upload your first file from the Upload page.
            </p>

          </div>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

            {files.map((file) => (

              <div
                key={file.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-6"
              >

                {/* File Name */}

                <h2 className="text-xl font-bold text-blue-600 break-all">
                  {file.name}
                </h2>

                {/* File Details */}

                <div className="mt-5 space-y-2 text-gray-600">

                  <p>
                    <strong>Size:</strong> {file.size}
                  </p>

                  <p className="break-all">
                    <strong>Type:</strong> {file.type}
                  </p>

                  <p>
                    <strong>Uploaded:</strong>
                  </p>

                  <p className="text-sm text-gray-500">
                    {file.uploadedAt}
                  </p>

                </div>

                {/* Buttons */}

                <div className="mt-6 flex flex-col sm:flex-row gap-3">

                  <button
                    onClick={() => handleDownload(file)}
                    className="w-full sm:w-auto flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
                  >
                    Download
                  </button>

                  <button
                    onClick={() => handleDelete(file.id)}
                    className="w-full sm:w-auto flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition"
                  >
                    Delete
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </main>

    </div>
  );
}

export default Files;