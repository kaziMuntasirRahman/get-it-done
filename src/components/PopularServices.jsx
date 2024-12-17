import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "./Button";

const PopularServices = () => {
  return (
    <div className="section-default">
      <h1 className="section-title text-center">Our Popular Services</h1>
      {/* <section className="grid grid-cols-3 content-between gap-10">
        {
          Array(6).fill().map((_, index) =>
            <div key={index} className="skeleton h-80 w-96">
              <div className="flex w-52 flex-col gap-4">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
            </div>
          )
        }
      </section> */}
      <section className="grid grid-cols-3 content-between gap-10">
        {
          Array(6).fill().map((_, index) =>
            <article
              key={index}
              className="flex flex-col md:w-full h-full py-6 md:p-8 bg-white md:focus-within:ring ring-teal-300 md:hover:shadow-teal md:focus-within:shadow-teal transition-all relative rounded-2xl md:shadow-sm-teal shadow-md hover:shadow-xl duration-500">
              {/* Service Provider Image */}
              <div className="avatar absolute top-3 right-3 size-10 border-white shadow-lg tooltip" data-tip="by Kathryn Anne Tan">
                <div className="mask mask-squircle w-full bg-white p-0.5">
                  <div className="mask mask-squircle w-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Avatar" />
                  </div>
                </div>
              </div>
              <img
                src="images/demo-img/filament-adding-some-style-thumb.jpeg"
                className="max-w-full md:max-w-none h-64 object-cover md:-mx-6 md:-mt-6 mb-8 rounded-xl"
                alt=""
                loading="lazy"
              />

              <span className="flex items-center justify-between w-full text-[11px] font-bold uppercase tracking-wider text-gray-500">
                <span className="truncate">By Kathryn Anne Tan</span>
                <div className="flex-1 bg-gray-100 h-0.5 mx-2" />
                <span className="hidden xs:block">8 min Read</span>
              </span>
              <h1 className="font-heading text-[1.4rem] font-semibold text-[#1E3A8A] my-4">
                Monitoring Fly Machine Resource Usage with Laravel Pulse
              </h1>

              <Link
                to="/"
                className="text-teal-700 font-semibold mt-auto max-w-fit inline-flex items-center gap-1">
                <p>View details</p>
                <FaArrowRight />
              </Link>
            </article>
          )
        }
      </section>
      <Button text="View All Services" address='/services' />
    </div>
  );
};

export default PopularServices;

