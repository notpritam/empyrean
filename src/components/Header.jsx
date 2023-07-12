import React, { useState } from "react";
import menu from "../assets/img/svg/menu.svg";
import search from "../assets/img/svg/search.svg";
import bag from "../assets/img/svg/bag.svg";

import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Cart from "./Cart";
function Header() {
  const [menuState, setMenuState] = useState(false);
  const [cartState, setCartState] = useState(false);
  return (
    <>
      <div className="flex fixed top-0 z-[999]  justify-between items-center w-screen bg-white pl-4 pr-4 h-[50px]">
        <div>
          <img onClick={() => setMenuState(true)} src={menu}></img>
        </div>
        <div className="uppercase text-[22px] font-lora">
          <Link to={"/"} className="font-lora">
            empyrean
          </Link>
        </div>
        <div className="flex gap-2 ">
          <img src={search}></img>
          <img onClick={() => setCartState(true)} src={bag}></img>
        </div>
      </div>

      <Sidebar menuState={menuState} setMenuState={setMenuState} />
      <Cart cartState={cartState} setCartState={setCartState} />
    </>
  );
}

export default Header;
