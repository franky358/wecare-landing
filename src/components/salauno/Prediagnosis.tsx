import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMessageCircle } from "react-icons/fi";

const PreDiagnosis: FC = () => {
  return (
    <div className="container mx-auto mt-16 w-10/12  flex flex-col lg:flex-row items-center lg:items-start xl:mt-32">
      <div className="lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0 lg:order-1">
        <h2 className="text-2xl poppins-bold text-[#027D87] mb-6">
          Queremos ayudarte a recuperar la confianza
        </h2>
        <div className="w-full h-[300px] md:h-[400px] relative lg:hidden">
          <Image
            src="/images/salauno/family.png"
            alt="Family"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        </div>
        <ul className="mb-6 mt-12">
          <li className="flex items-center text-[#027D87] poppins-semibold mb-4 lg:text-sm">
            <span className="bg-yellow-400 p-2 text-xs flex items-center justify-center mr-4">
              ✔️
            </span>
            Red más grande de clínicas oftalmológicas
          </li>
          <li className="flex items-center text-[#027D87] poppins-semibold mb-4 lg:text-sm">
            <span className="bg-yellow-400  p-2 text-xs flex items-center justify-center mr-4">
              ✔️
            </span>
            Médicos certificados con alta especialidad*
          </li>
          <li className="flex items-center text-[#027D87] poppins-semibold mb-4 lg:text-sm">
            <span className="bg-yellow-400  p-2 text-xs flex items-center justify-center mr-4">
              ✔️
            </span>
            Tecnología de última generación
          </li>
          <li className="flex items-center text-[#027D87] poppins-semibold mb-4 lg:text-sm">
            <span className="bg-yellow-400 p-2 text-xs flex items-center justify-center mr-4">
              ✔️
            </span>
            Servicio integral (diagnóstico, estudios y tratamiento)
          </li>
        </ul>
        <Link
          href="#"
          className="inline-flex items-center text-sm poppins-semibold px-6 py-4 bg-[#ffd100] text-[#027D87] rounded-lg hover:bg-[#FFB300] transition-colors mt-4 lg:mt-0 w-72  md:w-60 justify-center"
        >
          <FiMessageCircle className="mr-2" color="#027D87" size="1.3em" />
          Iniciar prediagnóstico
        </Link>
      </div>
      <div className="hidden lg:flex lg:w-1/2 justify-end lg:mr-12">
        <Image
          src="/images/salauno/family.png"
          alt="Family"
          width={600}
          height={400}
          className="rounded-3xl"
        />
      </div>
    </div>
  );
};

export default PreDiagnosis;
