import React, { useEffect, useMemo, useState } from "react";
import menu from "../assets/img/svg/menu.svg";
import search from "../assets/img/svg/search.svg";
import bag from "../assets/img/svg/bag.svg";
import heart from "../assets/img/svg/heart.svg";
import profile from "../assets/img/svg/profile.svg";

import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Cart from "./Cart";
import axios from "axios";
function Header() {
  const [menuState, setMenuState] = useState(false);
  const [cartState, setCartState] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [currentMenu, setCurrentMenu] = useState(0);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    getCollections();
  }, []);

  const getCollections = () => {
    axios
      .get("http://localhost:3000/collection")
      .then((res) => {
        console.log(res.data);
        setCollection(res.data);
      })
      .catch();
  };

  return (
    <>
      <div className="flex  fixed top-0 z-[999] flex-col w-screen ">
        <div className="flex justify-between items-center w-screen bg-white pl-4 pr-4 h-[50px] border-b-[1px] border-borderColor">
          <div className=" xl:hidden">
            <img onClick={() => setMenuState(true)} src={menu}></img>
          </div>
          <div className="hidden xl:flex text-[14px] font-normal font-lato text-textColor gap-[21px] tracking-[.2em]">
            <div
              onMouseOver={() => {
                setOpenMenu(true);
                setCurrentMenu(1);
              }}
            >
              <span className="hover-border-bottom">Shop</span>
            </div>
            <div
              onMouseOver={() => {
                setOpenMenu(true);
                setCurrentMenu(2);
              }}
            >
              <span className="hover-border-bottom">Collection</span>
            </div>

            <div
              onMouseOver={() => {
                setOpenMenu(true);
                setCurrentMenu(0);
              }}
            >
              <Link className="hover-border-bottom" to={"/"}>
                About
              </Link>
            </div>
            <div
              onMouseOver={() => {
                setOpenMenu(true);
                setCurrentMenu(0);
              }}
            >
              <Link className="hover-border-bottom" to={"/"}>
                Journal
              </Link>
            </div>
          </div>
          <div className="uppercase text-[22px] font-lora tracking-[.2em]">
            <Link to={"/"} className="font-lora">
              empyrean
            </Link>
          </div>
          <div className="flex gap-2 sm:gap-[24px] ">
            <div className="tracking-[.2em] text-[12px] hidden xl:flex justify-center items-center">
              <span>USD</span>
            </div>
            <img
              src={heart}
              className="hidden sm:flex  h-[20px] w-[20px]"
            ></img>
            <img
              src={profile}
              className="hidden sm:flex h-[20px] w-[20px]"
            ></img>
            <img src={search}></img>
            <img onClick={() => setCartState(true)} src={bag}></img>
          </div>
        </div>

        <div
          onMouseLeave={() => {
            setOpenMenu(false);
            setCurrentMenu(0);
          }}
          className={
            openMenu && currentMenu == 1
              ? "w-full sticky grid grid-cols-4 z-[9999] p-12 pl-24 pr-24 gap-y-8 top-[50px] left-0 right-0 bg-white duration-500 ease-out border-t-[2px] border-b-[1px] border-borderColor "
              : "hidden duration-500 ease-out"
          }
        >
          <div className="flex flex-col gap-4">
            <span className="text-[14px] tracking-[.2em] uppercase">
              Discover
            </span>
            <div className="flex flex-col gap-4 text-subtitle">
              <span className="text-[14px]">All Products</span>
              <span className="text-[14px]">New in</span>
              <span className="text-[14px]">Best Sellers</span>
              <span className="text-[14px]">Last piece</span>
              <span className="text-[14px]">Ramadan Edit</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[14px] tracking-[.2em] uppercase">
              Categories
            </span>
            <div className="flex w-full gap-12">
              <div className="flex flex-col gap-4 text-subtitle">
                <span className="text-[14px]">Contact</span>
                <span className="text-[14px]">Retailers</span>
                <span className="text-[14px]">My Account</span>
                <span className="text-[14px]">Privacy Policy</span>
                <span className="text-[14px]">Pants</span>
              </div>
              <div className="flex flex-col gap-4 text-subtitle">
                <span className="text-[14px]">Contact</span>
                <span className="text-[14px]">Retailers</span>
                <span className="text-[14px]">My Account</span>
                <span className="text-[14px]">Privacy Policy</span>
                <span className="text-[14px]">Pants</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-[14px] tracking-[.2em] uppercase">
              Collections
            </span>
            <div className="flex flex-col gap-4 text-subtitle">
              <span className="text-[14px]">Spring Summer 2023</span>
              <span className="text-[14px]">Fall Winter 2022</span>
            </div>
          </div>

          <div className="flex flex-col w-full h-full gap-6">
            <img src="https://bouguessa.com/cdn/shop/files/cec_370x230_crop_center@2x.jpg?v=1677062348"></img>
            <span className="text-[14px] tracking-[.2em] uppercase text-center">
              Shop the new fall winter 2023 collection
            </span>
          </div>
        </div>

        <div
          onMouseLeave={() => {
            setOpenMenu(false);
            setCurrentMenu(0);
          }}
          className={
            openMenu && currentMenu == 2
              ? "w-full sticky flex justify-center z-[9999]  pl-24 pr-24 gap-y-8 top-[50px] left-0 right-0 bg-white duration-500 ease-out border-t-[1px] border-b-[1px] border-borderColor "
              : "hidden duration-500 ease-out"
          }
        >
          <div className="max-w-[1440px] flex justify-center">
            {collection.map((item, index) => (
              <>
                <div
                  key={item._id}
                  className="flex flex-col w-full h-full gap-6 p-12"
                >
                  <a href={"/pages/" + item.link}>
                    <img src={item.image}></img>
                  </a>
                  <span className="text-[14px] tracking-[.2em] uppercase text-center">
                    {item.title}
                  </span>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>

      <Sidebar menuState={menuState} setMenuState={setMenuState} />
      <Cart cartState={cartState} setCartState={setCartState} />
    </>
  );
}

export default Header;
