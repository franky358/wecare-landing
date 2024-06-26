import Image from "next/image";

const TrustedBy: React.FC = () => {
  return (
    <div className="text-center py-12">
      <h3 className="text-lg font-semibold text-[#02045C] mb-4">
        Confían en nosotros
      </h3>
      <div className="overflow-hidden w-full md:w-[80%] mx-auto">
        <div className="flex justify-center items-center space-x-8 md:space-x-8 animate-scroll md:animate-none">
          <div className="flex-shrink-0 px-4">
            <Image
              src="/images/home/examedi-logo.png"
              alt="Examedi Logo"
              width={100}
              height={50}
              className="object-contain"
            />
          </div>
          <div className="flex-shrink-0 px-4">
            <Image
              src="/images/home/life-plus-logo.png"
              alt="LifePlus Logo"
              width={100}
              height={50}
              className="object-contain"
            />
          </div>
          <div className="flex-shrink-0 px-4">
            <Image
              src="/images/home/examedi-logo.png"
              alt="Examedi Logo"
              width={100}
              height={50}
              className="object-contain"
            />
          </div>
          <div className="flex-shrink-0 px-4">
            <Image
              src="/images/home/life-plus-logo.png"
              alt="LifePlus Logo"
              width={100}
              height={50}
              className="object-contain"
            />
          </div>
          <div className="flex-shrink-0 px-4">
            <Image
              src="/images/home/examedi-logo.png"
              alt="Examedi Logo"
              width={100}
              height={50}
              className="object-contain"
            />
          </div>
          <div className="flex-shrink-0 px-4">
            <Image
              src="/images/home/life-plus-logo.png"
              alt="LifePlus Logo"
              width={100}
              height={50}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
