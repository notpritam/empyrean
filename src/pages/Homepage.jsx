import React, { useLayoutEffect, useRef } from "react";

import linkImage from "../assets/img/svg/link.svg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import Hero from "../components/Hero";
import FeaturedSection from "../components/FeaturedSection";

function Homepage() {
  const latest = [11, 32, 23, 34];

  return (
    <>
      <Header />
      <Hero />
      <FeaturedSection />

      <div className="w-full mt-12 mb-12 ">
        <div className="w-full flex max-h-[480px] sm:max-h-[500px] bg-[#f5f0eb] ">
          <img
            className="flex-1 object-contain"
            src="https://bouguessa.com/cdn/shop/files/BOUGUESSA_FW22_3000x1100_8c9c13bb-a5af-4e4f-87e2-40151027821f_750x960_crop_center.jpg?v=1662477136"
          ></img>
        </div>

        <div className="flex items-center justify-center w-full mt-2">
          <span className="text-[18px] font-light">Fall Winter 2022</span>
        </div>
      </div>

      <div className="max-w-[1440px] m-auto">
        <div className="flex flex-col w-full gap-8 pt-12 pl-4 pr-4 md:flex-row md:gap-0">
          <div className="flex flex-col items-center justify-center flex-1 gap-4">
            <span className="uppercase text-[14px] font-light">
              Fall Winter 2022
            </span>
            <div className="pl-20 pr-20">
              <img src="https://bouguessa.com/cdn/shop/files/HOMEPAGE_750x1110-min_1500x.jpg?v=1662724189"></img>
            </div>

            <Link className="font-light " to={"/"}>
              <span className="underline-offset-[6px] underline">
                Disover the collection
              </span>
            </Link>
          </div>

          <div className="flex-1">
            <Link to={"/collections"}>
              <img
                className="w-full h-full"
                src="https://bouguessa.com/cdn/shop/files/HOMEPAGE_1500x2220-min_750x.jpg?v=1662724124"
              ></img>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-12 ">
          <div className="grid grid-cols-2 gap-2 pt-12 pl-4 pr-4 xl:gap-[60px] md:gap-[24px] lg:grid-cols-4 gap-y-4">
            {latest.map((item) => (
              <>
                <div key={item} className="flex flex-col gap-4">
                  <div className="relative">
                    <div className="text-[11px] pl-2 pr-2 p-1 bg-white absolute top-2 left-2 font-light rounded-[4px]">
                      ON SALE
                    </div>
                    <img src="https://bouguessa.com/cdn/shop/products/Bouguessa_11-2_1927_600x.jpg?v=1681680386"></img>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <span className="uppercase text-[14px] font-light">
                      LINA LONG SHIRT DRESS
                    </span>
                    <div className="flex gap-4 items-center text-[15px]">
                      <span className="font-normal text-red-500 ">$249.50</span>
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
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
