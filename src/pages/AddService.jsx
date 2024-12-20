import axios from "axios";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { InputBox, SubmitButton, TextArea } from "../components/AuthPageComponent";
import { AuthContext } from "../providers/AuthProvider";

const AddService = () => {
  // State variables for form inputs
  const [serviceName, setServiceName] = useState("");
  const [serviceImgURL, setServiceImgURL] = useState("");
  const [price, setPrice] = useState(0);
  const [serviceArea, setServiceArea] = useState("");
  const [description, setDescription] = useState("");

  // Get user context and navigation
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // Handle form submission
  const handleAddService = async (e) => {
    e.preventDefault();

    // Create service object from form data
    const service = {
      title: serviceName,
      image: serviceImgURL,
      price,
      area: serviceArea,
      description,
      providerEmail: user?.email,
      providerName: user?.displayName,
      providerImg: user?.photoURL
    };

    try {
      // Send POST request to add service
      const response = await axios.post('http://localhost:5000/services', service);

      if (response.data.insertedId) {
        // Show success message
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Service added successfully!",
          text: "You can now manage your service in the dashboard.",
          showConfirmButton: false,
          timer: 2500
        });
      }
      // Navigate to manage services after delay
      setTimeout(() => navigate('/dashboard/manage-services'), 1500);
    } catch (err) {
      console.log(err);
      // Show error message
      Swal.fire({
        icon: "error",
        title: "Failed to add service",
        text: "Something went wrong while adding the service. Please try again.",
        footer: '<a href="#">Need help signing in?</a>'
      });
    }
  };

  return (
    <div className="dashboard-body">
      <Helmet>
        <title>Add Service • GetItDone</title>
      </Helmet>

      <div className="dashboard-main">
        <div className="dashboard-section w-full p-4">
          <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl p-6 md:p-8 mb-8 text-white">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Add New Service</h1>
            <p className="opacity-90">Create and list your professional services for customers to book.</p>
          </div>

          {/* Service submission form */}
          <form onSubmit={handleAddService} className="flex flex-col md:grid md:grid-cols-2 gap-x-10">
            <InputBox
              label="Service Name"
              type="text"
              autoFocus={true}
              setInputValue={setServiceName}
              placeholder="Electrical support"
              required
            />
            <InputBox
              label="Service Image URL"
              type="text"
              setInputValue={setServiceImgURL}
              placeholder="images/profile.jpg"
              required
            />
            <InputBox
              label="Price"
              type="number"
              setInputValue={setPrice}
              min={0}
              placeholder="$15"
              required
            />
            <InputBox
              label="Service Area"
              type="text"
              setInputValue={setServiceArea}
              placeholder="New Hampshire"
              required
            />
            <TextArea
              label="Description"
              rows={4}
              setInputValue={setDescription}
              required
            />
            <div className="my-4 col-span-2">
              <SubmitButton />
            </div>
          </form>
        </div>
      </div>

      {/* Commented out Aside component */}
      {/* <Aside
        topHead="Add section heading"
        topBody="Add section body"
        bottomArray={[{}, {}, {}, {}]}
      /> */}
    </div>
  );
};

export default AddService;