import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import {
  FaFileAlt,
  FaDownload,
  FaTrash,
  FaImage,
  FaVideo,
  FaMusic,
  FaFolder,
  FaEye,
  FaTimes,
  FaThLarge,
} from "react-icons/fa";

// Category Filter Data 
const CATEGORIES = [
  { id: "all", label: "All Files", icon: FaThLarge },
  { id: "image", label: "Images", icon: FaImage },
  { id: "video", label: "Videos", icon: FaVideo },
  { id: "document", label: "Documents", icon: FaFolder },
  { id: "audio", label: "Audio", icon: FaMusic },
];

export default function Files() {
  const [files, setFiles] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedMedia, setSelectedMedia] = useState(null);

  useEffect(() => {
    const storedFiles = JSON.parse(localStorage.getItem("myFiles")) || [];
    setFiles(storedFiles);
  }, []);

  // Delete Handler
  const handleDelete = (id) => {
    const updatedFiles = files.filter((file) => file.id !== id);
    setFiles(updatedFiles);
    localStorage.setItem("myFiles", JSON.stringify(updatedFiles));
  };

  // Download Handler
  const handleDownload = (file) => {
    if (file.preview) {
      const a = document.createElement("a");
      a.href = file.preview;
      a.download = file.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      alert(`Downloading ${file.name}...`);
    }
  };


  const getFileIcon = (type) => {
    if (type?.startsWith("image/")) return <FaImage className="text-blue-500" size={26} />;
    if (type?.startsWith("video/")) return <FaVideo className="text-purple-500" size={26} />;
    if (type?.startsWith("audio/")) return <FaMusic className="text-amber-500" size={26} />;
    return <FaFileAlt className="text-emerald-500" size={26} />;
  };

  // Filter Logic
  const filteredFiles = files.filter((file) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "document") {
      return (
        !file.type?.startsWith("image/") &&
        !file.type?.startsWith("video/") &&
        !file.type?.startsWith("audio/")
      );
    }
    return file.type?.startsWith(activeCategory);
  });

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* Existing Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 w-full min-w-0 p-4 sm:p-6 lg:p-8 pt-20 lg:pt-8 transition-all duration-300">
        
        {/* Title */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            My Files
          </h1>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            Manage and organize all your uploaded media.
          </p>
        </div>

        {/* Category Filters (Mobile Horizontal Scrollable) */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-3 mb-6 scrollbar-none touch-pan-x">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 active:scale-95 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-blue-200 shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-200 shadow-sm"
                }`}
              >
                <Icon className={isActive ? "text-white" : "text-gray-400"} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Grid Area */}
        {filteredFiles.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 sm:p-12 text-center max-w-md mx-auto my-8">
            <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaFolder size={28} className="text-gray-400" />
            </div>
            <h2 className="text-base sm:text-lg font-bold text-gray-800">No Files Found</h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">
              {activeCategory === "all"
                ? "You haven't uploaded any files yet."
                : `No files found matching '${activeCategory}'.`}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredFiles.map((file) => (
              <div
                key={file.id}
                className="group bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Thumbnail Preview */}
                <div className="h-36 sm:h-40 bg-gray-100 flex items-center justify-center overflow-hidden relative border-b border-gray-100">
                  {file.type?.startsWith("image/") && file.preview ? (
                    <img
                      src={file.preview}
                      alt={file.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : file.type?.startsWith("video/") && file.preview ? (
                    <video
                      src={file.preview}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="p-3 bg-white rounded-xl shadow-sm">
                      {getFileIcon(file.type)}
                    </div>
                  )}

                  {file.preview && (
                    <button
                      onClick={() => setSelectedMedia(file)}
                      className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity flex items-center justify-center text-white gap-2 text-xs sm:text-sm font-medium"
                    >
                      <FaEye /> Preview
                    </button>
                  )}
                </div>

                {/* Info */}
                <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      className="font-semibold text-gray-800 text-xs sm:text-sm line-clamp-1 group-hover:text-blue-600 transition-colors"
                      title={file.name}
                    >
                      {file.name}
                    </h3>

                    <div className="flex items-center justify-between text-[11px] sm:text-xs text-gray-400 mt-2 font-medium">
                      <span>{file.size}</span>
                      <span>{file.uploadedAt?.split(",")[0] || "Recent"}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 mt-4 pt-3 border-t border-gray-100">
                    <button
                      onClick={() => handleDownload(file)}
                      className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg text-xs font-semibold transition-all duration-200 active:scale-95"
                    >
                      <FaDownload size={11} /> Download
                    </button>

                    <button
                      onClick={() => handleDelete(file.id)}
                      className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors active:scale-95"
                      title="Delete File"
                    >
                      <FaTrash size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal Preview */}
        {selectedMedia && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="relative w-[95vw] sm:w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-2xl">
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-3 right-3 z-10 p-2 bg-black/60 text-white hover:bg-black rounded-full transition active:scale-95"
                aria-label="Close modal"
              >
                <FaTimes size={14} />
              </button>

              <div className="p-2 sm:p-4 flex items-center justify-center max-h-[80vh] bg-black">
                {selectedMedia.type?.startsWith("image/") ? (
                  <img
                    src={selectedMedia.preview}
                    alt={selectedMedia.name}
                    className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg"
                  />
                ) : (
                  <video
                    src={selectedMedia.preview}
                    controls
                    autoPlay
                    className="max-h-[75vh] w-full rounded-lg"
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}