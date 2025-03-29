import React, { Component, useState } from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import camera from "../public/icons/camera-svgrepo-com1.svg";
import castle from "../public/icons/castle-svgrepo-com.svg";
import dots from "../public/icons/dots.svg";
import shop from "../public/icons/shop-2-svgrepo-com.svg";
import account from "../public/icons/account-svgrepo-com.svg";
import logo from "../public/icons/logo123.svg";
import logo2 from "../public/icons/black123.svg";

const Header = () => {
  const [open, setOpen] = useState(false);
  return <header>
    <div className="">
      <div className='flex z-9000 justify-between items-center text-black bg-[#F5F5DC] shadow-xl py-3 pr-[7vw] pl-[6vw]'>
        <Link to="/" className='flex justify-between items-center text-2xl font-bold gap-3 mt-2'>
          <img src={logo2} alt="" className='xl:w-[206px] xl:h-[100px] h-15' />
        </Link>
        <div className='hidden xl:flex justify-between items-center gap-[2.8vw]'>
          <a href="/" className='flex justify-between items-center text-2xl font-bold gap-3'>
            <img src={castle} alt="" className='w-11' />
            <p>Home</p>
          </a>
          <Link to="/screen" className='flex justify-between items-center text-2xl font-bold gap-2'>
            <img src={camera} alt="" className='w-13' />
            <p>Take a shot</p>
          </Link>
          <a href="/shop" className='flex justify-between items-center text-2xl font-bold gap-2'>
            <img src={shop} alt="" className='w-11' />
            <p>Shop</p>
          </a>
          <a href="/" className='flex justify-between items-center text-2xl font-bold gap-3'>
            <img src={dots} alt="" className='w-11' />
            <p>More</p>
          </a>
        </div>
        <a href="/profile" className='hidden xl:flex justify-between items-center text-2xl font-bold gap-2'>
          <img src={account} alt="" className='w-11' />
          <p>Profile</p>
        </a>
        <button className="xl:hidden flex flex-col items-center" onClick={() => setOpen(!open)}>
          <span className={`block w-6 h-1 bg-gray-700 rounded transition-all ${open ? "rotate-45 translate-y-2 z-50" : ""}`}></span>
          <span className={`block w-6 h-1 bg-gray-700 rounded my-1 transition-all ${open ? "opacity-0 z-50" : ""}`}></span>
          <span className={`block w-6 h-1 bg-gray-700 rounded transition-all ${open ? "-rotate-45 -translate-y-2 z-50" : ""}`}></span>
        </button>
        <div className={`fixed top-0 right-0 h-full w-64 bg-[#F5F5DC] text-black p-5 transform ${open ? "translate-x-0" : "translate-x-full"} transition-transform duration-300`}>
          <button className="absolute top-5 right-5 text-2xl" onClick={() => setOpen(false)}></button>
          <ul className="mt-18 space-y-10 pr-2">
            <a href="/" className='flex justify-start items-center text-{12px} gap-7 font-bold ml-1'>
              <img src={castle} alt="" className='w-8' />
              <p>Home</p>
            </a>
            <a href="/screen" className='flex justify-start items-center text-{12px} gap-6 font-bold ml-1'>
              <img src={camera} alt="" className='w-9' />
              <p>Take a shot</p>
            </a>
            <a href="/shop" className='flex justify-start items-center text-{12px} gap-6 font-bold ml-2'>
              <img src={shop} alt="" className='w-8 mr-1' />
              <p>Shop</p>
            </a>
            <a href="/" className='flex justify-start items-center text-{12px} gap-7 font-bold ml-2'>
              <img src={dots} alt="" className='w-8' />
              <p>More</p>
            </a>
            <a href="/profile" className='flex justify-start items-center text-{12px} gap-6.5 font-bold ml-2'>
              <img src={account} alt="" className='w-9' />
              <p>Profile</p>
            </a>
          </ul>
        </div>
      </div>
    </div>
  </header>;
};

export default Header;
