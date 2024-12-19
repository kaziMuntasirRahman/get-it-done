import { useContext, useEffect, useState } from 'react';
import { Helmet } from "react-helmet-async";
import { MdDelete } from "react-icons/md";
import { Aside } from '../components/DashboardComponent';
import axios from 'axios';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';


const ManageServices = () => {
  const { user } = useContext(AuthContext)
  const [uiServices, setUIServices] = useState([]);

  // useEffect(() => {
  //   fetch('/data/services.json')
  //     .then(res => res.json())
  //     .then(data => setServices(data))
  // }, [])


  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/services/${user?.email}`)
        // console.log(response.data[0])
        setUIServices(response.data)
      } catch (err) {
        console.log(err);
      }
    }
    fetchServices()
  }, [user])


  const handleDeleteService = async (id) => {
    // console.log(id);
    // confirm("Do you really want to delete this service?")

    const answer = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    })
    // .then((result) => {
    //   if (result.isConfirmed) {
    if(!answer.isConfirmed) return;


    try {
      const response = await axios.delete(`http://localhost:5000/services?email=${user?.email}&id=${id}`)
      console.log(response.data)
      if (response.data.deletedCount > 0) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Service deleted successfully!",
          text: "The selected service has been removed.",
          showConfirmButton: false,
          timer: 2500
        });
        setUIServices(uiServices.filter(service => service._id !== id))
      }
      else {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: "No service found!",
          text: "No service matched your request to delete. Please verify the service.",
          showConfirmButton: false,
          timer: 2500
        });
      }
    } catch (err) {
      console.log(err)
      Swal.fire({
        icon: "error",
        title: "Failed to delete service",
        text: "Something went wrong while trying to delete the service. Please try again.",
        footer: '<a href="#">Need help resolving this issue?</a>',
        timer: 3000
      });
    }
  }


  return (
    <div div className="dashboard-body">
      <Helmet>
        <title>Manage Services • GetItDone</title>
      </Helmet>
      <div className="dashboard-main">
        <div className="dashboard-section w-full">
          <h1 className="dashboard-title text-center">Manage Your Services</h1>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>sl</th>
                  <th>Service Img & Name</th>
                  <th>Service Title</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {
                  uiServices.map((service, index) =>
                    <tr key={index} className="hover:bg-slate-100 transition-all duration-300">
                      <th>{index + 1}</th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle size-12">
                              <img
                                src={service.image}
                                alt={service.image} />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{service.serviceProviderName}</div>
                            <div className="text-sm opacity-50">{service.serviceLocation}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        {service.title}
                        <br />
                        <span className="badge badge-ghost badge-sm">{service.title}</span>
                      </td>
                      <td><button className="btn btn-ghost btn-sm">Update</button></td>
                      <th className='items-center justify-center'>
                        <MdDelete
                          onClick={() => handleDeleteService(service._id)}
                          className="text-red-600 text-2xl cursor-pointer" />
                      </th>
                    </tr>
                  )
                }

              </tbody>
              {/* foot */}
              <tfoot>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Service Title</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
      {/* <Aside
        topHead="Add section heading"
        topBody="Add section body"
      // bottomArray={[{}, {}, {}, {}]}
      /> */}
    </div>
  );
};

export default ManageServices;