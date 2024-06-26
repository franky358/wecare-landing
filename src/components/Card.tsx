import Image from "next/image";

interface CardProps {
  iconSrc: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ iconSrc, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4 w-80">
      <div className="flex-shrink-0 bg-[#02045C] rounded-full p-4">
        <Image
          src={iconSrc}
          alt={title}
          width={32}
          height={32}
          className="w-8 h-8"
        />
      </div>
      <div>
        <h3 className="text-lg poppins-bold text-[#02045C]">{title}</h3>
        <p className="text-sm text-[#02045C] mt-4">{description}</p>
      </div>
    </div>
  );
};

export default Card;
