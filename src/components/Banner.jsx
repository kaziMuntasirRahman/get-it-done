import Button from "./Button";

const Banner = () => {
  return (
    <div className="relative min-h-[800px] flex justify-center mb-14">
      {/* <div className="skeleton h-96 w-full"></div> */}
      <img src="/images/banner-cloud-city.png" className="w-screen h-auto absolute left-0 bottom-0" />
      <div className="relative flex flex-col items-start sm:items-center sm:text-center">
        <h1 className="font-heading text-3.5xl xs:text-4.5xl sm:text-5xl md:text-5.5xl lg:text-6xl xl:text-6.5xl !tracking-[-.045em] relative text-navy mb-4 mt-24">
          A Platform for Reliable Home &nbsp;
          <em className="relative inline-block z-0">
            Services
            <svg viewBox="0 0 1213 73" aria-hidden="true" preserveAspectRatio="none" height="12" className="absolute -bottom-0.5 sm:bottom-0 md:bottom-[3px] left-0 w-full h-3 text-purple-400 -z-1">
              <g buffered-rendering="static">
                <path fill="url(#underline-gradient)" d="M1213.19 35.377c2.37-13.011-22.95-10.753-31.04-14.087C1086.89 5.705 911.742 2.887 815.218 2.809c-78.003.231-155.966-1.833-233.961.481-57.545.429-114.885 6.164-172.419 7.383-121.164 5.39-242.94 10.751-362.507 32.199-12.356 3.286-25.614 4.255-37.332 9.401-29.507 22.983 27.103 20.15 39.468 17.234 357.956-47.703 362.767-46.261 636.452-50.97 121.033-2.508 241.892 6.658 428.341 19.243 4.74.404 8.98-4.032 8-8.788a942.105 942.105 0 0154.69 6.378c9.44 1.843 18.92 3.583 28.29 5.729 4.01.839 8.02-1.718 8.95-5.712v-.01z"></path>
              </g>
              <defs>
                <linearGradient id="underline-gradient" gradientTransform="rotate(110)">
                  <stop offset="5%" stopColor="#CA7FF8"></stop>
                  <stop offset="95%" stopColor="#795BE9"></stop>
                </linearGradient>
              </defs>
            </svg>
          </em>
        </h1>
        <p className="text-base lg:text-lg tracking-prose mb-4 max-w-lg lg:max-w-2xl mx-auto">
          <strong className="text-navy">Over 3 million services&nbsp;</strong>
          completed on GetItDone, connecting homeowners with trusted professionals for plumbing, electrical work, and handyman services. GetItDone makes booking easy, with seamless communication, instant updates, and reliable service for every job.
        </p>
        <Button text="Dashboard" address="/" />
      </div>
    </div>
  );
};

export default Banner;