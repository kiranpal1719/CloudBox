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
    <div className="flex">
      <Sidebar />

      <main className="flex-1 bg-gray-100 min-h-screen p-8">

        <h1 className="text-4xl font-bold text-blue-600 mb-8">
          My Files
        </h1>

        {files.length === 0 ? (
          <div className="bg-white p-10 rounded-xl shadow text-center">
            <h2 className="text-2xl font-semibold text-gray-600">
              No Files Uploaded
            </h2>

            <p className="text-gray-500 mt-3">
              Upload your first file from the Upload page.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {files.map((file) => (
              <div
                key={file.id}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h2 className="text-xl font-bold text-blue-600">
                  {file.name}
                </h2>

                <p className="mt-3 text-gray-600">
                  <strong>Size:</strong> {file.size}
                </p>

                <p className="mt-2 text-gray-600">
                  <strong>Type:</strong> {file.type}
                </p>

                <p className="mt-2 text-gray-600">
                  <strong>Uploaded:</strong>
                </p>

                <p className="text-sm text-gray-500">
                  {file.uploadedAt}
                </p>

                <div className="flex gap-3 mt-6">

                  <button
                    onClick={() => handleDownload(file)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                  >
                    Download
                  </button>

                  <button
                    onClick={() => handleDelete(file.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
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