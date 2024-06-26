import Image from "next/image";

import Card from "../Card";

const Services: React.FC = () => {
  return (
    <section className="flex flex-col w-screen items-center content-center z-20 mb-[2rem] relative">
      {/* <Image
        src="/images/home/circle-green.png"
        width={598}
        height={200}
        alt="gradient"
        className="hidden md:block absolute top-[50rem] left-[-15rem] z-1   md:h-auto border-2 border-red-500 opacity-30"
      /> */}
      <div className="w-[90%]  flex flex-col  space-between content-between items-center  my-[2rem]">
        <h2 className="poppins-bold text-[35px] mb-[3rem]">
          La plataforma que necesitas
        </h2>
        <p className="poppins-regular text-[18px] mb-[2rem]">
          Nuestras soluciones ayudan a potencilizar y convertir la excelencia
          clínica en mejores resultados para nuestros socios.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          <Card
            iconSrc="/images/home/asistente-inteligente.png"
            title="Asistente Inteligente"
            description="Asesora a tus pacientes sobre sus síntomas a través de un cuestionario en menos de 3 minutos."
          />
          <Card
            iconSrc="/images/home/agenda.png"
            title="Agenda Homologada"
            description="Sincronizada con tu correo de google calendar, evita duplicar eventos y validar disponibilidad."
          />
          <Card
            iconSrc="/images/home/atencion-medica.png"
            title="Atención médica en línea"
            description="Conecta con pacientes a traves de telemedicina y mantiene la información protegida."
          />
          <Card
            iconSrc="/images/home/recetas-digitales.png"
            title="Recetas digitales"
            description="Crea recetas digitales y homologa tus sistemas para médicos y pacientes de manera más eficiente."
          />
          <Card
            iconSrc="/images/home/modulo-virtual.png"
            title="Modulo de atención virtual"
            description="Ofrece un módulo con equipamiento médico para tus colaboradores y conecta con médicos por medio de telemedicina."
          />
          <Card
            iconSrc="/images/home/financiamiento.png"
            title="Financiamiento"
            description="Ofrece financiamientos a tus pacientes de hasta $100,000 pesos para estudios, consultas y procedimientos."
          />
        </div>
        <button className="items-center  poppins-regular font-bold px-12 py-4 bg-[#02045C] text-white rounded-lg mt-16 w-72 md:w-auto text-md md:text-sm">
          Conoce más
        </button>
      </div>
    </section>
  );
};

export default Services;
