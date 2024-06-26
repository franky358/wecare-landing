import Image from "next/image";
import { IoCalendar } from "react-icons/io5";
import heroImage from "../../../public/images/home/home-hero.png";

const Hero: React.FC = () => {
  return (
    <section className="mt-8 md:mt-16 relative flex flex-col items-center content-center pb-16">
      <h2 className="poppins-bold text-[30px] md:text-[50px] w-[80%] md:w-[60%]  max-w-5xl text-center break-normal ">
        Ecosistema para atención médica con
        <span className="text-[#DBF3BF]"> inteligencia artificial</span>
      </h2>
      <p className="poppins-regular w-[80%] md:w-[60%] text-[18px] mt-[2rem] text-center">
        Mejora la experiencia de los pacientes diseñando una atención
        personalizada y seguimiento inmediato mediante herramientas digitales
        inteligentes, ofreciendo una solución transparente y eficiente enfocada
        en sus necesidades de atención médica.
      </p>

      <div className="mt-16">
        <Image
          src={heroImage}
          alt="Medical Assistance"
          width={800}
          height={400}
          className="bg-transparent relative z-30 mx-auto"
        />
      </div>
      <button className="inline-flex items-center text-sm poppins-semibold px-4 py-4 bg-[#02045C] text-white rounded-lg mt-16 z-40">
        <IoCalendar className="mr-2" color="#fff" size="1em" />
        Agenda una Demo
      </button>
    </section>
  );
};

export default Hero;
