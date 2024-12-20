import { Helmet } from "react-helmet-async";
import { Aside } from "../components/DashboardComponent";
import { FaCalendarCheck, FaClock, FaTimes, FaEye } from "react-icons/fa";
import { useState } from "react";
import Swal from "sweetalert2";

const ServicesToDo = () => {
  const [servicesToDo] = useState([
    {
      id: 1,
      serviceName: "House Painting",
      client: "Sarah Johnson",
      date: "2024-03-16",
      time: "11:00 AM",
      location: "234 Pine St, New York",
      status: "Scheduled",
      price: 350,
      description: "Full interior house painting service including walls, trim and ceiling"
    },
    {
      id: 2,
      serviceName: "Electrical Repair",
      client: "Mike Anderson",
      date: "2024-03-19",
      time: "3:00 PM",
      location: "567 Elm Ave, New York",
      status: "In Progress",
      price: 220,
      description: "Fix electrical outlets and install new lighting fixtures"
    },
    {
      id: 3,
      serviceName: "Window Cleaning",
      client: "Lisa Brown",
      date: "2024-03-21",
      time: "10:00 AM",
      location: "890 Maple Dr, New York",
      status: "Pending",
      price: 150,
      description: "Professional window cleaning for two-story house"
    }
  ]);

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