import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import share from "../assets/img/svg/share.svg";
import add from "../assets/img/svg/add.svg";
import fb from "../assets/img/svg/fb.svg";
import pin from "../assets/img/svg/pin.svg";
import insta from "../assets/img/svg/insta.svg";
import heart from "../assets/img/svg/heart.svg";

function Product() {
  return (
    <>
      <Header />
      <div className="mt-[50px]">
        <div className="w-full">
          <div className="relative w-full mb-4">
            <img
              className=""
              src="https://bouguessa.com/cdn/shop/products/Bouguessa_11-2_1933_800x.jpg?v=1681680386"
            ></img>
            <div className="absolute flex flex-col gap-2 z-1 top-8 right-3">
              <div className="rounded-[50%] h-[35px] w-[35px] bg-white flex items-center justify-center">
                <img className="h-[16px] w-[16px]" src={add}></img>
              </div>
              <div className="rounded-[50%] h-[35px] w-[35px] bg-white flex items-center justify-center">
                <img className="h-[16px] w-[16px]" src={share}></img>
              </div>
            </div>
          </div>
        </div>

        <div className="pl-4 pr-4">
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
                Shirt Dress looks just as cool on its own or worn unbuttoned, as
                a Bikini cover up. Cut from yellow and white striped cotton, it
                has a relaxed shape that creates a flowy movement and crisscoss
                side ties.
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
                <li>Need Help or advice? Call or whatsapp +971 52 679 9878</li>
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
                <span className="underline underline-offset-4">Size Chart</span>
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

        <div className="w-full mt-8  top-[50px] bg-white ">
          <div className="flex items-center justify-center h-[150px]">
            You may also like
          </div>

          <div className="flex gap-4 overflow-hidden overflow-x-auto flex-nowrap hide_scrollbar">
            <div className="flex min-h-[400px] ml-[30vw] min-w-[208px] flex-col gap-4">
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

            <div className="flex min-h-[400px] min-w-[208px] flex-col gap-4">
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

            <div className="flex min-h-[400px] min-w-[208px] flex-col gap-4">
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
          </div>
        </div>

        <div className="w-full mt-2   top-[50px] bg-white ">
          <div className="flex items-center justify-center h-[150px]">
            Recently Viewed
          </div>

          <div className="flex gap-4 overflow-hidden overflow-x-auto flex-nowrap hide_scrollbar">
            <div className="flex min-h-[400px] ml-[30vw] min-w-[208px] flex-col gap-4">
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

            <div className="flex min-h-[400px] min-w-[208px] flex-col gap-4">
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

            <div className="flex min-h-[400px] min-w-[208px] flex-col gap-4">
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Product;
