import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoCalendarOutline } from "react-icons/io5";

const ScheduleAppointment: FC = () => {
  return (
    <div className="container mx-auto py-12 px-6 rounded-3xl  w-10/12 flex flex-col lg:flex-row items-center">
      <div className="flex flex-col md:flex-row  md:gap-8 xl:gap-16 items-center md:items-start xl:justify-center  text-center lg:text-left w-full">
        <div className="md:order-1 xl:w-1/3">
          <h2 className="text-2xl poppins-bold text-[#027D87] mb-2 text-left">
            Agenda tu consulta desde tu celular
          </h2>
          <p className="text-[#027D87] mb-2 text-sm text-justify mt-6">
            Escanea el código QR e ingresa directamente al proceso de Agenda de
            tu consulta, valoración de cirugía LASIK o examen de la vista.
          </p>
          <div className="flex justify-start xl:mt-8">
            <Link
              href="#"
              className="hidden  md:inline-flex items-center text-sm poppins-semibold px-6 py-4 bg-[#ffd100] text-[#027D87] rounded-lg hover:bg-[#FFB300] transition-colors mt-4 lg:mt-0 w-72  md:w-60 justify-center"
            >
              <IoCalendarOutline
                className="mr-2"
                color="#027D87"
                size="1.3em"
              />
              Agendar consulta
            </Link>
          </div>
        </div>
        <div className="flex justify-between mb-8 lg:mb-0 w-full items-center gap-4 md:justify-start xl:w-auto">
          <div>
            <Image
              src="/images/salauno/qr.png"
              alt="QR Code"
              width={200}
              height={200}
            />
          </div>
          <div>
            <Image
              src="/images/salauno/salauno-logo2.png"
              alt="Salauno Logo"
              width={100}
              height={100}
            />
          </div>
        </div>
        <Link
          href="#"
          className="inline-flex items-center text-sm poppins-semibold px-6 py-4 bg-[#ffd100] text-[#027D87] rounded-lg hover:bg-[#FFB300] transition-colors mt-4 lg:mt-0 w-72  md:w-60 justify-center md:hidden"
        >
          <IoCalendarOutline className="mr-2" color="#027D87" size="1.3em" />
          Agendar consulta
        </Link>
      </div>
    </div>
  );
};

export default ScheduleAppointment;
