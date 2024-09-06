import React, { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

interface CustomDropdownProps {
  options: string[];
  onSelect: (option: string) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center justify-between w-full px-3 py-2 border border-gray-300 rounded bg-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedOption || 'Select a category'}</span>
        <IoMdArrowDropdown className="text-[#425A8B]" />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-lg border border-gray-200 z-10">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <ul className="max-h-60 overflow-y-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <li
                  key={index}
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </li>
              ))
            ) : (
              <li className="px-3 py-2 text-gray-500">No options found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
