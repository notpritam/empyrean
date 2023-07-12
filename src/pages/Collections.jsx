import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Collections() {
  const latest = [
    {
      url: "https://bouguessa.com/cdn/shop/files/BOUGUESSA_HOMEPAGE_03-min_750x960_crop_center.jpg?v=1676657550",
      title: "Spring Summer 2023",
      subtitle: "Collection",
      link: "",
    },
    {
      url: "https://bouguessa.com/cdn/shop/files/suit_750x960_crop_center.jpg?v=1662552536",
      title: "Fall Winter 2022",
      subtitle: "",
      link: "",
    },
    {
      url: "https://bouguessa.com/cdn/shop/files/Final_CL_750x960_crop_center.jpg?v=1644565581",
      title: "Spring Summer 2022",
      subtitle: "",
      link: "",
    },
    {
      url: "https://bouguessa.com/cdn/shop/files/collection_750x960_crop_center.jpg?v=1629878106",
      title: "Fall Winter 2021",
      subtitle: "",
      link: "",
    },
  ];
  return (
    <>
      <Header />
      <div className="mt-[50px] pl-4 pr-4">
        <div className="h-[100px] w-full flex item-center justify-center">
          <span className="uppercase flex items-center">Collections</span>
        </div>

        <div className="flex flex-col gap-4">
          {latest.map((item, index) => (
            <>
              <a href="/collections/spring">
                <div
                  key={index}
                  className="overflow-hidden rounded-md  flex items-center justify-center relative z-[1] h-[550px] w-full bg-black"
                >
                  <img
                    className=" absolute z-0 top-0 left-0 h-full w-full object-cover opacity-60"
                    src={item.url}
                  ></img>

                  <div className="uppercase text-white items-center relative z-[1] flex flex-col gap-4">
                    <span className="text-[14px]">COLLECTION</span>
                    <span className="text-[18px]">{item.title}</span>
                  </div>
                </div>
              </a>
            </>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Collections;
