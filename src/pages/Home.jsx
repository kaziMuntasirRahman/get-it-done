import HomeHero from "../components/HomeHero";
import ServiceHighlights from "../components/ServiceHighlights";
import Header from "../components/Header";
import PopularServices from "../components/PopularServices";
import HowItWorks from "../components/HowItWorks";

const Home = () => {
  return (
    <div className="bg-[#F0FDFA]">
      <Header />
      <PopularServices />
      <HowItWorks />
      <HomeHero />
      <ServiceHighlights />
    </div>
  );
};

export default Home;