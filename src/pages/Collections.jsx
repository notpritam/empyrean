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
      <div className="mt-[50px] pl-4 pr-4 bg-background">
        <div className="h-[100px] w-full flex item-center justify-center">
          <span className="flex items-center uppercase tracking-[.2em] text-[16px]">
            Collections
          </span>
        </div>

        <div className="grid grid-cols-1 pl-4 pr-4 pb-20 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {latest.map((item, index) => (
            <>
              <a href="/collections/spring">
                <div
                  key={index}
                  className="overflow-hidden rounded-md  flex items-center justify-center relative z-[1] h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] xl:h-[700px] w-full bg-black"
                >
                  <img
                    className="absolute top-0 left-0 z-0 object-cover w-full h-full opacity-60"
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
