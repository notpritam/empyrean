import React, { useState } from "react";
import close from "../assets/img/svg/closeDark.svg";
import add from "../assets/img/svg/add.svg";
import fb from "../assets/img/svg/fb.svg";
import pin from "../assets/img/svg/pin.svg";
import insta from "../assets/img/svg/insta.svg";
import yt from "../assets/img/svg/yt.svg";

const Filters = (props) => {
  const { filterState, setFilterState } = props;
  const [subMenu, setSubMenu] = useState(1);
  return (
    <>
      <div
        className={
          filterState == true
            ? `w-screen fixed top-0 bg-black  bg-opacity-10 right-[0] z-[9999] h-screen flex justify-end transition-all ease-in-out duration-700`
            : `w-screen fixed top-0   right-[-100%] z-[9999] h-screen flex justify-end transition-all ease-in-out duration-500`
        }
      >
        <div className="w-[80%] bg-background h-screen flex flex-col justify-between ease-in-out duration-700">
          <div className="flex justify-between border-b-[1px] pb-2 border-bg p-4">
            <div className="flex items-center justify-center flex-1 uppercase tracking-[.2em]">
              <span>Filters</span>
            </div>
            <div>
              <img
                onClick={() => setFilterState(!filterState)}
                src={close}
              ></img>
            </div>
          </div>
          <div className="w-full h-full ">
            <div className="flex flex-col w-full gap-2 p-4 border-b-[1px] border-borderColor">
              <div className="flex items-center justify-between">
                <div className="uppercase text-[12px] tracking-[.2em] ">
                  <span>Categories</span>
                </div>
                <div>
                  <img onClick={() => setSubMenu(!subMenu)} src={add}></img>
                </div>
              </div>
              <div
                className={
                  subMenu
                    ? "flex pl-2 flex-col gap-2 text-[12px] text-subtitle duration-700 ease-in-out"
                    : "hidden"
                }
              >
                <span>Test</span>
                <span>Test</span>
                <span>Test</span>
                <span>Test</span>
              </div>
            </div>
            <div className="flex flex-col w-full gap-2 p-4 border-b-[1px] border-borderColor">
              <div className="flex items-center justify-between">
                <div className="uppercase text-[12px] tracking-[.2em] ">
                  <span>Categories</span>
                </div>
                <div>
                  <img onClick={() => setSubMenu(!subMenu)} src={add}></img>
                </div>
              </div>
              <div
                className={
                  "hidden pl-2 flex-col gap-2 text-[12px] text-subtitle duration-700 ease-in-out"
                }
              >
                <span>Test</span>
                <span>Test</span>
                <span>Test</span>
                <span>Test</span>
              </div>
            </div>
            <div className="flex flex-col w-full gap-2 p-4 border-b-[1px] border-borderColor">
              <div className="flex items-center justify-between">
                <div className="uppercase text-[12px] tracking-[.2em] ">
                  <span>Categories</span>
                </div>
                <div>
                  <img onClick={() => setSubMenu(!subMenu)} src={add}></img>
                </div>
              </div>
              <div
                className={
                  "hidden pl-2 flex-col gap-2 text-[12px] text-subtitle duration-700 ease-in-out"
                }
              >
                <span>Test</span>
                <span>Test</span>
                <span>Test</span>
                <span>Test</span>
              </div>
            </div>
          </div>

          <div className="w-full h-[50px] text-subtitle flex justify-between border-t-[1px] border-borderColor">
            <div className="flex-[4] flex items-center justify-center border-r-[1px] border-borderColor ">
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

export default Filters;
