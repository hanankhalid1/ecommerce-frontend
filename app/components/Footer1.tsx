import React from "react";
import {
  FaCaretRight,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer1: React.FC = () => {
  const makeMoneyWithUs = [
    { text: "Mission & Vision", href: "page-about-us.html" },
    { text: "Our Team", href: "page-about-us.html" },
    { text: "Careers", href: "page-careers.html" },
    { text: "Press & Media", href: "#" },
    { text: "Advertising", href: "#" },
    { text: "Testimonials", href: "#" },
  ];

  const company = [
    { text: "Our Blog", href: "blog-2.html" },
    { text: "Plans & Pricing", href: "#" },
    { text: "Knowledge Base", href: "#" },
    { text: "Cookie Policy", href: "#" },
    { text: "Office Center", href: "#" },
    { text: "News & Events", href: "blog.html" },
  ];

  const myAccount = [
    { text: "FAQs", href: "#" },
    { text: "Editor Help", href: "#" },
    { text: "Community", href: "#" },
    { text: "Live Chatting", href: "#" },
    { text: "Contact Us", href: "page-contact.html" },
    { text: "Support Center", href: "#" },
  ];

  return (
    <div className="footer-1 bg-gray-100 py-10">
      <div className="container px-8">
        <div className="flex flex-wrap -mx-4">
          <div className="lg:w-1/5 w-full px-4 mb-8">
            <h4 className="text-lg font-bold text-[#0E224D] mb-6">Contact</h4>
            <div className="text-[#425A8B] mb-4">
              <strong className="font-semibold text-[#0E224D]">Address:</strong>{" "}
              502 New Design Str, Melbourne, San Francisco, CA 94110, United
              States
            </div>
            <div className="text-[#425A8B] mb-4">
              <strong className="font-semibold text-[#0E224D]">Phone:</strong>{" "}
              (+01) 123-456-789
            </div>
            <div className="text-[#425A8B] mb-4">
              <strong className="font-semibold text-[#0E224D]">E-mail:</strong>{" "}
              contact@ecom-market.com
            </div>
            <div className="text-[#425A8B] mb-4">
              <strong className="font-semibold text-[#0E224D]">Hours:</strong>{" "}
              8:00 - 17:00, Mon - Sat
            </div>
            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#8c9ec5] text-white  transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#8c9ec5] text-white  transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#8c9ec5] text-white  transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#8c9ec5] text-white  transition-colors"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div className="lg:w-1/5 w-full px-4 mb-8">
            <h4 className="text-lg font-bold text-[#0E224D] mb-6">
              Make Money with Us
            </h4>
            <ul className="space-y-2">
              {makeMoneyWithUs.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-[#425A8B] transition-transform duration-300 ease-in-out hover:scale-105"
                >
                  <FaCaretRight className="mr-2" />
                  <a href={item.href} className="no-underline">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-1/5 w-full px-4 mb-8">
            <h4 className="text-lg font-bold text-[#0E224D] mb-6">Company</h4>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-[#425A8B] transition-transform duration-300 ease-in-out hover:scale-105"
                >
                  <FaCaretRight className="mr-2" />
                  <a href={item.href} className="no-underline">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-1/5 w-full px-4 mb-8">
            <h4 className="text-lg font-bold text-[#0E224D] mb-6">
              My Account
            </h4>
            <ul className="space-y-2">
              {myAccount.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-[#425A8B] transition-transform duration-300 ease-in-out hover:scale-105"
                >
                  <FaCaretRight className="mr-2" />
                  <a href={item.href} className="no-underline">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-1/5 w-full px-4 mb-8">
            <h4 className="text-lg font-bold text-[#0E224D] mb-6">
              App &amp; Payment
            </h4>
            <div>
              <p className="text-[#425A8B] mb-4">
                Download our Apps and get extra 15% Discount on your first
                Order…!
              </p>
              <div className="mt-4 flex space-x-4">
                <a className="mr-2" href="#">
                  <img
                    src="assets/imgs/template/appstore.png"
                    alt="Ecom"
                    className="h-10"
                  />
                </a>
                <a href="#">
                  <img
                    src="assets/imgs/template/google-play.png"
                    alt="Ecom"
                    className="h-10"
                  />
                </a>
              </div>
              <p className="text-[#425A8B] mt-6 mb-4">
                Secured Payment Gateways
              </p>
              <img src="assets/imgs/template/payment-method.png" alt="Ecom" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
