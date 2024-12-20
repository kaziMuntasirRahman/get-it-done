import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaArrowRight } from "react-icons/fa";
import { GrNext, GrPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";
const AllServices = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(5);
  const [limit, setLimit] = useState(12)
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await axios.get(`http://localhost:5000/services?page=${currentPage}&limit=${limit}`)
        setServices(response.data.result)
        setTotalPage(response.data.totalPages)
      } catch (err) {
        console.log(err)
        setServices([])
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [currentPage])


  return (
    <div className="section-default flex flex-col items-center">
      <Helmet>
        <title>All Services</title>
      </Helmet>

      {/* Header Section */}
      <div className="w-full bg-gradient-to-r from-teal-500 to-blue-600 py-12 mb-12 rounded-2xl text-white text-center relative">
        <h1 className="text-4xl font-bold mb-4">All Services</h1>
        <p className="text-teal-100">Browse through our collection of professional services</p>
        <div className="absolute top-4 right-6 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
          <span className="text-teal-100">Showing page {currentPage} of {totalPage}</span>
        </div>
      </div>

      <section className="w-[1200px] grid grid-cols-3 gap-4 justify-between">
        {
          loading ?
            Array(limit).fill().map((_, index) =>
              <div key={index} className="flex flex-col gap-3 md:w-full h-[520px] py-6 md:p-8 bg-white md:focus-within:ring ring-teal-300 md:hover:shadow-teal md:focus-within:shadow-teal transition-all relative rounded-2xl md:shadow-sm-teal shadow-md hover:shadow-xl duration-500">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
            ) :
            services.map((service, index) => (
              <article
                key={index}
                className="flex flex-col md:w-full h-full py-6 md:p-8 bg-white md:focus-within:ring ring-teal-300 md:hover:shadow-teal md:focus-within:shadow-teal transition-all relative rounded-2xl md:shadow-sm-teal shadow-md hover:shadow-xl duration-500">
                {/* Service Provider Image */}
                <div className="avatar absolute top-3 right-3 size-10 border-white shadow-lg tooltip" data-tip={service.providerName}>
                  <div className="mask mask-squircle w-full bg-white p-0.5">
                    <div className="mask mask-squircle w-full">
                      <img src={service.providerImage} alt="Avatar" />
                    </div>
                  </div>
                </div>
                <img
                  src={service.image}
                  className="max-w-full md:max-w-none h-64 object-cover md:-mx-6 md:-mt-6 mb-8 rounded-xl"
                  alt=""
                  loading="lazy"
                />

                <span className="flex items-center justify-between w-full text-[11px] font-bold uppercase tracking-wider text-gray-500">
                  <span className="truncate">By <span className="text-violet-700">{service.providerName}</span></span>
                  <div className="flex-1 bg-gray-100 h-0.5 mx-2" />
                  <span className="hidden xs:block">8 min Read</span>
                </span>
                <h1 className="font-heading text-[1.4rem] font-semibold text-[#1E3A8A] my-4">
                  {service.serviceName}
                </h1>

                <p className="text-base line-clamp-3 mb-5">
                  Deploying an app to production may at the first few hours leave a sense of blindness on the state of our application. Questions like—Is every request going through smoothly? Will the servers suddenly run out of resources during some data crunching pro...
                </p>

                <Link
                  to={`/services/${service._id}`}
                  className="text-teal-700 font-semibold mt-auto max-w-fit inline-flex items-center gap-1">
                  <p>View details</p>
                  <FaArrowRight />
                </Link>
              </article>
            ))
        }
      </section>
      {/* pagination */}
      {
        totalPage > 1 &&
            <>
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
              <div className="text-center mb-8 text-gray-600 bg-gray-100 px-6 py-2 rounded-full">
                Current Page: <span className="font-semibold text-teal-600">{currentPage}</span>
              </div>
            </>
      }
    </div>
  );
};

export default AllServices;
