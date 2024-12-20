const ServiceHighlights = () => {
  const highlights = [
    {
      title: "Professional Service",
      description: "Our vetted professionals deliver high-quality work that meets your expectations",
      icon: "👨‍🔧",
      color: "from-violet-500 to-purple-600"
    },
    {
      title: "Secure Payments", 
      description: "Safe and secure payment processing for all your service bookings",
      icon: "🔒",
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer support to assist you whenever you need help",
      icon: "💬",
      color: "from-emerald-500 to-teal-600"
    }
  ];

  return (
    <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose GetItDone?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide the best platform for connecting service providers with customers, ensuring quality and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`w-16 h-16 mb-6 rounded-xl flex items-center justify-center text-3xl bg-gradient-to-r ${item.color} text-white`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-violet-600 text-white px-8 py-3 rounded-xl hover:bg-violet-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceHighlights;