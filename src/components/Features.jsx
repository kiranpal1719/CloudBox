import {
  FaCloudUploadAlt,
  FaLock,
  FaFolderOpen,
  FaMobileAlt,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaCloudUploadAlt size={40} className="text-blue-600" />,
      title: "Fast Upload",
      description: "Upload files quickly and securely to your cloud storage.",
    },
    {
      icon: <FaLock size={40} className="text-blue-600" />,
      title: "Secure Storage",
      description: "Your files are protected with authentication and encryption.",
    },
    {
      icon: <FaFolderOpen size={40} className="text-blue-600" />,
      title: "Easy File Management",
      description: "Organize your files into folders and access them anytime.",
    },
    {
      icon: <FaMobileAlt size={40} className="text-blue-600" />,
      title: "Access Anywhere",
      description: "Access your files from desktop, tablet or mobile devices.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12">
        Our Features
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <div className="mb-4">{feature.icon}</div>

            <h3 className="text-xl font-semibold mb-3">
              {feature.title}
            </h3>

            <p className="text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;