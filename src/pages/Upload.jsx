import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUploadCloud, FiX } from "react-icons/fi";
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

  // Convert File to Base64 for permanent display on Dashboard
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please choose a file first!");
      return;
    }

    try {
      let previewUrl = "";

      // Only generate preview URL if file is Image, Video, or PDF
      if (
        selectedFile.type.startsWith("image/") ||
        selectedFile.type.startsWith("video/") ||
        selectedFile.type === "application/pdf"
      ) {
        previewUrl = await convertToBase64(selectedFile);
      }

      const files = JSON.parse(localStorage.getItem("myFiles")) || [];

      files.push({
        id: Date.now(),
        name: selectedFile.name,
        size: (selectedFile.size / 1024 / 1024).toFixed(2) + " MB",
        type: selectedFile.type,
        uploadedAt: new Date().toLocaleString(),
        preview: previewUrl,
      });

      localStorage.setItem("myFiles", JSON.stringify(files));

      alert("File Uploaded Successfully!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error reading file:", error);
      alert("Failed to process file.");
    }
  };

  return (
    <div className="flex min-h-screen bg-[#0d0d0d]">
      <Sidebar />

      <main className="flex-1 mt-16 lg:mt-0 flex items-center justify-center p-4">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Upload Modal */}
        <div className="relative z-10 bg-[#181818] w-full max-w-md rounded-xl border border-gray-700 shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-700">
            <div className="flex items-center gap-3">
              <FiUploadCloud className="text-white" size={22} />
              <h2 className="text-white text-lg font-semibold">
                Upload File
              </h2>
            </div>

            <button
              onClick={() => navigate("/dashboard")}
              className="text-gray-400 hover:text-white"
            >
              <FiX size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="p-5">
            <p className="text-gray-400 text-sm mb-5">
              Select a file to upload to CloudVault
            </p>

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />

            <button
              onClick={handleChooseFile}
              className="w-full bg-[#252525] hover:bg-[#303030] text-white border border-gray-700 rounded-lg py-3 transition"
            >
              {selectedFile ? selectedFile.name : "Choose File"}
            </button>

            {selectedFile && (
              <div className="mt-5 bg-[#232323] rounded-lg p-4 border border-gray-700">
                <p className="text-white text-sm">
                  <span className="font-semibold">Name:</span>{" "}
                  {selectedFile.name}
                </p>

                <p className="text-gray-400 text-sm mt-2">
                  Size: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>

                <p className="text-gray-400 text-sm">
                  Type: {selectedFile.type || "Unknown"}
                </p>
              </div>
            )}

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleUpload}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition"
              >
                Upload File
              </button>

              <button
                onClick={() => {
                  setSelectedFile(null);
                  navigate("/dashboard");
                }}
                className="flex-1 bg-[#2b2b2b] hover:bg-[#383838] text-white py-3 rounded-lg font-medium transition"
              >
                Cancel Upload
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Upload;