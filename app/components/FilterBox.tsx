import React from 'react'
import { FaSliders } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const brands = [
  { name: "Apple", checked: true },
  { name: "Samsung", checked: false },
  { name: "Baseus", checked: false },
  { name: "Remax", checked: false },
  { name: "Handtown", checked: false },
  { name: "Elecom", checked: false },
  { name: "Razer", checked: false },
  { name: "Auto Focus", checked: false },
  { name: "Nillkin", checked: false },
  { name: "Logitech", checked: false },
  { name: "ChromeBook", checked: false }
];

const specialOffers = [
  { name: "On sale", checked: false },
  { name: "FREE shipping", checked: true },
  { name: "Big deals", checked: false },
  { name: "Shop Mall", checked: false }
];

const readyShip = [
  { name: "1 business day", checked: false },
  { name: "1–3 business days", checked: true },
  { name: "in 1 week", checked: false },
  { name: "Shipping now", checked: false }
];

const orderingOptions = [
  { name: "Accepts gift cards", checked: false },
  { name: "Customizable", checked: false },
  { name: "Can be gift-wrapped", checked: true },
  { name: "Installment 0%", checked: false }
];

const ratings = [
  { stars: 5, label: "(5 stars)" },
  { stars: 4, label: "(4 stars)" },
  { stars: 3, label: "(3 stars)" },
  { stars: 2, label: "(2 stars)" },
  { stars: 1, label: "(1 star)" }
];

const materials = [
  { name: "Nylon", quantity: 8, checked: false },
  { name: "Tempered Glass", quantity: 5, checked: false },
  { name: "Liquid Silicone Rubber", quantity: 5, checked: true },
  { name: "Aluminium Alloy", quantity: 3, checked: false }
];

const productTags = [
  "Games",
  "Electronics",
  "Video",
  "Cellphone",
  "Indoor",
  "VGA Card",
  "USB",
  "Lightning",
  "Camera"
];




interface FilterBoxProps {
  closeModal: () => void; // Type for the closeModal function
}
const FilterBox: React.FC<FilterBoxProps> = ({ closeModal }) => {
  return (
    <>
    <header className='flex justify-between items-center border-b border-gray-300 p-4'>
      <div>
        <button className="flex border border-gray-300 items-center p-2 text-[#8c9ec5] font-sm font-medium rounded-lg">
          <FaSliders className="mr-2" />
          Advance Filters
        </button>
      </div>
      <div>
        <IoMdClose className='text-[#8c9ec5] cursor-pointer' onClick={closeModal} />
      </div>
    </header>
    <div className="body flex flex-row justify-around p-4">
      {/* Brands */}
      <div className='brands flex flex-col'>
        <h6 className="text-[#425a8b] font-bold mb-0">Brands</h6>
        <ul className="list-checkbox">
          {brands.map((brand, index) => (
            <li key={index}>
              <label className="cb-container flex items-center py-1">
                <input 
                  type="checkbox" 
                  defaultChecked={brand.checked} 
                  className="form-checkbox text-checked-color"
                />
                <span className={`text-small ${brand.checked ? 'text-checked-color' : 'text-[#8c9ec5]'}`}>
                  {brand.name}
                </span>
                <span className="checkmark"></span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Special Offers */}
      <div className='special flex flex-col'>
        <h6 className="text-[#425a8b] font-bold mb-0">Special Offers</h6>
        <ul className="list-checkbox">
          {specialOffers.map((offer, index) => (
            <li key={index} className='py-1'>
              <label className="cb-container flex items-center">
                <input 
                  type="checkbox" 
                  defaultChecked={offer.checked} 
                  className="form-checkbox text-checked-color"
                />
                <span className={`text-small ${offer.checked ? 'text-checked-color' : 'text-[#8c9ec5]'}`}>
                  {offer.name}
                </span>
              </label>
            </li>
          ))}
        </ul>

        {/* Ready to Ship */}
        <h6 className="text-[#425a8b] font-bold mb-0 mt-20">Ready to Ship In</h6>
        <ul className="list-checkbox">
          {readyShip.map((option, index) => (
            <li key={index}>
              <label className="cb-container flex items-center py-1">
                <input 
                  type="checkbox" 
                  defaultChecked={option.checked} 
                  className="form-checkbox text-checked-color"
                />
                <span className={`text-small ${option.checked ? 'text-checked-color' : 'text-[#8c9ec5]'}`}>
                  {option.name}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Ordering Options and Ratings */}
      <div className='order flex flex-col'>
        <div className="ordering">
          <h6 className="text-[#425a8b] font-bold mb-0">Ordering Options</h6>
          <ul className="list-checkbox">
            {orderingOptions.map((option, index) => (
              <li key={index} className='py-1'>
                <label className="cb-container flex items-center">
                  <input 
                    type="checkbox" 
                    defaultChecked={option.checked} 
                    className="form-checkbox text-checked-color"
                  />
                  <span className={`text-small ${option.checked ? 'text-checked-color' : 'text-[#8c9ec5]'}`}>
                    {option.name}
                  </span>
                  <span className="checkmark"></span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Ratings */}
        <div className="rating mt-20">
          <h6 className="text-[#425a8b] font-bold mb-0">Rating</h6>
          <ul className="list-checkboxx">
            {ratings.map((rating, index) => (
              <li className="mb-2 mt-2" key={index}>
                <a href="#" className='flex items-center text-[#8c9ec5]'>
                  {Array.from({ length: 5 }, (_, i) => (
                    <img
                      key={i}
                      src={`assets/imgs/template/icons/${i < rating.stars ? 'star' : 'star-gray'}.svg`}
                      alt="Ecom"
                    />
                  ))}
                  <span className="ml-4 font-xs text-[#8c9ec5] d-inline-block align-top">
                    {rating.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Materials and Product Tags */}
      <div className='material flex flex-col'>
        <div className="material">
          <h6 className="text-[#425a8b] font-bold mb-0">Material</h6>
          <ul>
            {materials.map((material, index) => (
              <li key={index} className="flex items-center py-1">
                <label className="cb-container flex items-center">
                  <input 
                    type="checkbox" 
                    defaultChecked={material.checked} 
                    className="form-checkbox text-checked-color"
                  />
                  <span className={`text-small ${material.checked ? 'text-checked-color' : 'text-[#8c9ec5]'}`}>
                    {material.name} ({material.quantity})
                  </span>
                  <span className="checkmark"></span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Product Tags */}
        <div className="products-tag mt-[6.5rem]">
          <h6 className="text-[#425a8b] font-bold mb-0">Product Tags</h6>
          <div className='grid grid-cols-3 gap-2'>
            {productTags.map((tag, index) => (
              <a
                key={index}
                className="btn btn-border text-sm inline-block border rounded-md border-[#8c9ec5] text-[#425a8b] text-center hover:bg-[#8c9ec5] hover:text-white p-2"
                href="#"
              >
                {tag}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
    <footer>
      <div className='flex space-x-8 items-center border-t border-gray-300 pt-4'>
        <button className="flex border border-gray-300 items-center p-2 cursor-pointer text-white bg-[#425a8b] hover:text-[#425a8b] hover:bg-white font-bold rounded-lg">
          Apply Filters
        </button>
        <button className="flex items-center p-2 text-[#8c9ec5] cursor-pointer hover:text-black hover:bg-white font-bold rounded-lg">
          Reset Filters
        </button>
      </div>
    </footer>
  </>
  )
}

export default FilterBox
