import React from "react";

const LowerBanner: React.FC = () => { 
  return (
    <section className="pt-12 mb-12 mr-8 sm:ml-10 md:ml-10 lg:-ml-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4 lg:mb-0">
            <div className="relative bg-[#DFE7FD] rounded-sm shadow-md h-full">
              <div className="p-6">
                <span className="text-red-600 uppercase font-bold text-xs md:text-sm">
                  FLAT 20% OFF
                </span>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#0E224D] mt-2">
                  Microsoft
                </h3>
                <h4 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#0E224D] mt-2">
                  Xbox
                </h4>
                <h5 className="text-xl md:text-3xl lg:text-4xl font-bold text-[#0E224D] mt-2">
                  Series S
                </h5>
                <span className="text-gray-600 mt-2 block text-sm md:text-base">From $3500.00</span>
                <div className="mt-4">
                  <a
                    className="bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-[#0E224D]"
                    href="#"
                  >
                    Shop Now
                  </a>
                </div>
                <img
                  className="absolute bottom-0 right-0 w-1/2 md:w-3/5 lg:w-2/3 h-1/2 md:h-3/4 lg:h-2/3 rounded-sm"
                  src="/assets/imgs/page/homepage1/xbox.png"
                  alt="Xbox Series S"
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/3 px-2">
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 lg:w-3/5 px-2 mb-4 lg:mb-0">
                <div className="relative bg-[#D1ECFD] rounded-sm shadow-md h-full flex items-center">
                  <img
                    src="/assets/imgs/page/homepage1/controller.png"
                    className="w-1/2 md:w-auto h-auto md:h-3/4 rounded-sm ml-2"
                    alt="Xbox Controller"
                  />
                  <div className="p-4 md:p-6 flex-1">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#0E224D] mb-2">
                      Xbox Core Wireless Controller
                    </h3>
                    <p className="text-gray-600">Aqua Shift Special Edition</p>
                    <div className="mt-4">
                      <a
                        className="bg-blue-500 hover:bg-orange-500 text-white font-bold lg:py-2 lg:px-4 md:p-2 sm:p-2 rounded focus:outline-none focus:shadow-outline"
                        href="#"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-2/5 px-2 mb-4 lg:mb-0">
                <div className="relative bg-[#FFF3EA] rounded-sm shadow-md h-full">
                  <div className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#0E224D] mb-2">
                      Metaverse
                    </h3>
                    <p className="text-gray-600">The Future of Creativity</p>
                    <div className="mt-4">
                      <a className="text-orange-500 hover:underline" href="#">
                        Learn more
                      </a>
                    </div>
                  </div>
                  <img
                    className="absolute bottom-0 right-0 w-1/2 h-1/2 md:w-1/2 md:h-2/3 lg:w-1/2 lg:h-2/3 rounded-bl-md"
                    src="/assets/imgs/page/homepage1/metaverse.png"
                    alt="Metaverse"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-2/5 px-2 mb-4 lg:mb-0 mt-4">
                <div className="relative bg-[#E8FCFF] rounded-sm shadow-md h-full">
                  <div className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#0E224D] mb-2">
                      Electronic
                    </h3>
                    <p className="text-gray-600">
                      Hot devices, Latest trending
                    </p>
                  </div>
                  <img
                    className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-1/2 h-1/2 md:w-1/2 md:h-1/2 lg:w-1/2 lg:h-1/2 rounded-bl-md"
                    src="/assets/imgs/page/homepage1/electronic.png"
                    alt="Electronic devices"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-3/5 px-2 mt-4">
                <div className="relative bg-[#DDD3FA] rounded-sm shadow-md h-full">
                  <div className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#0E224D] mb-5">
                      Super discount for your first purchase
                    </h3>
                    <p className="text-blue-600">
                      Use discount code in checkout page.
                    </p>
                    <div className="mt-6">
                      <a
                        className="bg-orange-500 hover:bg-[#0E224D] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        href="#"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                  <img
                    className="absolute bottom-0 right-0 w-1/3 h-1/2 md:w-1/3 md:h-2/3 lg:w-1/3 lg:h-2/3 rounded-sm"
                    src="/assets/imgs/page/homepage1/phone.png"
                    alt="Smartphones"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LowerBanner;
