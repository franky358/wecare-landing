import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const HeroSection: React.FC = () => {
  return (
    <section className="md:py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-between px-4  md:px-0 lg:gap-12">
        <div className="lg:w-7/12  mt-8 lg:mt-0">
          <div className="mb-4">
            <Image
              src="/images/salauno/logo-salauno.png"
              alt="Salauno Logo"
              width={150}
              height={30}
            />
          </div>
          <h2 className="text-xl md:text-4xl text-[#027D87] leading-tight mb-6 mt-12 poppins-bold">
            Transformando la{" "}
            <span className="text-[#00B3AD]">salud visual</span> de todos los
            mexicanos
          </h2>
          <p className="text-md poppins-regular mb-6 text-[#027D87] text-justify">
            Enfocados en tu salud ocular, ofrecemos una amplia gama de
            tratamientos especializados para tus ojos. Por medio de los{" "}
            <strong className="font-semibold">
              convenios con los diferentes aliados
            </strong>{" "}
            preocupados por la salud de sus empleados ofrecemos apoyo para
            mantener una visión clara y saludable!
          </p>
        </div>

        <div className="lg:w-5/12 flex justify-center lg:justify-end mb-8 lg:mb-0 ">
          <Image
            src="/images/salauno/hero-doctors.png"
            alt="Doctor visual"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="container mx-auto flex justify-center xl:justify-start">
        <Link
          href="#"
          className="inline-flex items-center text-sm poppins-semibold px-6 py-4 bg-[#ffd100] text-[#027D87] rounded-lg hover:bg-[#FFB300] transition-colors mt-4 lg:mt-0 w-72 md:w-52 justify-center"
        >
          <FaWhatsapp className="mr-2" color="#027D87" size="1.3em" />
          Agendar consulta
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
