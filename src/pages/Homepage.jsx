import React from "react";

import linkImage from "../assets/img/svg/link.svg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Homepage() {
  const latest = [11, 32, 23, 34];
  return (
    <>
      <Header />
      <div className="relative min-h-[480px] mt-[50px] flex items-center justify-center z-10">
        <img
          className="absolute z-0 top-0 bottom-0 object-cover h-full w-full "
          src="https://bouguessa.com/cdn/shop/files/76A15BB2-CB84-4C5F-850F-9EECDE345994_1500x.jpg?v=1688376212"
        ></img>

        <div className=" z-10  flex flex-col text-white items-center gap-4">
          <span className="text-[12px] font-light">SPRING SUMMER 2023</span>
          <span className="text-[20px]">SUMMER IN THE CITY</span>
          <Link className="flex gap-1 items-end justify-center" to={"/"}>
            <span className="text-[15px] underline underline-offset-4">
              Discover
            </span>
            <img className="h-[17px] " src={linkImage}></img>
          </Link>
        </div>
      </div>

      <div className="flex flex-col w-full pl-4 pr-4 pt-12 gap-8">
        <div className="flex flex-col items-center gap-4">
          <span className="uppercase text-[14px] font-light">
            PERfectly Paired
          </span>
          <div className="pl-20 pr-20">
            <img src="https://bouguessa.com/cdn/shop/products/Bouguessa_11-2_1539_6869babc-6792-4f01-8a0d-963cfc0432a7_1500x.jpg?v=1677002969"></img>
          </div>
          <span>Petra Printed Set</span>

          <Link className="  font-light" to={"/"}>
            <span>Discover</span>
          </Link>
        </div>
        <div>
          <img src="https://bouguessa.com/cdn/shop/products/Bouguessa_11-2_2400_1000x.jpg?v=1679168976"></img>
        </div>
      </div>

      <div className=" flex flex-col gap-4">
        <div className=" grid grid-cols-2 gap-2 gap-y-4 pl-4 pr-4 pt-12">
          {latest.map((item) => (
            <>
              <div key={item} className="flex flex-col gap-4">
                <div className="relative">
                  <div className="text-[11px] pl-2 pr-2 p-1 bg-white absolute top-2 left-2 font-light rounded-[4px]">
                    ON SALE
                  </div>
                  <img src="https://bouguessa.com/cdn/shop/products/Bouguessa_11-2_1927_600x.jpg?v=1681680386"></img>
                </div>

                <div className="flex flex-col gap-2 items-center">
                  <span className="uppercase text-[14px] font-light">
                    LINA LONG SHIRT DRESS
                  </span>
                  <div className="flex gap-4 items-center text-[15px]">
                    <span className=" font-normal text-red-500">$249.50</span>
                    <span className=" font-normal line-through text-[14px] ">
                      $499
                    </span>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>

        <div className="flex items-center justify-center w-full">
          <div className="text-[12px] flex items-center justify-center border-[1px] border-black pt-[10px] pb-[10px] pl-[22px] pr-[22px] uppercase font-light">
            View All Products
          </div>
        </div>
      </div>

      <div className=" w-full mt-12 mb-12">
        <div className="w-full min-h-[480px]">
          <img
            className="w-full h-full object-cover"
            src="https://bouguessa.com/cdn/shop/files/BOUGUESSA_FW22_3000x1100_8c9c13bb-a5af-4e4f-87e2-40151027821f_750x960_crop_center.jpg?v=1662477136"
          ></img>
        </div>

        <div className="flex w-full items-center justify-center m-2">
          <span className="text-[18px] font-light">Fall Winter 2022</span>
        </div>
      </div>

      <div className="flex flex-col items-center pl-4 pr-4 gap-8">
        <div className="flex flex-col gap-4 w-[60%]">
          <div className="flex items-center justify-center">
            <span className="uppercase">Fall Winter 2022</span>
          </div>
          <div className="w-full">
            <img
              className="object-cover h-auto w-full"
              src="https://bouguessa.com/cdn/shop/files/HOMEPAGE_750x1110-min_1500x.jpg?v=1662724189"
            ></img>
          </div>

          <div className="flex justify-center items-center">
            <span className="underline-offset-[6px] underline">
              Disover the collection
            </span>
          </div>
        </div>
        <div className="w-full h-auto">
          <img src="https://bouguessa.com/cdn/shop/files/HOMEPAGE_1500x2220-min_750x.jpg?v=1662724124"></img>
        </div>
      </div>

      <div className=" flex flex-col gap-4">
        <div className=" grid grid-cols-2 gap-2 gap-y-4 pl-4 pr-4 pt-12">
          {latest.map((item) => (
            <>
              <div key={item} className="flex flex-col gap-4">
                <div className="relative">
                  <div className="text-[11px] pl-2 pr-2 p-1 bg-white absolute top-2 left-2">
                    ON SALE
                  </div>
                  <img src="https://bouguessa.com/cdn/shop/products/Bouguessa_11-2_1927_600x.jpg?v=1681680386"></img>
                </div>

                <div className="flex flex-col gap-2 items-center">
                  <span className="uppercase text-[14px] font-light ">
                    LINA LONG SHIRT DRESS
                  </span>
                  <div className="flex gap-4 items-center text-[15px]">
                    <span className=" font-normal text-red-500">$249.50</span>
                    <span className=" font-normal line-through text-[14px] ">
                      $499
                    </span>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>

        <div className="flex items-center justify-center w-full">
          <div className="text-[12px] flex items-center justify-center border-[1px] border-black pt-[10px] pb-[10px] pl-[22px] pr-[22px] uppercase font-light">
            View All Products
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
