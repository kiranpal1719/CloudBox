import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { FiMoreVertical, FiEdit, FiTrash2, FiX, FiDownload, FiClock } from "react-icons/fi";
import { FaRegFileAlt } from "react-icons/fa";

// DRY: Sub-component for rendering Media Preview in Grid and Modal
const MediaPreview = ({ file, isModal = false }) => {
  const isImage = file.type?.startsWith("image/");
  const isVideo = file.type?.startsWith("video/");

  if (isImage && file.preview) {
    return (
      <img
        src={file.preview}
        alt={file.name}
        className={isModal ? "max-w-full max-h-[75vh] object-contain rounded-lg" : "w-full h-full object-cover rounded"}
      />
    );
  }

  if (isVideo && file.preview) {
    return (
      <video
        src={file.preview}
        controls={isModal}
        autoPlay={isModal}
        className={isModal ? "max-w-full max-h-[75vh] object-contain rounded-lg" : "w-full h-full object-cover rounded pointer-events-none"}
      />
    );
  }

  return (
    <div className={isModal ? "p-10 flex flex-col items-center text-center" : "flex flex-col items-center"}>
      <FaRegFileAlt className={`text-blue-500 ${isModal ? "text-6xl mb-4" : "text-2xl sm:text-3xl"}`} />
      <p className={`text-gray-400 mt-1 ${isModal ? "text-sm text-white" : "text-[10px] sm:text-xs"}`}>
        {isModal ? "Preview not available for this file type." : "File"}
      </p>
    </div>
  );
};

function Recent() {
  const navigate = useNavigate();
  const [recentFiles, setRecentFiles] = useState([]);
  const [activeMenuId, setActiveMenuId] = useState(null);
  const [editingFile, setEditingFile] = useState(null);
  const [newFileName, setNewFileName] = useState("");
  const [previewFile, setPreviewFile] = useState(null);

  useEffect(() => {
    const storedFiles = JSON.parse(localStorage.getItem("myFiles")) || [];
    // Show only the latest files (up to 10) sorted by newest
    setRecentFiles(storedFiles.slice().reverse().slice(0, 10));
  }, []);

  // DRY: Storage updater
  const updateStorage = (updatedFiles) => {
    setRecentFiles(updatedFiles);
    localStorage.setItem("myFiles", JSON.stringify(updatedFiles));
    setActiveMenuId(null);
  };

  const handleDelete = (id) => {
    const updated = recentFiles.filter((f) => f.id !== id);
    updateStorage(updated);
  };

  const handleSaveRename = () => {
    if (!newFileName.trim()) return;
    const updated = recentFiles.map((f) =>
      f.id === editingFile.id
        ? { ...f, name: newFileName, uploadedAt: new Date().toLocaleString() }
        : f
    );
    updateStorage(updated);
    setEditingFile(null);
  };

  return (
    <div className="flex min-h-screen bg-[#111111]" onClick={() => setActiveMenuId(null)}>
      <Sidebar />

      <main className="flex-1 w-full min-w-0 overflow-x-hidden pt-16 lg:pt-0">
        <div className="px-4 sm:px-6 lg:px-10 py-5 flex items-center gap-3">
          <FiClock className="text-blue-500 text-xl" />
          <h1 className="text-white text-lg sm:text-xl font-semibold">Recent Files</h1>
        </div>

        <div className="px-4 sm:px-6 lg:px-10 pb-10">
          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 mt-4 w-full">
            {recentFiles.length === 0 ? (
              <div className="col-span-full w-full max-w-5xl mx-auto">
                <div className="bg-[#1d1d1d] border border-gray-700 rounded-xl min-h-[280px] flex flex-col justify-center items-center px-5 text-center">
                  <FiClock size={65} className="text-gray-500" />
                  <h3 className="text-white text-xl sm:text-2xl font-semibold mt-5">No Recent Files</h3>
                  <p className="text-gray-400 mt-2">Files you upload will show up here.</p>
                  <button
                    onClick={() => navigate("/upload")}
                    className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white transition"
                  >
                    Upload File
                  </button>
                </div>
              </div>
            ) : (
              recentFiles.map((file) => (
                <div
                  key={file.id}
                  className="bg-[#1d1d1d] border border-gray-700 rounded-lg sm:rounded-xl hover:border-blue-500 transition overflow-hidden relative flex flex-col"
                >
                  {/* Card Header */}
                  <div className="flex justify-between items-center p-2 sm:p-3">
                    <h3 className="text-white text-[11px] sm:text-xs font-medium truncate max-w-[75%]" title={file.name}>
                      {file.name}
                    </h3>

                    <div className="relative">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveMenuId(activeMenuId === file.id ? null : file.id);
                        }}
                        className="p-1 rounded-md hover:bg-gray-800 transition"
                      >
                        <FiMoreVertical className="text-gray-400 hover:text-white text-xs sm:text-sm" />
                      </button>

                      {/* Dropdown Menu */}
                      {activeMenuId === file.id && (
                        <div className="absolute right-0 top-6 w-28 sm:w-32 bg-[#252525] border border-gray-700 rounded-lg shadow-xl z-30 py-1">
                          <button
                            onClick={() => {
                              setEditingFile(file);
                              setNewFileName(file.name);
                              setActiveMenuId(null);
                            }}
                            className="w-full flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] sm:text-xs text-gray-200 hover:bg-[#333] transition"
                          >
                            <FiEdit size={12} /> Rename
                          </button>
                          <button
                            onClick={() => handleDelete(file.id)}
                            className="w-full flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] sm:text-xs text-red-400 hover:bg-[#333] transition"
                          >
                            <FiTrash2 size={12} /> Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Thumbnail / Image Preview */}
                  <div
                    onClick={() => setPreviewFile(file)}
                    className="h-24 sm:h-28 md:h-32 bg-[#262626] flex justify-center items-center overflow-hidden p-1.5 cursor-pointer hover:opacity-90 transition"
                  >
                    <MediaPreview file={file} />
                  </div>

                  {/* Card Footer */}
                  <div className="border-t border-gray-700 p-2 sm:p-3 mt-auto">
                    <p className="text-[9px] sm:text-[10px] text-gray-500">Last Updated</p>
                    <p className="text-[10px] sm:text-xs text-gray-300 mt-0.5 truncate">{file.uploadedAt || "Today"}</p>
                    <p className="text-[10px] sm:text-[11px] text-blue-400 mt-1 font-medium">{file.size}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>

      {/* Full-Screen Preview Modal */}
      {previewFile && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-sm flex flex-col items-center justify-center z-50 p-4">
          <div className="w-full max-w-3xl flex items-center justify-between mb-3 text-white">
            <h3 className="text-sm sm:text-base font-semibold truncate max-w-[70%]">{previewFile.name}</h3>
            <div className="flex items-center gap-3">
              {previewFile.preview && (
                <a
                  href={previewFile.preview}
                  download={previewFile.name}
                  className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition"
                >
                  <FiDownload size={14} /> Download
                </a>
              )}
              <button
                onClick={() => setPreviewFile(null)}
                className="p-1.5 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-full transition"
              >
                <FiX size={20} />
              </button>
            </div>
          </div>
          <div className="max-w-3xl max-h-[80vh] flex items-center justify-center overflow-hidden rounded-xl bg-[#181818] border border-gray-700 p-2">
            <MediaPreview file={previewFile} isModal={true} />
          </div>
        </div>
      )}

      {/* Rename File Modal */}
      {editingFile && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-[#1d1d1d] border border-gray-700 rounded-xl p-5 w-full max-w-xs sm:max-w-sm">
            <h3 className="text-white text-base sm:text-lg font-semibold mb-3">Rename File</h3>
            <input
              type="text"
              value={newFileName}
              onChange={(e) => setNewFileName(e.target.value)}
              className="w-full bg-[#262626] border border-gray-700 text-white rounded-lg p-2.5 text-xs sm:text-sm focus:outline-none focus:border-blue-500 mb-4"
            />
            <div className="flex gap-2.5">
              <button
                onClick={handleSaveRename}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-xs sm:text-sm font-medium transition"
              >
                Save
              </button>
              <button
                onClick={() => setEditingFile(null)}
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg text-xs sm:text-sm font-medium transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Recent;