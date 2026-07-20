import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function Upload() {
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState(null);

  const handleChooseFile = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }

    const files =
      JSON.parse(localStorage.getItem("myFiles")) || [];

    files.push({
      id: Date.now(),
      name: selectedFile.name,
      size: (selectedFile.size / 1024 / 1024).toFixed(2) + " MB",
      type: selectedFile.type,
      uploadedAt: new Date().toLocaleString(),
    });

    localStorage.setItem("myFiles", JSON.stringify(files));

    alert("File Uploaded Successfully!");

    navigate("/files");
  };

  return (
    <div className="flex bg-gray-100">
      <Sidebar />

      <main className="flex-1 min-h-screen p-4 sm:p-6 lg:p-8">

        {/* Header */}

        <div className="mb-8">

          <h1 className="text-3xl sm:text-4xl font-bold text-blue-600">
            Upload Files
          </h1>

          <p className="text-gray-500 mt-2">
            Upload your files securely to CloudVault.
          </p>

        </div>

        {/* Upload Box */}

        <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-8 lg:p-10">

          <div className="border-2 border-dashed border-blue-500 rounded-2xl p-6 sm:p-10 lg:p-16 text-center">

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
              Drag & Drop Files Here
            </h2>

            <p className="text-gray-500 mt-4 mb-8">
              or choose a file from your device
            </p>

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />

            {/* Buttons */}

            <div className="flex flex-col sm:flex-row justify-center gap-4">

              <button
                onClick={handleChooseFile}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl transition"
              >
                Choose File
              </button>

              <button
                onClick={handleUpload}
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl transition"
              >
                Upload
              </button>

            </div>

            {/* Selected File */}

            {selectedFile && (

              <div className="mt-8 bg-gray-100 rounded-xl p-5 text-left">

                <h3 className="text-lg font-bold mb-4 text-blue-600">
                  Selected File
                </h3>

                <div className="space-y-2">

                  <p className="break-all">
                    <strong>Name:</strong> {selectedFile.name}
                  </p>

                  <p>
                    <strong>Size:</strong>{" "}
                    {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>

                  <p className="break-all">
                    <strong>Type:</strong> {selectedFile.type}
                  </p>

                </div>

              </div>

            )}

          </div>

        </div>

      </main>
    </div>
  );
}

export default Upload;