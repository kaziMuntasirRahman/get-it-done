import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Helmet } from "react-helmet-async";
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';
import { InputBox, SubmitButton, TextArea } from '../components/AuthPageComponent';
import { AuthContext } from '../providers/AuthProvider';


const ManageServices = () => {
  const { user } = useContext(AuthContext)
  const [uiServices, setUIServices] = useState([]);

  const [updateServiceName, setUpdateServiceName] = useState("");
  const [updateServiceImage, setUpdateServiceImage] = useState("");
  const [updatePrice, setUpdatePrice] = useState(0);
  const [updateServiceArea, setUpdateServiceArea] = useState("");
  const [updateDescription, setUpdateDescription] = useState("");

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

  const handleUpdateService = async (e, id) => {
    e.preventDefault();
    const updatedService = {
      title: updateServiceName,
      image: updateServiceImage,
      price: updatePrice,
      area: updateServiceArea,
      description: updateDescription
    }
    console.log(updatedService)
    try {
      const response = await axios.patch(`http://localhost:5000/services?email=${user?.email}&id=${id}`, updatedService)
      console.log(response.data)
      if (response.data.modifiedCount > 0) {
        // Close modal by unchecking the checkbox
        const modalCheckbox = document.getElementById(`update-modal-${id}`);
        const closeModal = () => {
          if (modalCheckbox) {  
            modalCheckbox.checked = false;
          }
        }
        setTimeout(closeModal, 1000)

        setUIServices(uiServices.map(service =>
          service._id === id ? { ...service, ...updatedService } : service
        ));

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Service updated successfully!",
          text: "The selected service has been updated.",
          showConfirmButton: false,
          timer: 2500
        });
      }
    } catch (err) {
      console.log(err)
      Swal.fire({
        icon: "error",
        title: "Failed to update service",
        text: "Something went wrong while trying to update the service. Please try again.",
        footer: '<a href="#">Need help resolving this issue?</a>',
        timer: 3000
      });
    }
  }


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
    if (!answer.isConfirmed) return;
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

  const initializeUpdateForm = (service) => {
    setUpdateServiceName(service.title);
    setUpdateServiceImage(service.image);
    setUpdatePrice(service.price);
    setUpdateServiceArea(service.area);
    setUpdateDescription(service.description);
  }

  return (
    <div className="dashboard-body">
      <Helmet>
        <title>Manage Services • GetItDone</title>
      </Helmet>

      <div className="dashboard-main">
        <div className="dashboard-section w-full px-3 md:px-6 py-5">
          <h1 className="dashboard-title !text-center">Manage Your Services</h1>
          <div className="overflow-x-auto  table">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th className='text-start'>Title</th>
                  <th className='text-start'>Service Area</th>
                  <th className='text-center w-1/4'>Price</th>
                  <th className='text-center'>View Service</th>
                  <th className='text-center'>Update Service</th>
                  <th className='text-center'>Delete Service</th>
                </tr>
              </thead>
              <tbody>
                {
                  uiServices.map((service, index) =>
                    <tr key={index} className={`hover:bg-violet-200 transition-all duration-500 ${index % 2 === 0 ? 'bg-slate-100' : ''}`}>
                      <th className='text-center'>{index + 1}</th>
                      <td className='text-start'>{service.title}</td>
                      <td className='text-start'>{service.area}</td>
                      <td className='font-bold text-center'>${service.price}</td>
                      <td className='text-center'>
                        <label htmlFor="view-modal" className="btn btn-ghost btn-sm hover:bg-violet-300">View</label>
                        {/* view modal */}
                        <input type="checkbox" id="view-modal" className="modal-toggle" />
                        <div className="modal" role="dialog">
                          <div className="modal-box max-w-7xl bg-gradient-to-br from-violet-50 via-white to-violet-50">
                            <div className="relative p-8">
                              <div className="flex flex-col md:flex-row gap-12">
                                <div className="md:w-1/2 space-y-10">
                                  <div className="group relative overflow-hidden rounded-2xl shadow-2xl">
                                    <img
                                      src={service?.image}
                                      alt={service?.title}
                                      className="w-full h-[450px] object-cover transform hover:scale-110 transition-transform duration-300 ease-in-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-violet-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                                  </div>

                                  <div className="grid grid-cols-3 gap-6">
                                    <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-violet-100 hover:border-violet-300 transition-all duration-300 hover:shadow-2xl">
                                      <p className="text-violet-800 font-bold text-lg">Area</p>
                                      <p className="text-violet-950 font-medium mt-2">{service?.area}</p>
                                    </div>
                                    <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-violet-100 hover:border-violet-300 transition-all duration-300 hover:shadow-2xl">
                                      <p className="text-violet-800 font-bold text-lg">Price</p>
                                      <p className="text-violet-950 font-medium mt-2">${service?.price}</p>
                                    </div>
                                    <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-violet-100 hover:border-violet-300 transition-all duration-300 hover:shadow-2xl">
                                      <p className="text-violet-800 font-bold text-lg">Posted</p>
                                      <p className="text-violet-950 font-medium mt-2">{new Date(service?.postedDate).toLocaleDateString()}</p>
                                    </div>
                                  </div>
                                </div>

                                <div className="md:w-1/2 space-y-10">
                                  <div>
                                    <h3 className="text-5xl font-bold mb-8 bg-gradient-to-r from-violet-700 to-violet-950 bg-clip-text text-transparent">{service?.title}</h3>
                                    <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-violet-100 hover:shadow-2xl transition-all duration-300">
                                      <p className="text-gray-700 leading-relaxed text-lg">{service?.description}</p>
                                    </div>
                                  </div>

                                  <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-violet-100 hover:shadow-2xl transition-all duration-300">
                                    <h4 className="text-3xl font-bold text-violet-900 mb-6">Comments</h4>
                                    <div className="space-y-5 max-h-[300px] overflow-y-auto pr-4">
                                      {service?.comments?.length > 0 ? (
                                        service.comments.map((comment, idx) => (
                                          <div
                                            key={idx}
                                            className="bg-gradient-to-r from-violet-100/50 to-white p-6 rounded-xl border-l-4 border-violet-400 hover:border-violet-600 transition-all duration-300 hover:shadow-lg"
                                          >
                                            <p className="text-gray-700 text-lg">{comment}</p>
                                          </div>
                                        ))
                                      ) : (
                                        <p className="text-gray-500 italic text-center py-6 text-lg">No comments yet</p>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <label className="modal-backdrop" htmlFor="view-modal">Close</label>
                        </div>
                        {/* view modal ends */}
                      </td>
                      <td className='text-center'>
                        <label
                          htmlFor={`update-modal-${service._id}`}
                          className="btn btn-ghost btn-sm hover:bg-violet-300"
                          onClick={() => initializeUpdateForm(service)}
                        >Update</label>
                        {/* update modal */}
                        <input type="checkbox" id={`update-modal-${service._id}`} className="modal-toggle" />
                        <div className="modal" role="dialog">
                          <div className="modal-box max-w-5xl bg-gradient-to-br from-violet-50 via-white to-violet-50">
                            <h1 className="dashboard-title !text-center">Update Service</h1>
                            <form
                              onSubmit={(e) => handleUpdateService(e, service._id)}
                              className="text-left flex flex-col md:grid md:grid-cols-2 gap-x-10"
                            >
                              <InputBox
                                label="Service Name"
                                type="text"
                                autoFocus={true}
                                setInputValue={setUpdateServiceName}
                                defaultValue={service.title}
                                required
                              />
                              <InputBox
                                label="Service Image URL"
                                type="text"
                                setInputValue={setUpdateServiceImage}
                                defaultValue={service.image}
                                required
                              />
                              <InputBox
                                label="Price"
                                type="number"
                                setInputValue={setUpdatePrice}
                                defaultValue={service.price}
                                min={0}
                                required
                              />
                              <InputBox
                                label="Service Area"
                                type="text"
                                setInputValue={setUpdateServiceArea}
                                defaultValue={service.area}
                                placeholder="New Hampshire"
                                required
                              />
                              <TextArea
                                label="Description"
                                rows={4}
                                setInputValue={setUpdateDescription}
                                defaultValue={service.description}
                                required
                              />
                              <div className="my-4 col-span-2">
                                <SubmitButton text="Update Service" />
                              </div>
                            </form>
                          </div>
                          <label className="modal-backdrop" htmlFor={`update-modal-${service._id}`}>Close</label>
                        </div>
                      </td>
                      {/* update modal ends */}
                      <td className=''>
                        <MdDelete
                          onClick={() => handleDeleteService(service._id)}
                          className="text-red-600 text-2xl cursor-pointer hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-2xl hover:shadow-red-500 hover:bg-red-500 hover:rounded-full m-auto"
                        />
                      </td>
                    </tr>
                  )
                }
              </tbody>
              <tfoot>
                <tr>
                  <th className='text-center'></th>
                  <th className='text-start'>Title</th>
                  <th className='text-start'>Service Area</th>
                  <th className='text-center'>Price</th>
                  <th className='text-center'>View</th>
                  <th className='text-center'>Update</th>
                  <th className='text-center'>Delete</th>
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
