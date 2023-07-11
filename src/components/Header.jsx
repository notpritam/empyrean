import React from "react";
import menu from "../assets/img/svg/menu.svg";
import search from "../assets/img/svg/search.svg";
import bag from "../assets/img/svg/bag.svg";

import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="flex fixed top-0 z-[999]  justify-between items-center w-screen bg-white pl-4 pr-4 h-[50px]">
        <div>
          <img src={menu}></img>
        </div>
        <div className="uppercase text-[22px] font-lora">empyrean</div>
        <div className="flex gap-2">
          <img src={search}></img>
          <img src={bag}></img>
        </div>
      </div>
    </>
  );
}

export default Header;
