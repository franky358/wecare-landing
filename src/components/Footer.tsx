const Footer: React.FC = () => {
  return (
    <footer className="relative py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="font-semibold text-[#02045C] mb-4">Legal</h4>
            <ul className="space-y-2 text-center sm:text-left">
              <li>
                <a href="#" className="text-gray-700 hover:text-[#02045C]">
                  Aviso de privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-[#02045C]">
                  Feature
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-[#02045C]">
                  Works
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-[#02045C]">
                  Career
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="font-semibold text-[#02045C] mb-4">Help</h4>
            <ul className="space-y-2 text-center sm:text-left">
              <li>
                <a href="#" className="text-gray-700 hover:text-[#02045C]">
                  Customer support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-[#02045C]">
                  Delivery details
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-[#02045C]">
                  Terms & condition
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-[#02045C]">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="font-semibold text-[#02045C] mb-4">Resources</h4>
            <ul className="space-y-2 text-center sm:text-left">
              <li>
                <a href="#" className="text-gray-700 hover:text-[#02045C]">
                  Free eBooks
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-[#02045C]">
                  Development tutorial
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-[#02045C]">
                  How to - blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-[#02045C]">
                  Youtube playlist
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="font-semibold text-[#02045C] mb-4">Links</h4>
            <ul className="space-y-2 text-center sm:text-left">
              <li>
                <a href="#" className="text-gray-700 hover:text-[#02045C]">
                  Free eBooks
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-[#02045C]">
                  Development tutorial
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-[#02045C]">
                  How to - blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-[#02045C]">
                  Youtube playlist
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
