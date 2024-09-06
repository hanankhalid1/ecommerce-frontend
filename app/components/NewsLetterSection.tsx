import React from 'react';

const NewsletterSection: React.FC = () => {
  return (
    <section className="section-box box-newsletter bg-[#0E224D] py-20 lg:px-4 md:px-0 sm:px-0 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full lg:w-6/12 md:w-7/12 sm:w-full mb-6 lg:mb-0">
            <h3 className="text-white text-3xl font-semibold">
              Subscribe &amp; Get <span className="text-[#FD9636]">10%</span> Discount
            </h3>
            <p className="text-lg text-white mt-2">
              Get E-mail updates about our latest shop and{' '}
              <span className="font-bold">special offers.</span>
            </p>
          </div>
          <div className="w-full lg:w-4/12 md:w-5/12 sm:w-full relative z-20 lg:mr-36">
            <div className="box-form-newsletter mt-0 lg:mt-0 mb-8 flex items-center">
              <form className="form-newsletter flex w-full relative">
                <input
                  className="input-newsletter w-full bg-white rounded-[4px] border-none h-[50px] py-[5px] px-[20px] text-gray-700 placeholder-[#8c9ec5] text-xs focus:outline-none"
                  type="email"
                  placeholder="Your email Address"
                />
                <button className="btn btn-brand-2 duration-1000 absolute top-0 right-0 h-[50px] bg-[#FD9636] text-white py-3 px-4 rounded-tr-[3px] rounded-br-[3px] rounded-tl-none rounded-bl-none hover:bg-[#425A8B]">
                  Sign Up
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/imgs/template/bg-newsletter.svg"
        alt="Products"
        className="absolute bottom-0 right-0 w-[250px] md:w-[350px] lg:w-[450px] lg:bottom-[-20px] lg:right-[-20px] z-0 pointer-events-none lg:mr-5"
      />
    </section>
  );
};

export default NewsletterSection;
