function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Create an Account",
      description:
        "Sign up in a few seconds and create your personal cloud storage account.",
    },
    {
      number: "02",
      title: "Upload Your Files",
      description:
        "Upload documents, images, videos and other files securely.",
    },
    {
      number: "03",
      title: "Access Anytime",
      description:
        "View, download and manage your files from anywhere.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-2xl transition"
            >
              <h1 className="text-5xl font-bold text-blue-600 mb-6">
                {step.number}
              </h1>

              <h3 className="text-2xl font-semibold mb-4">
                {step.title}
              </h3>

              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default HowItWorks;