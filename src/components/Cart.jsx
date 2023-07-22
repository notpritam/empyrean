import React from "react";
import close from "../assets/img/svg/closeDark.svg";
import add from "../assets/img/svg/add_white.svg";
import fb from "../assets/img/svg/fb.svg";
import pin from "../assets/img/svg/pin.svg";
import insta from "../assets/img/svg/insta.svg";
import yt from "../assets/img/svg/yt.svg";

const Cart = (props) => {
  const { cartState, setCartState } = props;
  return (
    <>
      <div
        className={
          cartState == true
            ? `w-screen fixed top-0 bg-black  bg-opacity-10 right-[0] z-[9999] h-screen flex justify-end transition-all ease-in-out duration-700`
            : `w-screen fixed top-0   right-[-100%] z-[9999] h-screen flex justify-end transition-all ease-in-out duration-500`
        }
      >
        <div className="w-[80%] max-w-[360px] bg-background h-screen flex flex-col justify-between ease-in-out duration-700">
          <div className="flex justify-between border-b-[1px] pb-2 border-bg p-4">
            <div className="uppercase">
              <span>CART</span>
            </div>
            <div>
              <img onClick={() => setCartState(!cartState)} src={close}></img>
            </div>
          </div>
          <div className="w-full p-4 grid grid-cols-1 gap-6 flex-grow  text-[14px] tracking-[.2em]">
            {/* Single Item in Card */}
            <div className="flex gap-4">
              <div>
                <img
                  className="w-[90px] sm:w-[120px]"
                  src="https://bouguessa.com/cdn/shop/products/Bouguessa_11-2_1649_240x.jpg?v=1679168438"
                ></img>
              </div>

              <div className="flex flex-col gap-2 ">
                <span className="text-[12px] tracking-[.2em]">
                  LEA SLEVELESS DRESS
                </span>
                <span className="text-[10px] text-subtitle tracking-[.2em]">
                  LEA SLEVELESS DRESS
                </span>
                <span className="text-[10px] text-subtitle tracking-[.2em]">
                  $591.50
                </span>
                <div className="flex gap-4 mt-2 text-[15px] text-subtitle ">
                  <div className="border-[1px] border-borderColor flex p-2 pl-4 pr-4 justify-between flex-[6]">
                    <span>-</span>
                    <span>1</span>
                    <span>+</span>
                  </div>

                  <div className="flex-[4] flex items-center justify-center">
                    <span className="underline underline-offset-4 text-subtitle text-[10px]">
                      Remove
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-[50px] text-gray-600 flex justify-between border-t-[1px] border-gray-500">
            <div className="flex-[4] flex items-center justify-center border-r-[1px] border-gray-500 ">
              USD
            </div>
            <div className="flex gap-4 flex-[6] items-center justify-center">
              <img className="h-[18px]" src={fb}></img>
              <img className="h-[18px]" src={pin}></img>
              <img className="h-[18px]" src={insta}></img>
              <img className="h-[18px]" src={yt}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
