import { Helmet } from "react-helmet-async";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { InputBox, TextArea, SubmitButton } from '../components/AuthPageComponent';

const Contact = () => {
  return (
    <div className="section-default flex flex-col items-center">
      <Helmet>
        <title>Contact Us • GetItDone</title>
      </Helmet>

      <h1 className="section-title">Get in Touch</h1>
      
      {/* Hero Section */}
      <div className="w-full max-w-6xl px-4 mb-12">
      <div className="bg-gradient-to-r from-teal-500 to-violet-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help? We're Here For You</h2>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Have questions about our services? Want to become a service provider? Our team is ready to help you!
          </p>
        </div>
      </div>

      <div className="max-w-6xl w-full mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm-teal">
              <h2 className="text-2xl font-bold text-[#1E3A8A] mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <InputBox
                    label="Full Name"
                    type="text"
                    placeholder="John Doe"
                    required
                  />
                  <InputBox
                    label="Email Address" 
                    type="email"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <InputBox
                  label="Subject"
                  type="text"
                  placeholder="How can we help?"
                  required
                />
                <TextArea
                  label="Message"
                  rows={6}
                  placeholder="Tell us more about your inquiry..."
                  required
                />
                <SubmitButton text="Send Message" />
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm-teal hover:shadow-md transition duration-300">
              <div className="flex items-center gap-4">
                <div className="bg-[#1E3A8A] bg-opacity-10 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-[#1E3A8A] text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1E3A8A]">Our Location</h3>
                  <p className="text-gray-600 mt-1">123 Business Avenue, Suite 100<br/>New York, NY 10001</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm-teal hover:shadow-md transition duration-300">
              <div className="flex items-center gap-4">
                <div className="bg-[#1E3A8A] bg-opacity-10 p-3 rounded-full">
                  <FaEnvelope className="text-[#1E3A8A] text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1E3A8A]">Email Us</h3>
                  <p className="text-gray-600 mt-1">contact@getitdone.com<br/>support@getitdone.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm-teal hover:shadow-md transition duration-300">
              <div className="flex items-center gap-4">
                <div className="bg-[#1E3A8A] bg-opacity-10 p-3 rounded-full">
                  <FaPhone className="text-[#1E3A8A] text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1E3A8A]">Call Us</h3>
                  <p className="text-gray-600 mt-1">+1 (555) 123-4567<br/>+1 (555) 987-6543</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm-teal hover:shadow-md transition duration-300">
              <div className="flex items-center gap-4">
                <div className="bg-[#1E3A8A] bg-opacity-10 p-3 rounded-full">
                  <FaClock className="text-[#1E3A8A] text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1E3A8A]">Working Hours</h3>
                  <p className="text-gray-600 mt-1">Mon - Fri: 9:00 AM - 6:00 PM<br/>Sat: 10:00 AM - 4:00 PM<br/>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;