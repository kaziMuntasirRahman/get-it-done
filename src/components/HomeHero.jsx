const HomeHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-100 via-white to-teal-100 overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-200/60 to-teal-200/60 pointer-events-none" />

      {/* Animated Service Cards */}
      <div className="absolute inset-x-0 top-0 flex overflow-x-auto gap-8 py-16 px-4 animate-[slide_50s_linear_infinite] scrollbar-hide">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="w-[280px] min-w-[280px] h-[400px] bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl transition-transform hover:scale-105"
          >
            <div className="h-48 w-full rounded-xl mb-6 overflow-hidden">
              <img
                src={`/images/services/${item}.jpg`}
                alt={`Service ${item}`}
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
                <span className="text-violet-600 text-sm" aria-label="star">★</span>
              </div>
              <span className="text-violet-600 font-medium">4.9</span>
            </div>
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4 py-20">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-teal-500 mb-4 animate-fade-in-down">
          Get Your Tasks Done Professionally
        </h1>
        <h2 className="text-2xl font-medium text-violet-700 mb-4 animate-fade-in-up">
          Fast. Reliable. Trusted by thousands.
        </h2>
        <p className="text-xl text-gray-700 leading-relaxed mb-8">
          Connect with skilled professionals for all your service needs. From home repairs to specialized tasks, we've got you covered.
        </p>
        <button
          className="px-8 py-4 bg-gradient-to-r from-violet-600 to-teal-500 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-violet-300 transform hover:-translate-y-1 transition-all duration-200"
        >
          Get Started Today
        </button>
      </div>

      {/* Optional: Add keyframes for fade-in animations */}
      <style>{`
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-40px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in-down {
          animation: fade-in-down 1s cubic-bezier(.4,0,.2,1) both;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s .2s cubic-bezier(.4,0,.2,1) both;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default HomeHero;