import React, { useState } from "react";
import close from "../assets/img/svg/closeDark.svg";
import add from "../assets/img/svg/add.svg";
import fb from "../assets/img/svg/fb.svg";
import pin from "../assets/img/svg/pin.svg";
import insta from "../assets/img/svg/insta.svg";
import yt from "../assets/img/svg/yt.svg";

const Sort = (props) => {
  const { sortState, setSortState } = props;
  const [subMenu, setSubMenu] = useState(1);
  return (
    <>
      <div
        className={
          sortState == true
            ? `w-screen fixed   bottom-0 bg-black  bg-opacity-10  z-[9999] h-screen flex justify-end items-end transition-all ease-in-out duration-700`
            : `w-screen fixed  bottom-[-100%] z-[9999] h-screen flex justify-end items-end transition-all ease-in-out duration-500`
        }
      >
        <div className="flex flex-col justify-between w-screen duration-700 ease-in-out bg-background">
          <div className="flex justify-between border-b-[1px] pb-2 border-bg p-4">
            <div>
              <img onClick={() => setSortState(!sortState)} src={close}></img>
            </div>
            <div className="flex items-center justify-center flex-1 uppercase tracking-[.2em]">
              <span>Sort</span>
            </div>
          </div>
          <div className="w-full h-full ">
            <div className="flex flex-col w-full gap-2 p-4 border-b-[1px] border-borderColor">
              <div className="flex items-center justify-center">
                <div className="uppercase text-[12px] tracking-[.2em] ">
                  <span>Best Selling</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full gap-2 p-4 border-b-[1px] border-borderColor">
              <div className="flex items-center justify-center">
                <div className="uppercase text-[12px] tracking-[.2em] ">
                  <span>Price, Low to High</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full gap-2 p-4 border-b-[1px] border-borderColor">
              <div className="flex items-center justify-center">
                <div className="uppercase text-[12px] tracking-[.2em] ">
                  <span>Price, High to Low</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full gap-2 p-4 border-b-[1px] border-borderColor">
              <div className="flex items-center justify-center">
                <div className="uppercase text-[12px] tracking-[.2em] ">
                  <span>Date, Old to New</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full gap-2 p-4 ">
              <div className="flex items-center justify-center">
                <div className="uppercase text-[12px] tracking-[.2em] ">
                  <span>Date, New to Old</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sort;
