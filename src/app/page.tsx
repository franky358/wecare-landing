import Header from "../components/Header";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Statistics from "../components/home/Statistics";
import ConnectServices from "../components/home/ConnectServices";
import TrustedBy from "@/components/home/TrustedBy";
import Footer from "../components/Footer";
import Image from "next/image";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="relative bg-gradient-to-r from-violet-200 to-violet-300 md:bg-none">
        <Image
          src="/images/home/circles-bg.png"
          width={801}
          height={696}
          alt="gradient"
          className=" hidden md:block absolute top-1 right-3 z-10 h-[90vh] md:h-auto"
        />
        <Image
          src="/images/home/gradient-bg.png"
          width={1440}
          height={1232}
          alt="gradient"
          className="hidden md:block absolute -top-14  right-[-0.25rem] w-[90%] h-[90rem] md:h-auto"
        />

        <Header isHome={true} />
        <Hero />
      </div>
      <Statistics />
      <ConnectServices />
      <Services />
      <TrustedBy />
      <Footer />
    </>
  );
};

export default HomePage;
