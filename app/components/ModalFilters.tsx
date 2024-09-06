"use client"
import Backdrop from '@mui/material/Backdrop';
import { useState } from 'react';
import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FaSliders } from 'react-icons/fa6'
import FilterBox from './FilterBox';
import { IoMdArrowDropdown } from 'react-icons/io';
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1150,
    bgcolor: 'background.paper',
    border: "none",
    boxShadow: 24,
    p: 4,
};
const quantityOptions = [
    { id: '30', label: '30 items' },
    { id: '50', label: '50 items' },
    { id: '100', label: '100 items' },
];

const options = [
    { id: 'latest', label: 'Latest products' },
    { id: 'oldest', label: 'Oldest products' },
    { id: 'comments', label: 'Comments products' },
];

function ModalFilters() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Latest products');

    const toggleDropdown = () => setIsOpen(!isOpen);

    const selectOption = (option: any) => {
        setSelectedOption(option);
        setIsOpen(false);
    }
    const [isQuantityDropdownOpen, setQuantityDropdownOpen] = useState(false);
    const [selectedQuantity, setSelectedQuantity] = useState('30 items');


    const toggleQuantityDropdown = () => setQuantityDropdownOpen(!isQuantityDropdownOpen);
    const selectQuantity = (quantity: string) => {
        setSelectedQuantity(quantity);
        setQuantityDropdownOpen(false);
    };


    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const CloseButton = () => setOpen(false);
  return (
    <div>
        <div className="flex justify-between text-[#425A8B] items-center m-4">

<div>
    <button className="flex border border-gray-300 items-center p-2 text-[#425a8b] font-sm font-medium rounded-lg bg-gray-100" onClick={handleOpen}>
        <FaSliders className="mr-2" />
        All Filters
    </button>
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={CloseButton}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
            backdrop: {
                timeout: 500,
            },
        }}
      >
        <Fade in={open}>
            <Box sx={style}>
                <Typography id="transition-modal-description" >
                    <FilterBox closeModal={CloseButton} />
                </Typography>
            </Box>
        </Fade>
    </Modal>
</div>
<div className="flex space-x-10 z-10 items-center ">
    <div className="border-r border-gray-300 px-6"><span>Showing 1–16 of 17 results</span></div>
    <div className="relative flex items-center text-left border-r border-gray-300 px-6">
        <span className="text-xs text-[#8c9ec5]"> Sort By : </span>
        <div className="">
            <button
                type="button"
                className="inline-flex items-center  z-50 justify-center w-full rounded-md  px-4 py-2 bg-white text-sm font-medium  text-[#425a8b] hover:bg-gray-50 focus:outline-none "
                onClick={toggleDropdown}
            >
                {selectedOption}
                <IoMdArrowDropdown className="space-x-3" />

            </button>
        </div>

        {isOpen && (
            <div className="t absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {options.map((option) => (
                        <button
                            key={option.id}
                            onClick={() => selectOption(option.label)}
                            className={`block px-4 py-2 text-sm text-gray-700 w-full text-left ${selectedOption === option.label ? 'bg-gray-100' : ''
                                }`}
                            role="menuitem"
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>
        )}
    </div>
    <div className="relative flex items-center border-r border-gray-300 px-6 ">
        <span className="text-xs text-[#8c9ec5]"> Show : </span>
        <div className="">
            <button
                type="button"
                className="inline-flex justify-center w-full rounded-md px-4 py-2 bg-white text-sm font-medium text-[#425a8b] hover:bg-gray-50 focus:outline-none focus:ring-2 "
                onClick={toggleQuantityDropdown}
            >
                {selectedQuantity}
                <IoMdArrowDropdown className="space-x-3" />

            </button>
        </div>

        {isQuantityDropdownOpen && (
            <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {quantityOptions.map((option) => (
                        <button
                            key={option.id}
                            onClick={() => selectQuantity(option.label)}
                            className={`block px-4 py-2 text-sm text-gray-700 w-full text-left ${selectedQuantity === option.label ? 'bg-gray-100' : ''
                                }`}
                            role="menuitem"
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>
        )}

    </div>

    <div></div>
</div>
</div>
    </div>
  )
}

export default ModalFilters