import React, { Component, useState } from "react";
import { motion } from "framer-motion";
import camera from "../public/icons/camera-svgrepo-com1.svg";
import castle from "../public/icons/castle-svgrepo-com.svg";
import dots from "../public/icons/dots.svg";
import shop from "../public/icons/shop-2-svgrepo-com.svg";
import account from "../public/icons/account-svgrepo-com.svg";
import logo from "../public/icons/logo123.svg";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div className="">
        <div className="flex justify-between items-center text-black bg-[#F5F5DC] shadow-xl py-3 pr-[7vw] pl-[6vw] z-10">
          <a
            href="#"
            className="flex justify-between items-center text-2xl font-bold gap-3 mt-2"
          >
            <img src={logo} alt="" className="w-[206px] h-[84px]" />
          </a>
          <div className="flex justify-between items-center gap-[2.8vw]">
            <a
              href="#"
              className="flex justify-between items-center text-2xl font-bold gap-3"
            >
              <img src={castle} alt="" className="w-11" />
              <p>Home</p>
            </a>
            <a
              href="#"
              className="flex justify-between items-center text-2xl font-bold gap-2"
            >
              <img src={camera} alt="" className="w-13" />
              <p>Take a shot</p>
            </a>
            <a
              href="#"
              className="flex justify-between items-center text-2xl font-bold gap-2"
            >
              <img src={shop} alt="" className="w-11" />
              <p>Shop</p>
            </a>
            <a
              href="#"
              className="flex justify-between items-center text-2xl font-bold gap-3"
            >
              <img src={dots} alt="" className="w-11" />
              <p>More</p>
            </a>
          </div>
          <a
            href="#"
            className="flex justify-between items-center text-2xl font-bold gap-2"
          >
            <img src={account} alt="" className="w-11" />
            <p>Sign In | Sign Up</p>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
