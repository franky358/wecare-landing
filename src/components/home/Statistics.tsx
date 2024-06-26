import Image from "next/image";

const Statistics: React.FC = () => {
  return (
    <section className="flex flex-col w-screen relative items-center content-center z-20 mb-[2rem]">
      <Image
        src="/images/home/circle-green.png"
        width={598}
        height={840}
        alt="gradient"
        className="hidden md:block absolute top-[-40rem] z-1 left-2  h-[90vh] md:h-auto opacity-30"
      />
      <Image
        src="/images/home/circle-green.png"
        width={598}
        height={840}
        alt="gradient"
        className="hidden md:block absolute top-[-10rem] right-0 z-1 h-[90vh] rotate-180 md:h-auto  opacity-30"
      />
      <div className="w-[90%] z-10  rounded-2xl md:rounded-lg shadow-xl flex flex-col md:flex-row space-between content-between items-center py-[2rem] bg-[#edf1f1] md:bg-[#EEF1F2]">
        <div className="flex flex-1 flex-col justify-center content-center items-center my-[2rem] border-r border-white">
          <h2 className="poppins-bold text-[60px] md:text-[70px]  w-[60%] text-center break-normal ">
            90%
          </h2>
          <p className="poppins-regular w-[60%] text-[20px] mt-[2rem] text-center ">
            de los pacientes que llegan son del nicho correcto.
          </p>
        </div>
        <div className="flex flex-1  flex-col justify-center content-center items-center my-[2rem] border-r border-white">
          <h2 className="poppins-bold text-[60px] md:text-[70px]  w-[60%] text-center break-normal ">
            100%
          </h2>
          <p className="poppins-regular w-[60%] text-[20px] mt-[2rem] text-center ">
            de los pacientes que procesa nuestro sistema transaccionan.
          </p>
        </div>
        <div className="flex flex-1 flex-col justify-center content-center items-center my-[2rem]">
          <h2 className="poppins-bold text-[60px] md:text-[70px]  w-[60%] text-center break-normal ">
            40%
          </h2>
          <p className="poppins-regular w-[60%] text-[20px] mt-[2rem] text-center ">
            de reducción en el costo de adquisición de clientes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
