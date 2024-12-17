import { useEffect, useState } from 'react';
import { Helmet } from "react-helmet-async";
import { MdDelete } from "react-icons/md";
import { Aside } from '../components/DashboardComponent';


const ManageServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('/data/services.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])


  return (
    <>
      <div className="dashboard-main">
        <div className="dashboard-section w-full">
          <Helmet>
            <title>Manage Services • GetItDone</title>
          </Helmet>
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
                  services.map((service, index) =>
                    <tr key={index} className="hover:bg-slate-100 transition-all duration-300">
                      <th>{index + 1}</th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src={service.serviceProviderImage}
                                alt={service.serviceProviderName} />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{service.serviceProviderName}</div>
                            <div className="text-sm opacity-50">{service.serviceLocation}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        {service.serviceName}
                        <br />
                        <span className="badge badge-ghost badge-sm">{service.specialInstruction}</span>
                      </td>
                      <td><button className="btn btn-ghost btn-sm">Update</button></td>
                      <th>
                        <MdDelete className="text-red-600 text-2xl cursor-pointer" />
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
      <Aside
        topHead="Add section heading"
        topBody="Add section body"
        // bottomArray={[{}, {}, {}, {}]}
      />
    </>
  );
};

export default ManageServices;