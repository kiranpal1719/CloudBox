import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import {
  FaFileAlt,
  FaDownload,
  FaTrash,
} from "react-icons/fa";

function Files() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const storedFiles =
      JSON.parse(localStorage.getItem("myFiles")) || [];

    setFiles(storedFiles);
  }, []);

  const handleDelete = (id) => {
    const updatedFiles = files.filter(
      (file) => file.id !== id
    );

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
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <main className="flex-1 p-5 sm:p-6 lg:p-8 mt-16 lg:mt-0">

        {/* Heading */}

        <div className="mb-8">

          <h1 className="text-3xl md:text-4xl font-bold text-blue-600">
            My Files
          </h1>

          <p className="text-gray-500 mt-2">
            Manage all your uploaded files.
          </p>

        </div>

        {files.length === 0 ? (

          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">

            <FaFileAlt
              size={60}
              className="mx-auto text-blue-500"
            />

            <h2 className="text-2xl font-bold mt-5">
              No Files Uploaded
            </h2>

            <p className="text-gray-500 mt-3">
              Upload your first file to see it here.
            </p>

          </div>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

            {files.map((file) => (

              <div
                key={file.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
              >

                {/* Icon */}

                <div className="flex justify-center mb-5">

                  <div className="bg-blue-100 p-5 rounded-full">

                    <FaFileAlt
                      size={35}
                      className="text-blue-600"
                    />

                  </div>

                </div>

                {/* Name */}

                <h2 className="text-xl font-bold text-center break-all">
                  {file.name}
                </h2>

                {/* Details */}

                <div className="mt-6 space-y-2 text-gray-600">

                  <p>
                    <strong>Size:</strong> {file.size}
                  </p>

                  <p className="break-all">
                    <strong>Type:</strong> {file.type}
                  </p>

                  <p className="text-sm">
                    <strong>Uploaded:</strong><br />
                    {file.uploadedAt}
                  </p>

                </div>

                {/* Buttons */}

                <div className="mt-6 flex flex-col sm:flex-row gap-3">

                  <button
                    onClick={() => handleDownload(file)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl flex justify-center items-center gap-2 transition"
                  >
                    <FaDownload />
                    Download
                  </button>

                  <button
                    onClick={() => handleDelete(file.id)}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl flex justify-center items-center gap-2 transition"
                  >
                    <FaTrash />
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