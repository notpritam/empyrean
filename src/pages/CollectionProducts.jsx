import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import grayDropdown from "../assets/img/svg/grayDropdown.svg";
import { Link } from "react-router-dom";
import Filters from "../components/Filters";
import Sort from "../components/Sort";
import SingleProductItem from "../components/SingleProductItem";

function CollectionProducts() {
  const latest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const [filterState, setFilterState] = useState(false);
  const [sortState, setSortState] = useState(false);
  return (
    <>
      <Header />
      <Filters filterState={filterState} setFilterState={setFilterState} />
      <Sort sortState={sortState} setSortState={setSortState} />
      <div className="relative mt-[50px] bg-background">
        <div className="flex items-center justify-center h-[150px]">
          COLLECTIONS
        </div>

        {/* Mobile Filter and Sort */}
        <div className="grid sm:hidden text-[12px] top-[50px] z-10 bg-white sticky text-[#6a6a6a] border-[1px] border-[#d9d9d9] border-l-0 border-r-0 h-[50px] grid-cols-2">
          <div
            onClick={() => {
              setFilterState(true);
            }}
            className="flex h-full items-center border-r-[1px] border-[#d9d9d9] justify-center uppercase"
          >
            Filters
          </div>
          <div
            onClick={() => {
              setSortState(true);
            }}
            className="flex items-center justify-center h-full gap-1 uppercase"
          >
            Sort
            <img
              src={grayDropdown}
              className="h-[16px] w-[16px] opacity-60"
            ></img>
          </div>
        </div>

        {/* Medium Sort and Filter */}

        <div className="hidden sm:grid text-[12px] top-[50px] z-10 bg-white sticky text-[#6a6a6a] border-[1px] border-[#d9d9d9] border-l-0 border-r-0 h-[50px] grid-cols-4">
          <div></div>
          <div></div>
          <div className="hidden lg:flex"></div>
          <div
            onClick={() => {
              setSortState(true);
            }}
            className="flex items-center justify-center h-full gap-1 uppercase"
          >
            Sort
            <img
              src={grayDropdown}
              className="h-[16px] w-[16px] opacity-60"
            ></img>
          </div>
          <div
            onClick={() => {
              setFilterState(true);
            }}
            className="flex lg:hidden h-full items-center border-r-[1px] border-[#d9d9d9] justify-center uppercase"
          >
            Filters
          </div>
        </div>

        {/* Products */}

        <div className="flex pt-12 relative">
          <div className="top-24 items-start self-start p-4 sticky overflow-auto w-[360px] hidden lg:flex flex-col ">
            <div className="flex flex-col w-full gap-2 p-4 pt-0">
              <div className="flex items-center justify-between">
                <div className="uppercase text-[10px] tracking-[.2em] ">
                  <span>Categories</span>
                </div>
              </div>
              <div className="flex  flex-col gap-2 text-[14px] text-subtitle duration-700 ease-in-out">
                <span>Coats & Long Jackets</span>
                <span>Dresses</span>
              </div>
            </div>

            <div className="flex flex-col w-full gap-2 p-4 ">
              <div className="flex items-center justify-between">
                <div className="uppercase text-[10px] tracking-[.2em] ">
                  <span>Category</span>
                </div>
              </div>
              <div className="flex  flex-col gap-2 text-[14px] text-subtitle duration-700 ease-in-out">
                <span>Men</span>
                <span>Women</span>
              </div>
            </div>
            <div className="flex flex-col w-full gap-2 p-4 ">
              <div className="flex items-center justify-between">
                <div className="uppercase text-[10px] tracking-[.2em] ">
                  <span>Color</span>
                </div>
              </div>
              <div className="flex  flex-col gap-2 text-[14px] text-subtitle duration-700 ease-in-out">
                <span>Beige</span>
                <span>Black</span>
                <span>Blue</span>
                <span>Charcoal</span>
                <span>Dark Blue</span>
                <span>Dark Green</span>
                <span>Green</span>
                <span>Greige</span>
              </div>
            </div>
            <div className="flex flex-col w-full gap-2 p-4 ">
              <div className="flex items-center justify-between">
                <div className="uppercase text-[10px] tracking-[.2em] ">
                  <span>Fit</span>
                </div>
              </div>
              <div className="flex  flex-col gap-2 text-[14px] text-subtitle duration-700 ease-in-out">
                <span>Loose</span>
                <span>Petite</span>
                <span>Standard</span>
              </div>
            </div>
            <div className="flex flex-col w-full gap-2 p-4 ">
              <div className="flex items-center justify-between">
                <div className="uppercase text-[10px] tracking-[.2em] ">
                  <span>Size</span>
                </div>
              </div>
              <div className="flex  flex-col gap-2 text-[14px] text-subtitle duration-700 ease-in-out">
                <span>XS</span>
                <span>S</span>
                <span>M</span>
                <span>L</span>
                <span>XL</span>
                <span>XXL</span>
              </div>
            </div>

            <div className="flex flex-col w-full gap-2 p-4 ">
              <div className="flex items-center justify-between">
                <div className="uppercase text-[10px] tracking-[.2em] ">
                  <span>Size</span>
                </div>
              </div>
              <div className="flex  flex-col gap-2 text-[14px] text-subtitle duration-700 ease-in-out">
                <span>XS</span>
                <span>S</span>
                <span>M</span>
                <span>L</span>
                <span>XL</span>
                <span>XXL</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pl-4 pr-4 sm:gap-6 md:gap-10 lg:gap-12 xl:gap-[60px] pt-46 sm:grid-cols-3 xl:grid-cols-4 gap-y-8">
            {latest.map((item, index) => (
              <>
                <SingleProductItem
                  key={index}
                  _id={index}
                  image={
                    "https://bouguessa.com/cdn/shop/products/Bouguessa_11-2_1927_400x.jpg?v=1681680386"
                  }
                  name={"Test Name" + index}
                  price={"21" + index}
                  discountPrice={"16" + index}
                  productId={index}
                  stock={"On Sale"}
                />
              </>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex flex-col items-center justify-center w-full gap-2">
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

        {/* Recently Viewed */}

        <div className="w-full max-w-[1440px] m-auto mt-12 lg:pb-12 sticky z-[11] top-[50px] bg-background ">
          <div className="flex items-center justify-center h-[150px]">
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

export default CollectionProducts;
