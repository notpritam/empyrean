import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import share from "../assets/img/svg/share.svg";
import add from "../assets/img/svg/add.svg";
import fb from "../assets/img/svg/fb.svg";
import pin from "../assets/img/svg/pin.svg";
import insta from "../assets/img/svg/insta.svg";
import heart from "../assets/img/svg/heart.svg";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCreative,
  FreeMode,
  Mousewheel,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-creative";

function Product() {
  return (
    <>
      <Header />
      <div className="mt-[50px]  m-auto bg-background">
        <div className="flex max-w-[1440px] m-auto flex-col lg:flex-row lg:pl-4 lg:pr-4 lg:pt-12 lg:gap-12">
          <Swiper
            className="w-full mb-4 flex-1 z-1 relative h-auto lg:hidden"
            // install Swiper modules
            modules={[Pagination, A11y, EffectCreative]}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: ["-120%", 0, -500],
              },
              next: {
                shadow: true,
                translate: ["120%", 0, -500],
              },
            }}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide className="relative w-full mb-4">
              <img
                className="w-full   object-cover"
                src="https://bouguessa.com/cdn/shop/products/Bouguessa_11-2_1933_800x.jpg?v=1681680386"
              ></img>
            </SwiperSlide>
            <SwiperSlide className="relative w-full mb-4">
              <img
                className="w-full  object-cover"
                src="https://bouguessa.com/cdn/shop/products/Bouguessa_11-2_1933_800x.jpg?v=1681680386"
              ></img>
            </SwiperSlide>
            <SwiperSlide className="relative w-full mb-4">
              <img
                className="w-full  object-cover"
                src="https://bouguessa.com/cdn/shop/products/Bouguessa_11-2_1933_800x.jpg?v=1681680386"
              ></img>
            </SwiperSlide>
            <SwiperSlide className="relative w-full mb-4">
              <img
                className="w-full object-cover"
                src="https://bouguessa.com/cdn/shop/products/Bouguessa_11-2_1933_800x.jpg?v=1681680386"
              ></img>
            </SwiperSlide>

            <div className="absolute flex flex-col gap-2 z-[6] top-8 right-3">
              <div className="rounded-[50%] h-[35px] w-[35px] bg-white flex items-center justify-center">
                <img className="h-[16px] w-[16px]" src={add}></img>
              </div>
              <div className="rounded-[50%] h-[35px] w-[35px] bg-white flex items-center justify-center">
                <img className="h-[16px] w-[16px]" src={share}></img>
              </div>
            </div>
          </Swiper>

          <Swiper
            direction={"vertical"}
            slidesPerView={1}
            spaceBetween={80}
            mousewheel={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Mousewheel, Autoplay]}
            className="h-screen max-h-[1280px] sticky self-start top-32 gap-4 flex-1 hidden lg:flex"
          >
            <SwiperSlide>
              <img
                className="w-full "
                src="https://bouguessa.com/cdn/shop/products/Bouguessa_11-2_1933_800x.jpg?v=1681680386"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full "
                src="https://bouguessa.com/cdn/shop/products/Bouguessa_11-2_1933_800x.jpg?v=1681680386"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full "
                src="https://bouguessa.com/cdn/shop/products/Bouguessa_11-2_1933_800x.jpg?v=1681680386"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full "
                src="https://bouguessa.com/cdn/shop/products/Bouguessa_11-2_1933_800x.jpg?v=1681680386"
              ></img>
            </SwiperSlide>
          </Swiper>

          <div className="pl-4 flex-1 pr-4">
            <div className="w-full flex-col gap-4 flex items-center justify-center  pb-8 border-b-[1px] border-black">
              <span className="uppercase">Lina Long Shirt Dress</span>
              <div className="flex gap-4 items-center text-[15px]">
                <span className="font-normal text-red-500 ">$249.50</span>
                <span className=" font-normal line-through text-[14px] ">
                  $499
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-4">
              <div>
                <span>
                  This sunshine yellow shade will boost your mood. The Lina Long
                  Shirt Dress looks just as cool on its own or worn unbuttoned,
                  as a Bikini cover up. Cut from yellow and white striped
                  cotton, it has a relaxed shape that creates a flowy movement
                  and crisscoss side ties.
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="">SIZE & FIT</span>
                <ul className="flex flex-col gap-2 pl-6 pr-6 list-disc">
                  <li>Fits true to size,take your normal size</li>
                  <li>Designed for a comfortable A-Line fit</li>
                  <li>Light Weight, Cotton fabric</li>
                  <li>Closes at the front with multiple buttons</li>
                  <li>Side Tie String Detail to enhance the waist</li>
                  <li>
                    Length In inches for Standard size- XS-54.5, S-55.5, M-55.5,
                    L-56.5, XL-56.5
                  </li>
                  <li>
                    Length In inches for Petite size- XS-52.5, S-53.5, M-53.5,
                    L-55.5, XL-55.5
                  </li>
                  <li>Model is 180 cm/5’11 and is wearing a size Small</li>
                  <li>Main fabric: 100% Cotton</li>
                  <li>Dry clean</li>
                  <li>Made in United Arab Emirates</li>
                  <li>
                    Need Help or advice? Call or whatsapp +971 52 679 9878
                  </li>
                </ul>
                <div className="flex items-center gap-2">
                  <span>Share</span>
                  <img className="h-[12px]" src={fb}></img>
                  <img className="h-[12px]" src={insta}></img>
                  <img className="h-[12px]" src={pin}></img>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <span>Size :</span>
                  <span className="underline underline-offset-4">
                    Size Chart
                  </span>
                </div>
                <div className="flex gap-3 tracking-[.2em] text-[16px] uppercase">
                  <div className="border-[1px] p-1 pl-2 pr-2 flex items-center justify-center font-light ">
                    XS
                  </div>
                  <div className="border-[1px] p-1 pl-2 pr-2 flex items-center justify-center font-light  ">
                    S
                  </div>
                  <div className="border-[1px] p-1 pl-2 pr-2 flex items-center justify-center font-light  ">
                    M
                  </div>
                  <div className="border-[1px] p-1 pl-2 pr-2 flex items-center justify-center font-light ">
                    L
                  </div>
                  <div className="border-[1px] p-1 pl-2 pr-2 flex items-center justify-center font-light t">
                    XL
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <span>Color :</span>
                </div>
                <div className="flex flex-wrap gap-3 text-[14px]  uppercase">
                  <div className="border-[1px] p-1 pl-2 pr-2 flex items-center justify-center font-light ">
                    Yellow/ White Stripes
                  </div>
                  <div className="border-[1px] p-1 pl-2 pr-2 flex items-center justify-center font-light ">
                    Black/ White Stripes
                  </div>
                  <div className="border-[1px] p-1 pl-2 pr-2 flex items-center justify-center font-light ">
                    Pink/ White Stripes
                  </div>
                  <div className="border-[1px] p-1 pl-2 pr-2 flex items-center justify-center font-light ">
                    Green/ White Stripes
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <span>Fit :</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  <div className="border-[1px] p-1 pl-2 pr-2 flex items-center justify-center font-light text-[14px] uppercase">
                    Standard
                  </div>
                  <div className="border-[1px] p-1 pl-2 pr-2 flex items-center justify-center font-light text-[14px] uppercase">
                    Petite
                  </div>
                </div>
              </div>

              <div className="border-[1px] border-borderColor  flex items-center justify-center font-light p-2 gap-4">
                <span>ADD TO CART</span>

                <span>$249.50</span>
              </div>

              <div className="border-[1px] uppercase border-black flex items-center justify-center font-normal p-2 gap-4">
                <span>Buy it now</span>
              </div>

              <div className="flex items-center justify-center gap-2 text-[12px]">
                <img src={heart} className="h-[14px] w-[14px]"></img>
                <span>Add to Wishlist</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[1440px] m-auto mt-12 lg:pb-12 z-[11] top-[50px] bg-background ">
          <div className="flex items-center justify-center h-[150px] uppercase tracking-[.2em]">
            You may also like
          </div>

          <div className="flex gap-4 pl-[200px] lg:pl-0 overflow-hidden overflow-x-auto flex-nowrap hide_scrollbar lg:justify-center lg:items-center">
            <div className="flex h-[400px]  lg:ml-0 lg:h-auto lg:w-[25%] min-w-[208px] flex-col gap-4">
              <div className="relative">
                <div className="text-[11px] pl-2 pr-2 p-1 bg-background absolute top-2 left-2 font-light rounded-[4px]">
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

            <div className="flex h-[400px] lg:ml-0 lg:h-auto lg:w-[25%] min-w-[208px] flex-col gap-4">
              <div className="relative">
                <div className="text-[11px] pl-2 pr-2 p-1 bg-background absolute top-2 left-2 font-light rounded-[4px]">
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

            <div className="flex h-[400px]  lg:ml-0 lg:h-auto lg:w-[25%] min-w-[208px] flex-col gap-4">
              <div className="relative">
                <div className="text-[11px] pl-2 pr-2 p-1 bg-background absolute top-2 left-2 font-light rounded-[4px]">
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
          </div>
        </div>

        <div className="w-full max-w-[1440px] m-auto lg:pb-12  top-[50px] bg-background ">
          <div className="flex items-center justify-center h-[150px] uppercase tracking-[.2em]">
            Recently Viewed
          </div>

          <div className="flex gap-4 pl-[200px] lg:pl-0 overflow-hidden overflow-x-auto flex-nowrap hide_scrollbar lg:justify-center lg:items-center">
            <div className="flex h-[400px]  lg:ml-0 lg:h-auto lg:w-[25%] min-w-[208px] flex-col gap-4">
              <div className="relative">
                <div className="text-[11px] pl-2 pr-2 p-1 bg-background absolute top-2 left-2 font-light rounded-[4px]">
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

            <div className="flex h-[400px] lg:ml-0 lg:h-auto lg:w-[25%] min-w-[208px] flex-col gap-4">
              <div className="relative">
                <div className="text-[11px] pl-2 pr-2 p-1 bg-background absolute top-2 left-2 font-light rounded-[4px]">
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

            <div className="flex h-[400px]  lg:ml-0 lg:h-auto lg:w-[25%] min-w-[208px] flex-col gap-4">
              <div className="relative">
                <div className="text-[11px] pl-2 pr-2 p-1 bg-background absolute top-2 left-2 font-light rounded-[4px]">
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Product;
