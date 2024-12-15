import FirstRelevant from "../components/1stRelevent";
import ThirdRelevant from "../components/3rdRelevant";
import Header from "../components/Header";
import PopularServices from "../components/PopularServices";
import HowItWorks from "../components/HowItWorks";

const Home = () => {
  return (
    <div className="bg-[#F0FDFA]">
      <Header />
      <PopularServices />
      <HowItWorks />
      <FirstRelevant />
      <ThirdRelevant />
    </div>
  );
};

export default Home;