import Image from "next/image";

const ConnectServices: React.FC = () => {
  return (
    <section className="flex flex-col relative w-screen items-center content-center z-20 mb-[2rem]">
      <Image
        src="/images/home/circle-green.png"
        width={598}
        height={840}
        alt="gradient"
        className="hidden md:block absolute top-[35rem] right-0 z-1 h-[90vh] rotate-180 md:h-auto opacity-30"
      />
      <div className="w-[90%] flex flex-col md:flex-row md:space-x-4 content-between items-center my-[2rem]">
        <div className="flex-1 order-2 md:order-1">
          <h2 className="poppins-bold text-[28px] md:text-[35px] mb-[2rem]">
            Conecta tus servicios de salud con pacientes.
          </h2>
          <p className="poppins-regular text-[16px] md:text-[18px] mb-[2rem]">
            Transforma la forma de <strong>conectar</strong> y{" "}
            <strong>segmentar</strong> pacientes con servicios de salud según
            sus necesidades, <strong>simplificando</strong> el proceso y
            asegurando una atención
            <strong> personalizada</strong>.
          </p>
          <Image
            src="/images/home/home-doctor.png"
            width={598}
            height={840}
            alt="gradient"
            className="flex-1 mb-[2rem] md:mb-0 md:hidden mt-12"
          />
          <div className="flex justify-center md:justify-normal mt-12">
            <button className="inline-flex items-center text-sm poppins-semibold font-bold px-4 py-4 bg-[#DBF3BF] text-[#02045C] rounded-lg mb-[2rem] md:mb-0">
              Descarga más información
            </button>
          </div>
        </div>
        <Image
          src="/images/home/home-doctor.png"
          width={598}
          height={840}
          alt="gradient"
          className="flex-1 order-1 md:order-2 hidden md:block"
        />
      </div>
    </section>
  );
};

export default ConnectServices;
