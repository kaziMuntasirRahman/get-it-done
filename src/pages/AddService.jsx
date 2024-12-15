import { useState } from "react";
import { InputBox, SubmitButton } from "../components/AuthPageComponent";

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
    <div className="section-default w-full px-20 lg:px-40">
      <h1 className="section-title text-center">Add Your Service</h1>
      {/* this is form */}
      <form onSubmit={handleAddService} className="flex flex-col md:grid md:grid-cols-2 gap-x-10">
        <InputBox label="Service Name" type="text" autoFocus={true} setInputValue={setServiceName} />
        <InputBox label="Service Image URL" type="text" setInputValue={setServiceImgURL} />
        <InputBox label="Price" type="number" setInputValue={setPrice} min={0} />
        <InputBox
         label="Service Area" type="text" setInputValue={setServiceArea} />
        {/* description */}
        <label className="col-span-2 block text-sm font-medium mb-6">
          Description
          <textarea
            placeholder="Maximum 200 words."
            rows={4}
            className="textarea textarea-bordered w-full mt-1.5 transition appearance-none block p-3 rounded-xl shadow-sm border border-[#D7DFE9] hover:border-violet-200 focus:border-violet-300 bg-violet-50 bg-opacity-0 hover:bg-opacity-50 focus:bg-opacity-50 ring-violet-200 focus:ring-violet-200 focus:ring-[3px] focus:outline-none"
            onChange={(e)=>setDescription(e.target.value)}
          />
        </label>
        <div className="my-4 col-span-2">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
};

export default AddService;