import { Helmet } from "react-helmet-async";
import { FaUserCheck, FaHandshake, FaShieldAlt, FaTools, FaStar, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="section-default flex flex-col items-center">
      <Helmet>
        <title>About Us • GetItDone</title>
      </Helmet>

      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-teal-500 to-blue-600 py-20">
        <div className="max-w-6xl mx-auto text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-6">About GetItDone</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Transforming the way services are discovered, delivered, and experienced. Your one-stop platform for quality professional services.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-[#1E3A8A] mb-6">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              At GetItDone, we're revolutionizing the service industry by creating a dynamic ecosystem where skilled professionals and customers connect seamlessly. Our platform empowers service providers to grow their businesses while ensuring customers receive exceptional service experiences.
            </p>
          </motion.div>
          <motion.img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3"
            alt="Mission"
            className="rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-sm-teal">
              <h3 className="text-4xl font-bold text-teal-600 mb-2">2000+</h3>
              <p className="text-gray-600">Service Providers</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm-teal">
              <h3 className="text-4xl font-bold text-teal-600 mb-2">15K+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm-teal">
              <h3 className="text-4xl font-bold text-teal-600 mb-2">50+</h3>
              <p className="text-gray-600">Service Categories</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm-teal">
              <h3 className="text-4xl font-bold text-teal-600 mb-2">4.8</h3>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-[#1E3A8A] mb-12">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-sm-teal hover:shadow-md transition-shadow"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <FaUserCheck className="text-5xl text-teal-600 mb-4" />
            <h3 className="text-xl font-semibold text-[#1E3A8A] mb-3">Quality Assurance</h3>
            <p className="text-gray-600">Rigorous vetting process for all service providers ensuring top-tier professional standards.</p>
          </motion.div>

          <motion.div 
            className="bg-white p-8 rounded-xl shadow-sm-teal hover:shadow-md transition-shadow"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <FaHandshake className="text-5xl text-teal-600 mb-4" />
            <h3 className="text-xl font-semibold text-[#1E3A8A] mb-3">Trust & Reliability</h3>
            <p className="text-gray-600">Building lasting relationships through transparent and dependable service delivery.</p>
          </motion.div>

          <motion.div 
            className="bg-white p-8 rounded-xl shadow-sm-teal hover:shadow-md transition-shadow"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <FaShieldAlt className="text-5xl text-teal-600 mb-4" />
            <h3 className="text-xl font-semibold text-[#1E3A8A] mb-3">Secure Platform</h3>
            <p className="text-gray-600">State-of-the-art security measures protecting your data and transactions.</p>
          </motion.div>
        </div>
      </div>

      {/* Team Section */}
      <div className="w-full bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#1E3A8A] mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((member) => (
              <motion.div 
                key={member}
                className="bg-white rounded-xl overflow-hidden shadow-sm-teal"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={`/images/team/member-${member}.jpg`}
                  alt="Team Member"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg text-[#1E3A8A]">Team Member {member}</h3>
                  <p className="text-gray-600">Position</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-gradient-to-r from-teal-500 to-blue-600 py-16 mt-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-white text-lg opacity-90 mb-8">
            Join thousands of satisfied customers and service providers on GetItDone
          </p>
          <div className="flex gap-4 justify-center">
            <button className="btn btn-primary bg-white text-blue-600 hover:bg-gray-100">
              Find Services
            </button>
            <button className="btn btn-outline text-white hover:bg-white hover:text-blue-600">
              Become a Provider
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;