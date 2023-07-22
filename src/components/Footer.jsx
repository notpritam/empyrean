import React from "react";
import fb from "../assets/img/svg/fb.svg";
import pin from "../assets/img/svg/pin.svg";
import insta from "../assets/img/svg/insta.svg";
import yt from "../assets/img/svg/yt.svg";

function Footer() {
  return (
    <footer className="sticky grid grid-cols-2 pb-4 pl-4 pr-4 mt-12 gap-y-8 md:grid-cols-3">
      <div className="flex flex-col gap-4">
        <span className="text-[14px] tracking-[.2em]">SHOP MENU</span>
        <div className="flex flex-col gap-4 text-subtitle">
          <span className="text-[14px]">Coats & Long Jackets</span>
          <span className="text-[14px]">Dresses</span>
          <span className="text-[14px]">Skirts</span>
          <span className="text-[14px]">Tops</span>
          <span className="text-[14px]">Pants</span>
          <span className="text-[14px]">Accessories</span>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-[14px] tracking-[.2em]">HELP</span>
        <div className="flex flex-col gap-4 text-subtitle">
          <span className="text-[14px]">Contact</span>
          <span className="text-[14px]">Retailers</span>
          <span className="text-[14px]">My Account</span>
          <span className="text-[14px]">Privacy Policy</span>
          <span className="text-[14px]">Pants</span>
          <span className="text-[14px]">Terms & Conditions</span>
        </div>
      </div>

      <div className="flex flex-col col-span-2 gap-4 md:col-span-1 ">
        <span className="uppercase tracking-[.2em]">NEWSLETTER</span>
        <div className="flex flex-col gap-2 text-subtitle">
          <span>Sign up for 10% off your next order*</span>
          <input
            placeholder="Enter your email address"
            className="h-[40px]"
          ></input>
          <div className="flex">
            <div className="flex text-[12px] tracking-[.2em] items-center justify-between uppercase border-[1px] border-black p-[14px] pr-[28px] pl-[28px]">
              Subscribe
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <img className="h-[15px]" src={fb}></img>
        <img className="h-[15px]" src={pin}></img>
        <img className="h-[15px]" src={insta}></img>
        <img className="h-[15px]" src={yt}></img>
      </div>
    </footer>
  );
}

export default Footer;
