import { useState, useEffect, useContext } from "react";
import { Helmet } from "react-helmet-async";
import { FaCalendarCheck, FaClock, FaEye, FaTimes } from "react-icons/fa";
import Swal from "sweetalert2";
import { Aside } from "../components/DashboardComponent";
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";

const BookedService = () => {
  const [bookedServices, setBookedServices] = useState([]);
  const { user } = useContext(AuthContext);


  useEffect(() => {
    const fetchBookedServices = async () => {
      const response = await axios.get(`http://localhost:5000/bookings/${user.email}`);
      setBookedServices(response.data);
      console.log(response.data);
    };
    fetchBookedServices();
  }, [user.email]);


  const handleCancelService = (serviceId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, cancel it!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Add API call here to cancel the service
        Swal.fire(
          'Cancelled!',
          'Your service has been cancelled.',
          'success'
        )
      }
    })
  };

  const viewServiceDetails = (service) => {
    Swal.fire({
      title: '',
      html: `
        <div class="text-left">
          <div class="relative w-full h-48 mb-6 rounded-t-lg overflow-hidden">
            <img src="${service.image}" alt="${service.title}" class="w-full h-full object-cover" />
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h2 class="text-2xl font-bold text-white">${service.title}</h2>
            </div>
          </div>
          
          <div class="px-6">
            <div class="flex items-center gap-4 mb-6">
              <img src="${service.providerImage}" alt="${service.providerName}" class="w-16 h-16 rounded-full border-4 border-white shadow-lg" />
              <div>
                <p class="text-lg font-semibold text-gray-800">${service.provider}</p>
                <span class="inline-flex items-center gap-1 text-sm text-violet-600">
                  <FaCheckCircle /> Verified Provider
                </span>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4 mb-6">
              <div class="bg-gray-50 p-3 rounded-lg">
                <div class="flex items-center gap-2 text-gray-600 mb-1">
                  <FaClock class="text-violet-600" />
                  <span class="text-sm font-medium">Date & Time</span>
                </div>
                <p class="text-gray-800">${service.date}<br/>${service.time}</p>
              </div>
              
              <div class="bg-gray-50 p-3 rounded-lg">
                <div class="flex items-center gap-2 text-gray-600 mb-1">
                  <FaDollarSign class="text-violet-600" />
                  <span class="text-sm font-medium">Price</span>
                </div>
                <p class="text-gray-800">$${service.price}</p>
              </div>
            </div>

            <div class="mb-6">
              <div class="flex items-center gap-2 text-gray-600 mb-2">
                <FaMapMarkerAlt class="text-violet-600" />
                <span class="text-sm font-medium">Location</span>
              </div>
              <p class="text-gray-800">${service.location}</p>
            </div>

            <div class="border-t py-4">
              <h3 class="text-sm font-medium text-gray-600 mb-2">Service Description</h3>
              <p class="text-gray-800">${service.description}</p>
            </div>
          </div>
        </div>
      `,
      showConfirmButton: false,
      confirmButtonText: 'Close',
      confirmButtonColor: '#6366f1',
      width: '32rem',
      padding: 0,
      customClass: {
        container: 'rounded-xl',
        popup: 'rounded-xl overflow-hidden',
      }
    });
  };

  return (
    <div className="dashboard-body">
      <Helmet>
        <title>Booked Services • GetItDone</title>
      </Helmet>
      <div className="dashboard-main">
        <div className="dashboard-section">
          <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl p-6 md:p-8 mb-8 text-white">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Booked Services</h1>
            <p className="opacity-90">Track and manage all your service bookings and appointments.</p>
          </div>
          <h1 className="dashboard-title flex items-center gap-3">
            <FaCalendarCheck className="text-3xl text-violet-600" />
            Your Booked Services
          </h1>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm-teal">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-600">Service</th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-600">Date</th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-600">Status</th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-600">Price</th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {bookedServices.map(service => (
                  <tr key={service._id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <span className="text-sm text-gray-900 font-medium">{service.title}</span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        <FaClock className="text-violet-600 text-sm" />
                        <span className="text-sm text-gray-600">{service.bookingDate}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-sm font-medium
                        ${service.status === 'Upcoming' ? 'bg-blue-100 text-blue-600' :
                          service.status === 'Completed' ? 'bg-green-100 text-green-600' :
                            'bg-yellow-100 text-yellow-600'}`}>
                        {service.status}
                        pending
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-sm font-medium text-violet-600">${service.price}</span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-6">
                        <button
                          onClick={() => viewServiceDetails(service)}
                          className="text-violet-600 hover:text-violet-800 transition-colors"
                          title="View Details"
                        >
                          <FaEye className="text-lg" />
                        </button>
                        {service.status !== 'Completed' && (
                          <button
                            onClick={() => handleCancelService(service.id)}
                            className="text-red-500 hover:text-red-700 transition-colors"
                            title="Cancel Service"
                          >
                            <FaTimes className="text-lg" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Aside
        topHead="Service Summary"
        topBody="Track and manage all your booked services in one place. Stay updated with service schedules and provider details."
        bottomArray={[
          { title: "Total", value: "3" },
          { title: "Upcoming", value: "1" },
          { title: "Completed", value: "1" },
          { title: "Pending", value: "1" }
        ]}
      />
    </div>
  );
};

export default BookedService;