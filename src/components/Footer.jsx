import '../styles/footer.css';
import { FaGithub, FaTwitter, FaDiscord, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-br from-[#1E1438] to-[#2d1d54] pt-16 pb-8 text-white mt-auto overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-violet-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative section-default flex flex-col md:flex-row flex-wrap justify-between gap-12 md:gap-8 pb-12 px-6 md:px-8">
        {/* Brand Section */}
        <div className="w-full md:w-auto md:max-w-xs">
          <div className="flex items-center gap-4 mb-6">
            <img src="/images/logo.png" className="size-14 rounded-full" alt="Logo" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-violet-400 bg-clip-text text-transparent">
              GetItDone
            </h2>
          </div>
          <p className="text-gray-300 mb-6">
            Your trusted platform for professional services. Making service booking simple and efficient.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-teal-400 transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="#" className="hover:text-teal-400 transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-teal-400 transition-colors">
              <FaDiscord size={24} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 flex-1">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-teal-400">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-teal-400">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/docs" className="text-gray-300 hover:text-white transition-colors">Documentation</Link></li>
              <li><Link to="/support" className="text-gray-300 hover:text-white transition-colors">Support</Link></li>
              <li><Link to="/status" className="text-gray-300 hover:text-white transition-colors">System Status</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-teal-400">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/security" className="text-gray-300 hover:text-white transition-colors">Security</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-teal-400">Contact</h3>
            <ul className="space-y-2">
              <li><a href="mailto:support@getitdone.com" className="text-gray-300 hover:text-white transition-colors">Email Us</a></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Form</Link></li>
              <li><Link to="/help" className="text-gray-300 hover:text-white transition-colors">Help Center</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative border-t border-gray-700">
        <div className="section-default px-6 md:px-8 pt-8">
          <p className="text-center text-sm text-gray-400">
            Made with <FaHeart className="inline-block text-red-500 mx-1" /> Copyright &copy; 2024 Fly.io
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;