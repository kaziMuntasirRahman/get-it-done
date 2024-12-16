import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaArrowRight } from "react-icons/fa";
import { GrNext, GrPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";
const AllServices = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(10);
  const [limit, setLimit] = useState(6)
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/services?page=${currentPage}&limit=${limit}`)
      .then(data => {
        setServices(data.data.result)
        setTotalPage(data.data.totalPages)
      })

  }, [currentPage])
  console.log(services);
  console.log(totalPage);


  return (
    <div className="section-default flex flex-col items-center">
      <Helmet>
        <title>All Services</title>
      </Helmet>
      <h1 className="section-title">
        All Services
      </h1>
      <section className="w-[1200px] grid grid-cols-3 gap-4 justify-between">
        {
          services.map((service, index) => (
            // <div key={index} className="flex w-52 flex-col gap-4 border border-lime-800">
            //   <div className="skeleton h-32 w-full"></div>
            //   <div className="skeleton h-4 w-28"></div>
            //   <div className="skeleton h-4 w-full"></div>
            //   <div className="skeleton h-4 w-full"></div>
            // </div>
            <article
              key={index}
              className="flex flex-col md:w-full h-full py-6 md:p-8 bg-white md:focus-within:ring ring-teal-300 md:hover:shadow-teal md:focus-within:shadow-teal transition-all relative rounded-2xl md:shadow-sm-teal shadow-md hover:shadow-xl duration-500">
              {/* Service Provider Image */}
              <div className="avatar absolute top-3 right-3 size-10 border-white shadow-lg tooltip" data-tip={service.providerName}>
                <div className="mask mask-squircle w-full bg-white p-0.5">
                  <div className="mask mask-squircle w-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Avatar" />
                  </div>
                </div>
              </div>
              <img
                src={service.serviceImage}
                className="max-w-full md:max-w-none h-64 object-cover md:-mx-6 md:-mt-6 mb-8 rounded-xl"
                alt=""
                loading="lazy"
              />

              <span className="flex items-center justify-between w-full text-[11px] font-bold uppercase tracking-wider text-gray-500">
                <span className="truncate">By <span className="text-violet-700">{service.providerName}</span></span>
                <div className="flex-1 bg-gray-100 h-0.5 mx-2" />
                <span className="hidden xs:block">8 min Read</span>
              </span>
              <h1 className="font-heading text-[1.4rem] font-semibold text-navy-900 my-4">
                {service.serviceName}
              </h1>

              <p className="text-base line-clamp-3 mb-5">
                Deploying an app to production may at the first few hours leave a sense of blindness on the state of our application. Questions like—Is every request going through smoothly? Will the servers suddenly run out of resources during some data crunching pro...
              </p>

              <Link
                to="/"
                className="text-teal-700 font-semibold mt-auto max-w-fit inline-flex items-center gap-1">
                <p>View details</p>
                <FaArrowRight />
              </Link>
            </article>
          ))
        }
      </section>
      {/* pagination */}
      <div className="join my-10">
        <button
          className={`${currentPage === 1 && 'btn-disabled'} join-item btn`}
          onClick={() => setCurrentPage(currentPage - 1)}>
          <GrPrevious />
        </button>
        {
          Array(totalPage).fill().map((_, index) =>
            <input
              key={index}
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label={index + 1}
              checked={currentPage === index + 1}
              onChange={() => setCurrentPage(index + 1)}
            />
          )
        }
        <button
          className={`${currentPage === totalPage && 'btn-disabled'} join-item btn`}
          onClick={() => setCurrentPage(currentPage + 1)}>
          <GrNext />
        </button>
      </div>
      page no: {currentPage}
    </div>
  );
};

export default AllServices;
