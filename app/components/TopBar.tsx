const Topbar = () => {
  return (
    <div className="bg-[#FFFFFF] text-sm text-gray-600 py-2 flex flex-col md:flex-row justify-between items-center px-4 border-b border-gray-200 hidden md:flex">
      <div className="hidden md:flex items-center lg:gap-4 md:gap-3 mb-2 md:mb-0">
        <a href="/about-us" className="hover:text-blue-600">About Us</a>
        <span className="text-gray-400">|</span>
        <a href="/careers" className="hover:text-blue-600">Careers</a>
        <span className="text-gray-400">|</span>
        <a href="/open-a-shop" className="hover:text-blue-600">Open a shop</a>
      </div>
      <div className="text-center md:text-left mb-2 md:mb-0 md:ml-1">
        <span className="hidden md:inline">Free shipping for all orders over </span>
        <span className="font-bold text-green-600"> $75.00</span>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-2">
        <span className="text-center md:text-left">Need help? Call Us: <span className="font-bold text-green-600">+1800 900</span></span>
        <button className="px-2 py-0 border border-gray-300 rounded hover:border-gray-400">
          {/* <Image src="/assets/flags/en.svg" alt="English" width={20} height={20} /> */}
          English
        </button>
        <select className="border border-gray-300 text-gray-600 rounded hover:border-gray-400 cursor-pointer">
          <option>USD</option>
          <option>EUR</option>
          <option>AUD</option>
        </select>
      </div>
    </div>
  );
};

export default Topbar;
