import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaClock, FaEye, FaTimes } from "react-icons/fa";
import Swal from "sweetalert2";
import { Aside } from "../components/DashboardComponent";
import { AuthContext } from "../providers/AuthProvider";

const ServicesToDo = () => {
  const [servicesToDo, setServicesToDo] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchServicesToDo = async () => {
      const response = await axios.get(`https://get-it-done-server.vercel.app/bookings/provider/${user.email}`);
      setServicesToDo(response.data);
    };
    fetchServicesToDo();
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
      title: service.serviceName,
      html: `
        <div class="text-left">
          <p><strong>Client:</strong> ${service.client}</p>
          <p><strong>Date & Time:</strong> ${service.date} at ${service.time}</p>
          <p><strong>Location:</strong> ${service.location}</p>
          <p><strong>Description:</strong> ${service.description}</p>
        </div>
      `,
      confirmButtonText: 'Close',
      confirmButtonColor: '#6366f1'
    });
  };

  return (
    <div className="dashboard-body">
      <Helmet>
        <title>Services To Do • GetItDone</title>
      </Helmet>
      <div className="dashboard-main">
        <div className="dashboard-section">
          {/* <h1 className="dashboard-title flex items-center gap-3">
            <FaCalendarCheck className="text-3xl text-violet-600" />
            Your Services To Do
          </h1> */}
          <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl p-6 md:p-8 mb-8 text-white">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Services To Do</h1>
            <p className="opacity-90">View and manage your upcoming service appointments and tasks.</p>
          </div>
          <div className="mt-8 space-y-4">
            <div className="overflow-x-auto bg-white rounded-xl shadow-sm-teal">
              <table className="table table-zebra w-full">
                <thead>
                  <tr className="bg-violet-50">
                    <th>Service Name</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Price</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {servicesToDo.map(service => (
                    <tr key={service.id}>
                      <td className="font-medium">{service.serviceName}</td>
                      <td>
                        <div className="flex items-center gap-2">
                          <FaClock className="text-violet-600" />
                          {service.date}
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-ghost">{service.status}</span>
                      </td>
                      <td>${service.price}</td>
                      <td>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => viewServiceDetails(service)}
                            className="btn btn-ghost btn-sm"
                          >
                            <FaEye className="text-violet-600" />
                          </button>
                          <button
                            onClick={() => handleCancelService(service.id)}
                            className="btn btn-ghost btn-sm"
                          >
                            <FaTimes className="text-red-500" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Aside
        topHead="Services Overview"
        topBody="Track and manage your upcoming services. Stay organized and deliver quality work on time."
        bottomArray={[
          { title: "Total", value: "3" },
          { title: "Pending", value: "1" },
          { title: "In Progress", value: "1" },
          { title: "Scheduled", value: "1" }
        ]}
      />
    </div>
  );
};

export default ServicesToDo;