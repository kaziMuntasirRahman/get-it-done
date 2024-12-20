import { Helmet } from "react-helmet-async";
import { FaBook, FaFileAlt, FaVideo, FaQuestionCircle, FaSearch } from "react-icons/fa";
import { TopBar } from "../components/DashboardComponent";
import { Link } from "react-router-dom";

const Resources = () => {
  const resources = [
    {
      id: 1,
      type: "Guide",
      title: "Getting Started with GetItDone",
      description: "Learn the basics of using our platform effectively",
      icon: <FaBook className="text-violet-600" />,
      link: "#"
    },
    {
      id: 2,
      type: "Documentation", 
      title: "Service Provider Guidelines",
      description: "Best practices and policies for service providers",
      icon: <FaFileAlt className="text-blue-600" />,
      link: "#"
    },
    {
      id: 3,
      type: "Video Tutorial",
      title: "Managing Your Services",
      description: "Step-by-step video guide on service management",
      icon: <FaVideo className="text-green-600" />,
      link: "#"
    },
    {
      id: 4,
      type: "FAQ",
      title: "Frequently Asked Questions", 
      description: "Common questions and detailed answers",
      icon: <FaQuestionCircle className="text-yellow-600" />,
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Resources • GetItDone</title>
      </Helmet>

      <TopBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Resources & Learning Center
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about GetItDone platform. Browse through our comprehensive collection of guides, tutorials and FAQs.
          </p>
          
          {/* Search Bar */}
          <div className="mt-8 max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-600 focus:border-transparent"
              />
              <FaSearch className="absolute right-3 top-3.5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {["Guides", "Documentation", "Video Tutorials", "FAQs"].map((category, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-block p-3 bg-violet-100 rounded-lg mb-4">
                {[<FaBook />, <FaFileAlt />, <FaVideo />, <FaQuestionCircle />][index]}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{category}</h3>
            </div>
          ))}
        </div>

        {/* Featured Resources */}
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map(resource => (
            <a
              key={resource.id}
              href={resource.link}
              className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl p-3 bg-gray-50 rounded-lg group-hover:bg-violet-50 transition-colors">
                  {resource.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 text-sm font-medium bg-violet-100 text-violet-800 rounded-full">
                      {resource.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-violet-600">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600">
                    {resource.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Help Section */}
        <div className="mt-16 text-center bg-violet-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need More Help?</h2>
          <p className="text-gray-600 mb-6">Can't find what you're looking for? Our support team is here to help.</p>
          <Link to="/contact" className="bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-700 transition-colors">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Resources;
