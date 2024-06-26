import { FC } from "react";
import Image from "next/image";

const specialties = [
  {
    image: "/images/salauno/cataratas-icon.png",
    title: "Cataratas",
  },
  {
    image: "/images/salauno/retina-icon.png",
    title: "Retina y Vítreo",
  },
  {
    image: "/images/salauno/cornea-icon.png",
    title: "Córnea",
  },
  {
    image: "/images/salauno/glaucoma-icon.png",
    title: "Glaucoma",
  },
  {
    image: "/images/salauno/queratocomo-icon.png",
    title: "Queratocono",
  },
];

const Specialties: FC = () => {
  return (
    <div className="container mx-auto py-20 xl:mt-16  bg-[#edf1f2] rounded-3xl shadow-md w-10/12 xl:max-w-7xl xl:flex px-6 xl:py-2 xl:items-center">
      <p className="text-center text-[#027D87] mb-4 xl:w-1/3 xl:text-sm">
        Conoce todos los padecimientos que atendemos en nuestras clínicas
        oftalmológicas ya que pueden causar pérdida de la visión
      </p>
      <div className="border-t-2 border-dotted border-[#027D87] mt-4 w-full mx-auto lg:hidden"></div>

      <div className="flex flex-wrap gap-4 justify-around mt-8  xl:flex-nowrap xl:gap-8 xl:w-2/3 xl:mt-0 xl:border-l-2 xl:border-dotted xl:border-[#027D87] xl:ml-4 xl:pl-6">
        {specialties.map((specialty, index) => (
          <div key={index} className="flex flex-col items-center mt-2">
            <Image
              src={specialty.image}
              alt={specialty.title}
              width={96}
              height={96}
              className="rounded-full"
            />
            <h3 className="text-md poppins-regular text-center">
              {specialty.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specialties;
