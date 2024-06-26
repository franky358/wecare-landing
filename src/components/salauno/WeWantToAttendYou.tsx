import { FC } from "react";
import Image from "next/image";

const WeWantToAttendYou: FC = () => {
  return (
    <div className="container mx-auto py-12 px-6">
      <h2 className="text-3xl poppins-bold text-center text-[#027D87] mb-2 xl:mt-16">
        Queremos atenderte
      </h2>
      <p className="poppins-regular text-[#027D87] mb-8 mt-8 text-left md:text-center ">
        Identifica tus sintomas desde dispositivo móvil y en cualquier momento
      </p>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="bg-white rounded-3xl shadow-md p-6 flex items-start">
          <div className="flex-shrink-0 mr-4 bg-[#f2f8f9] p-4 rounded-full ">
            <Image
              src="/images/salauno/microscopio-icon.png"
              alt="General Consultation"
              width={64}
              height={64}
            />
          </div>
          <div>
            <h3 className="text-md font-semibold text-[#027D87] mb-2">
              ¿Sabes qué es una consulta oftalmológica general?
            </h3>
            <p className="text-[#027D87] text-sm">
              La consulta oftalmológica general es una exploración completa de
              tus ojos que ayuda a detectar y diagnosticar enfermadades
              oculares.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-3xl shadow-md p-6 flex items-start">
          <div className="flex-shrink-0 mr-4 bg-[#f2f8f9] p-4 rounded-full ">
            <Image
              src="/images/salauno/microscopio-icon.png"
              alt="General Ophthalmological Consultation"
              width={64}
              height={64}
            />
          </div>
          <div>
            <h3 className="text-md font-semibold text-[#027D87] mb-2">
              Consulta oftalmólogica general
            </h3>
            <p className="text-[#027D87] text-sm mb-2">
              Es importante que acudas a una consulta oftalmólogica general al
              menos una vez al año incluso si no tienes sintomas o problemas de
              tu visión.
            </p>
            <p className="text-[#027D87] text-sm">
              Fuente: Weinreb R., Aung T., Medeiros F. (2014).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeWantToAttendYou;
