const HomeHero = () => {
  return (
    <div className="min-h-screen relative overflow-hidden ">
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="flex gap-8 animate-[slide_50s_linear_infinite]">
            {[1, 2, 3, 4, 5].map((item) => (
              <div 
                key={item}
                className="w-[300px] h-[400px] bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg"
              >
                <div className="h-48 w-full rounded-xl mb-6 overflow-hidden">
                  <img 
                    src={`/images/service-${item}.jpg`}
                    alt="Service"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 px-6">
                  Professional Service {item}
                </h3>
                <p className="text-gray-600 px-6">
                  Expert solutions for your everyday needs. Quality work guaranteed.
                </p>
                <div className="mt-4 flex items-center gap-2 px-6">
                  <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center">
                    <span className="text-violet-600 text-sm">★</span>
                  </div>
                  <span className="text-violet-600 font-medium">4.9</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-20 text-center max-w-3xl mx-auto px-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-teal-500 mb-6">
            Get Your Tasks Done Professionally
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Connect with skilled professionals for all your service needs. From home repairs to specialized tasks, we've got you covered.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-violet-600 to-teal-500 text-white rounded-full font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;