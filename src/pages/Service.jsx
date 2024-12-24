import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaCheckCircle, FaClock, FaEnvelope, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { InputBox, TextArea } from "../components/AuthPageComponent";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AuthContext } from "../providers/AuthProvider";

const Service = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const [bookingDate, setBookingDate] = useState("");
  const [specialInstructions, setSpecialInstructions] = useState("");

  // Default images
  const defaultServiceImage = "https://placehold.co/600x400?text=Service+Image";
  const defaultProviderImage = "https://placehold.co/200x200?text=Provider";

  useEffect(() => {
    const fetchService = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://get-it-done-server.vercel.app/services/${id}`);
        setService(response.data);
        console.log(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchService();
  }, [id]);

  const handleBookService = async (e) => {
    e.preventDefault();

    const bookingData = {
      serviceId: service._id,
      title: service.title,
      image: service.image,
      providerEmail: service.providerEmail,
      providerName: service.providerName,
      userEmail: user.email,
      userName: user.displayName,
      bookingDate,
      specialInstructions,
      price: service.price,
      serviceStatus: "pending"
    };

    try {
      const response = await axios.post('https://get-it-done-server.vercel.app/bookings', bookingData);
      if (response.data.insertedId) {
        Swal.fire({
          icon: 'success',
          title: 'Service Booked Successfully!',
          text: 'You can track your booking in the dashboard',
          showConfirmButton: false,
          timer: 2000
        });
        // Close modal
        const modal = document.getElementById('booking-modal');
        if (modal) modal.checked = false;
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: 'error',
        title: 'Booking Failed',
        text: 'Please try again later'
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="section-default flex justify-center items-center">
          <div className="flex flex-col items-center gap-4">
            <span className="loading loading-spinner loading-lg text-teal-600"></span>
            <p className="text-gray-600 animate-pulse">Loading service details...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{service?.title || "Service Details"} • GetItDone</title>
      </Helmet>
      <Navbar />
      <div className="section-default">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-t-2xl p-8 text-white">
            <h1 className="text-4xl font-bold mb-4">{service?.title}</h1>
            <div className="flex items-center gap-2">
              <FaClock className="text-teal-200" />
              <span className="text-teal-100">Available 24/7</span>
            </div>
          </div>

          <div className="bg-white rounded-b-2xl p-8 shadow-xl">
            <div className="flex gap-12">
              <div className="w-2/3">
                <div className="relative group">
                  <img
                    src={service?.image || defaultServiceImage}
                    alt={service?.title}
                    className="w-full h-[450px] object-cover rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300"
                    onError={(e) => {
                      e.target.src = defaultServiceImage;
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-teal-500 text-white px-4 py-2 rounded-full shadow-lg">
                    <span className="font-bold">${service?.price}</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">About This Service</h2>
                  <p className="text-gray-600 leading-relaxed mb-8">{service?.description}</p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800">What's Included:</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {['Professional Service', 'Quality Guarantee', '24/7 Support', 'Satisfaction Guaranteed'].map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-gray-700">
                          <FaCheckCircle className="text-teal-500" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <label htmlFor="booking-modal" className="mt-8 w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white !px-6 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl btn border-0">
                    Book This Service
                  </label>
                </div>
              </div>

              <div className="w-1/3 space-y-6">
                <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Service Provider</h2>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <img
                        src={service?.providerImage || defaultProviderImage}
                        alt={service?.providerName}
                        className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                        onError={(e) => {
                          e.target.src = defaultProviderImage;
                        }}
                      />
                      <div className="absolute -bottom-1 -right-1 bg-teal-500 rounded-full p-1">
                        <FaCheckCircle className="text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">{service?.providerName}</h3>
                      <div className="flex items-center gap-2 text-gray-600">
                        <FaUser className="text-teal-500" />
                        <span>Professional Service Provider</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-600">
                      <FaEnvelope className="text-teal-500" />
                      <span>{service?.providerEmail}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <FaMapMarkerAlt className="text-teal-500" />
                      <span>{service?.area}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl shadow-md">
                  <h3 className="font-bold text-lg text-blue-800 mb-4">Why Choose Us?</h3>
                  <ul className="space-y-3">
                    {['Experienced Professionals', 'Quality Service', 'Competitive Pricing', 'Customer Satisfaction'].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-blue-700">
                        <FaCheckCircle className="text-blue-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box max-w-3xl">
          <h3 className="font-bold text-lg mb-4">Book Service</h3>
          <form onSubmit={handleBookService} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <InputBox
                label="Service ID"
                type="text"
                value={service?._id}
                disabled={true}
              />
              <InputBox
                label="Service Name"
                type="text"
                value={service?.title}
                disabled={true}
              />
              <InputBox
                label="Provider Email"
                type="text"
                value={service?.providerEmail}
                disabled={true}
              />
              <InputBox
                label="Provider Name"
                type="text"
                value={service?.providerName}
                disabled={true}
              />
              <InputBox
                label="Your Email"
                type="text"
                value={user?.email}
                disabled={true}
              />
              <InputBox
                label="Your Name"
                type="text"
                value={user?.displayName}
                disabled={true}
              />
              <InputBox
                label="Service Date"
                type="date"
                value={bookingDate}
                setInputValue={setBookingDate}
                min={new Date().toISOString().split("T")[0]}
                required={true}
              />
              <InputBox
                label="Price"
                type="text"
                value={`$${service?.price}`}
                disabled={true}
              />
            </div>
            <div>
              <TextArea
                label="Special Instructions"
                placeholder="Add any special instructions, address, or customization requests..."
                value={specialInstructions}
                setInputValue={setSpecialInstructions}
              />
            </div>
            <div className="modal-action">
              <label htmlFor="booking-modal" className="btn">Cancel</label>
              <button type="submit" className="btn btn-primary">Purchase Service</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Service;