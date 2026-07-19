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
    <div className="flex">
      <Sidebar />

      <main className="flex-1 bg-gray-100 min-h-screen p-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">
          Upload Files
        </h1>

        <div className="bg-white rounded-xl shadow-lg p-10 text-center">
          <div className="border-2 border-dashed border-blue-500 rounded-xl p-16">

            <h2 className="text-2xl font-semibold">
              Drag & Drop Files Here
            </h2>

            <p className="text-gray-500 mt-3 mb-6">
              or
            </p>

            {/* Hidden File Input */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />

            {/* Buttons */}
            <div className="flex justify-center gap-4">
              <button
                onClick={handleChooseFile}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
              >
                Choose File
              </button>

              <button
                onClick={handleUpload}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
              >
                Upload
              </button>
            </div>

            {/* Selected File Details */}
            {selectedFile && (
              <div className="mt-8 bg-gray-100 p-5 rounded-lg text-left">
                <h3 className="text-lg font-semibold mb-3">
                  Selected File
                </h3>

                <p>
                  <strong>Name:</strong> {selectedFile.name}
                </p>

                <p>
                  <strong>Size:</strong>{" "}
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>

                <p>
                  <strong>Type:</strong> {selectedFile.type}
                </p>
              </div>
            )}

          </div>
        </div>
      </main>
    </div>
  );
}

export default Upload;