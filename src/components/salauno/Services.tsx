import { FC } from "react";
import Image from "next/image";

const services = [
  {
    icon: "/images/salauno/oftal-icon.png",
    title: "Consulta oftalmológica general",
    description:
      "Exploración completa de tus ojos con oftalmólogo y optometrista para diagnosticar padecimientos visuales.",
  },
  {
    icon: "/images/salauno/especialidad-icon.png",
    title: "Consulta especialidad",
    description:
      "Si ya tienes un diagnóstico previo de retina o glaucoma esta consulta es ideal para ti.",
  },
  {
    icon: "/images/salauno/lasik-icon.png",
    title: "Consulta cirugía lasik",
    description:
      "La cirugía LASIK corrige miopía, astigmatismo e hipermetropía para ayudarte a dejar de usar lentes.",
  },
  {
    icon: "/images/salauno/vista-icon.png",
    title: "Examen de la vista",
    description:
      "Agenda con tu optometrista y conoce el tipo de lentes que se adecuan a ti y tus hij@s.",
  },
];

const Services: FC = () => {
  return (
    <div className="container mx-auto py-20 xl:py-8">
      <h2 className="text-3xl poppins-bold text-[#027D87] text-center mb-12">
        Nuestros Servicios
      </h2>
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4 px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-3xl shadow-md p-6 text-center"
          >
            <div className="bg-[#f2f8f9] p-4 rounded-full mb-4">
              <Image
                src={service.icon}
                alt={service.title}
                width={48}
                height={48}
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-md poppins-semibold mb-2 text-[#027D87]">
              {service.title}
            </h3>
            <p className="text-[#027D87] poppins-regular text-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
