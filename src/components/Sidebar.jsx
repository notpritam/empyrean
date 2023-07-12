import React from "react";
import close from "../assets/img/svg/close.svg";
import add from "../assets/img/svg/add_white.svg";
import fb from "../assets/img/svg/fb.svg";
import pin from "../assets/img/svg/pin.svg";
import insta from "../assets/img/svg/insta.svg";
import yt from "../assets/img/svg/yt.svg";

const Sidebar = (props) => {
  const { menuState, setMenuState } = props;
  return (
    <>
      <div
        className={
          menuState == true
            ? `w-screen fixed top-0 bg-black  bg-opacity-10 left-[0] z-[9999] h-screen flex flex-col justify-between transition-all ease-in-out duration-700`
            : `w-screen fixed top-0   left-[-100%] z-[9999] h-screen flex flex-col justify-between  transition-all ease-in-out duration-500`
        }
      >
        <div className="w-[80%] bg-black h-screen flex flex-col justify-between ease-in-out duration-700">
          <div className="w-full p-4 flex gap-6 flex-col text-[14px]">
            <div>
              <img onClick={() => setMenuState(!menuState)} src={close}></img>
            </div>
            <div>
              <div className="flex justify-between items-center text-white uppercase font-light">
                <span>Shop</span>
                <img src={add}></img>
              </div>
              <div className="mt-4 h-[1px] bg-white w-full"></div>
            </div>
            <div>
              <div className="flex justify-between items-center text-white uppercase font-light">
                <span>Collections</span>
                <img src={add}></img>
              </div>
              <div className="mt-4 h-[1px] bg-white w-full"></div>
            </div>
            <div>
              <div className="flex justify-between items-center text-white uppercase font-light">
                <span>About</span>
              </div>
              <div className="mt-4 h-[1px] bg-white w-full"></div>
            </div>
            <div>
              <div className="flex justify-between items-center text-white uppercase font-light">
                <span>Journal</span>
              </div>
              <div className="mt-4 h-[1px] bg-white w-full"></div>
            </div>

            <div className="flex flex-col gap-2 text-gray-500">
              <span>Retailers</span>
              <span>Contact</span>
              <span>Account</span>
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

export default Sidebar;
