import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "./Button";

// Replace dummy array with real data
const services = [
  {
    id: 1,
    provider: "Kathryn Anne Tan",
    providerImg: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    serviceImg: "images/demo-img/filament-adding-some-style-thumb.jpeg",
    readTime: "8 min Read",
    title: "Monitoring Fly Machine Resource Usage with Laravel Pulse",
    link: "/"
  },
  {
    id: 2,
    provider: "John Doe",
    providerImg: "https://randomuser.me/api/portraits/men/1.jpg",
    serviceImg: "images/demo-img/filament-adding-some-style-thumb.jpeg",
    readTime: "5 min Read",
    title: "Building Responsive Layouts with Tailwind CSS",
    link: "/"
  },
  {
    id: 3,
    provider: "Jane Smith",
    providerImg: "https://randomuser.me/api/portraits/women/2.jpg",
    serviceImg: "images/demo-img/filament-adding-some-style-thumb.jpeg",
    readTime: "10 min Read",
    title: "Deploying React Apps with Vercel",
    link: "/"
  },
  {
    id: 4,
    provider: "Alex Johnson",
    providerImg: "https://randomuser.me/api/portraits/men/3.jpg",
    serviceImg: "images/demo-img/filament-adding-some-style-thumb.jpeg",
    readTime: "7 min Read",
    title: "Mastering Redux Toolkit",
    link: "/"
  },
  {
    id: 5,
    provider: "Emily Clark",
    providerImg: "https://randomuser.me/api/portraits/women/4.jpg",
    serviceImg: "images/demo-img/filament-adding-some-style-thumb.jpeg",
    readTime: "6 min Read",
    title: "Next.js API Routes Explained",
    link: "/"
  },
  {
    id: 6,
    provider: "Michael Lee",
    providerImg: "https://randomuser.me/api/portraits/men/5.jpg",
    serviceImg: "images/demo-img/filament-adding-some-style-thumb.jpeg",
    readTime: "9 min Read",
    title: "Authentication with Firebase in React",
    link: "/"
  }
];

const PopularServices = () => {
  return (
    <div className="section-default">
      <h1 className="section-title text-center">Our Popular Services</h1>
      <section className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3  content-between gap-10">
        {
          services.map((service) =>
            <article
              key={service.id}
              className="flex flex-col md:w-full h-full py-6 md:p-8 bg-white md:focus-within:ring ring-teal-300 md:hover:shadow-teal md:focus-within:shadow-teal transition-all relative rounded-2xl md:shadow-sm-teal shadow-md hover:shadow-xl duration-500">
              {/* Service Provider Image */}
              <div className="avatar absolute top-3 right-3 size-10 border-white shadow-lg tooltip" data-tip={`by ${service.provider}`}>
                <div className="mask mask-squircle w-full bg-white p-0.5">
                  <div className="mask mask-squircle w-full">
                    <img src={service.providerImg} alt="Avatar" />
                  </div>
                </div>
              </div>
              <img
                src={service.serviceImg}
                className="max-w-full md:max-w-none h-64 object-cover md:-mx-6 md:-mt-6 mb-8 rounded-xl"
                alt=""
                loading="lazy"
              />

              <span className="flex items-center justify-between w-full text-[11px] font-bold uppercase tracking-wider text-gray-500">
                <span className="truncate">By {service.provider}</span>
                <div className="flex-1 bg-gray-100 h-0.5 mx-2" />
                <span className="hidden xs:block">{service.readTime}</span>
              </span>
              <h1 className="font-heading text-[1.4rem] font-semibold text-[#1E3A8A] my-4">
                {service.title}
              </h1>

              <Link
                to={service.link}
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
