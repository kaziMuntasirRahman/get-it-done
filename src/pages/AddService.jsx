import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { InputBox, SubmitButton, TextArea } from "../components/AuthPageComponent";
import { Aside } from "../components/DashboardComponent";

const AddService = () => {
  const [serviceName, setServiceName] = useState("")
  const [serviceImgURL, setServiceImgURL] = useState("")
  const [price, setPrice] = useState(0)
  const [serviceArea, setServiceArea] = useState("")
  const [description, setDescription] = useState("")

  const handleAddService = (e) => {
    e.preventDefault();
    console.log(serviceName, serviceImgURL, price, serviceArea, description);
    // console.log(serviceName, serviceImgURL, price, serviceArea, description, providername, providerimg, provideremail);
  }


  return (
    <div div className="dashboard-body">
      <Helmet>
        <title>Add Service • GetItDone</title>
      </Helmet>
      <div className="dashboard-main">
        <div className="dashboard-section w-full">
          <h1 className="dashboard-title">Add Your Service</h1>
          {/* form section */}
          <form onSubmit={handleAddService} className="flex flex-col md:grid md:grid-cols-2 gap-x-10">
            <InputBox label="Service Name" type="text" autoFocus={true} setInputValue={setServiceName} placeholder="Electrical support" />
            <InputBox label="Service Image URL" type="text" setInputValue={setServiceImgURL} placeholder="images/profile.jpg" />
            <InputBox label="Price" type="number" setInputValue={setPrice} min={0} placeholder="$15" />
            <InputBox label="Service Area" type="text" setInputValue={setServiceArea} placeholder="New Hampshire" />
            {/* description */}
            <TextArea label="Description" rows={4} setInputValue={setDescription} />
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