import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import grayDropdown from "../assets/img/svg/grayDropdown.svg";
import { Link } from "react-router-dom";

function CollectionProducts() {
  const latest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <>
      <Header />
      <div className="relative mt-[50px]">
        <div className="flex items-center justify-center h-[150px]">
          COLLECTIONS
        </div>
        <div className="grid text-[12px] top-[50px] z-10 bg-white sticky text-[#6a6a6a] border-[1px] border-[#d9d9d9] border-l-0 border-r-0 h-[50px] grid-cols-2">
          <div className="flex h-full items-center border-r-[1px] border-[#d9d9d9] justify-center uppercase">
            Filters
          </div>
          <div className="flex gap-1 h-full items-center justify-center uppercase">
            Sort{" "}
            <img
              src={grayDropdown}
              className="h-[16px] w-[16px] opacity-60"
            ></img>
          </div>
        </div>

        <div className=" grid grid-cols-2 gap-2 gap-y-4 pl-4 pr-4 pt-4">
          {latest.map((item) => (
            <>
              <Link to="/products/spring">
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
              </Link>
            </>
          ))}
        </div>

        <div className="flex w-full items-center justify-center flex-col gap-2">
          <div className="flex text-[12px]">
            {" "}
            <div className="flex mt-12 items-center justify-center  w-[50px]">
              1
            </div>
            <div className="flex mt-12 items-center justify-center w-[50px]">
              2
            </div>
            <div className="flex mt-12 items-center justify-center  w-[50px]">
              3
            </div>
            <div className="flex mt-12 items-center justify-center  w-[50px]">
              {">"}
            </div>
          </div>
          <div className="flex ">
            <div className=" bg-black  h-[2px] w-[50px]"></div>
            <div className=" bg-black opacity-25  h-[1px] w-[50px]"></div>
            <div className=" bg-black opacity-25 h-[1px] w-[50px]"></div>
            <div className=" bg-black opacity-25 h-[1px] w-[50px]"></div>
          </div>
        </div>

        <div className="w-full mt-12 sticky z-[11] top-[50px] bg-white ">
          <div className="flex items-center justify-center h-[150px]">
            Recently Viewed
          </div>

          <div className="flex flex-nowrap gap-4 overflow-hidden overflow-x-auto hide_scrollbar">
            <div className="flex min-h-[400px] ml-[200px] min-w-[208px] flex-col gap-4">
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

            <div className="flex min-h-[400px] min-w-[208px] flex-col gap-4">
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

            <div className="flex min-h-[400px] min-w-[208px] flex-col gap-4">
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CollectionProducts;
