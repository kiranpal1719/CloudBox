function StorageStats() {
  const stats = [
    { title: "Total Storage", value: "10 GB" },
    { title: "Used Storage", value: "0.7 GB" },
    { title: "Free Storage", value: "5 GB" },
    { title: "Total Files", value: "1" },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Storage Overview
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition"
            >
              <h3 className="text-lg text-gray-500">{item.title}</h3>

              <p className="text-3xl font-bold text-blue-600 mt-4">
                {item.value}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default StorageStats;