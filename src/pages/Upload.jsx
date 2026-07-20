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
      alert("Please choose a file first!");
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
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <main className="flex-1 p-5 sm:p-6 lg:p-8 mt-16 lg:mt-0">

        <div className="mb-8">

          <h1 className="text-3xl md:text-4xl font-bold text-blue-600">
            Upload Files
          </h1>

          <p className="text-gray-500 mt-2">
            Upload your documents, images and videos securely.
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">

          <div className="border-2 border-dashed border-blue-500 rounded-2xl p-8 md:p-16 text-center">

            <h2 className="text-2xl font-bold">
              Drag & Drop Files Here
            </h2>

            <p className="text-gray-500 mt-3">
              or choose a file from your device
            </p>

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">

              <button
                onClick={handleChooseFile}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl"
              >
                Choose File
              </button>

              <button
                onClick={handleUpload}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl"
              >
                Upload
              </button>

            </div>

            {selectedFile && (

              <div className="mt-10 bg-gray-100 rounded-xl p-6 text-left">

                <h3 className="text-xl font-bold mb-4">
                  Selected File
                </h3>

                <div className="space-y-3">

                  <p>
                    <strong>Name :</strong> {selectedFile.name}
                  </p>

                  <p>
                    <strong>Size :</strong>{" "}
                    {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>

                  <p>
                    <strong>Type :</strong> {selectedFile.type}
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