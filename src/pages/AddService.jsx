import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { InputBox, SubmitButton, TextArea } from "../components/AuthPageComponent";
import { Aside } from "../components/DashboardComponent";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddService = () => {
  const [serviceName, setServiceName] = useState("")
  const [serviceImgURL, setServiceImgURL] = useState("")
  const [price, setPrice] = useState(0)
  const [serviceArea, setServiceArea] = useState("")
  const [description, setDescription] = useState("")
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleAddService = async (e) => {
    e.preventDefault();
    const service = {
      title: serviceName,
      image: serviceImgURL,
      price,
      area: serviceArea,
      description,
      providerEmail: user?.email,
      providerName: user?.displayName,
      providerImg: user?.photoURL
    }
    console.log(service);
    try {
      const response = await axios.post('http://localhost:5000/services', service)
      if (response.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Service added successfully!",
          text: "You can now manage your service in the dashboard.",
          showConfirmButton: false,
          timer: 2500
        });
      }
      setTimeout(() => navigate('/dashboard/manage-services'), 1500)
    } catch (err) {
      console.log(err);
      Swal.fire({
        icon: "error",
        title: "Failed to add service",
        text: "Something went wrong while adding the service. Please try again.",
        footer: '<a href="#">Need help signing in?</a>'
      });
    }

  }

  return (
    <div div className="dashboard-body">
      <Helmet>
        <title>Add Service • GetItDone</title>
      </Helmet>
      <div className="dashboard-main">
        <div className="dashboard-section w-full p-4">
          <h1 className="dashboard-title">Add Your Service</h1>
          {/* form section */}
          <form onSubmit={handleAddService} className="flex flex-col md:grid md:grid-cols-2 gap-x-10">
            <InputBox label="Service Name" type="text" autoFocus={true} setInputValue={setServiceName} placeholder="Electrical support" required />
            <InputBox label="Service Image URL" type="text" setInputValue={setServiceImgURL} placeholder="images/profile.jpg" required />
            <InputBox label="Price" type="number" setInputValue={setPrice} min={0} placeholder="$15" required />
            <InputBox label="Service Area" type="text" setInputValue={setServiceArea} placeholder="New Hampshire" required />
            {/* description */}
            <TextArea label="Description" rows={4} setInputValue={setDescription} required />
            <div className="my-4 col-span-2">
              <SubmitButton />
            </div>
          </form>
        </div>
      </div>
      <Aside
        topHead="Add section heading"
        topBody="Add section body"
      // bottomArray={[{}, {}, {}, {}]}
      />
    </div>
  );
};

export default AddService;