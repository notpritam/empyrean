import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FeaturedSection() {
  const latest = [11, 32, 23, 34];

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProducts(4, "spring-summer-2023");
  }, []);

  const getProducts = (count, collection) => {
    axios
      .get(
        `http://localhost:3000/featured?count=` + count + `&coll=` + collection
      )
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (loading) {
    return (
      <>
        <div className="w-full h-full m-auto flex items-center justify-center">
          Loading...
        </div>
      </>
    );
  }
  return (
    <div className="m-auto max-w-[1440px]">
      <div className="flex flex-col  gap-8 pt-12 pl-4 pr-4 md:flex-row md:gap-0">
        <div className="flex flex-col items-center justify-center flex-1 gap-4">
          <span className="uppercase text-[14px] font-light">
            PERfectly Paired
          </span>
          <div className="pl-20 pr-20">
            <img src="https://bouguessa.com/cdn/shop/products/Bouguessa_11-2_1539_6869babc-6792-4f01-8a0d-963cfc0432a7_1500x.jpg?v=1677002969"></img>
          </div>
          <span>Petra Printed Set</span>

          <Link className="font-light " to={"/"}>
            <span>Discover</span>
          </Link>
        </div>

        <div className="flex-1">
          <Link to={"/collections"}>
            <img
              className="w-full h-full"
              src="https://bouguessa.com/cdn/shop/products/Bouguessa_11-2_2400_1000x.jpg?v=1679168976"
            ></img>
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:gap-12">
        <div className="grid grid-cols-2 gap-2 pt-12 pl-4 pr-4 xl:gap-[60px] md:gap-[24px] lg:grid-cols-4 gap-y-4">
          {products.map((item) => (
            <>
              <Link to={"/products/" + item.productId}>
                <div key={item._id} className="flex flex-col gap-4">
                  <div className="relative">
                    <div className="text-[11px] pl-2 pr-2 p-1 bg-white absolute top-2 left-2 font-light rounded-[4px]">
                      ON SALE
                    </div>
                    <img
                      src={
                        "https://bouguessa.com/cdn/shop/products/Bouguessa_11-2_1927_600x.jpg?v=1681680386"
                      }
                    ></img>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <span className="uppercase text-[14px] font-light">
                      {item.name}
                    </span>
                    <div className="flex gap-4 items-center text-[15px]">
                      <span className="font-normal text-red-500 ">
                        ${item.discountPrice}
                      </span>
                      <span className=" font-normal line-through text-[14px] ">
                        ${item.price}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>

        <Link to={"/collections/spring-summer-2023"}>
          <div className="flex items-center justify-center w-full">
            <div className="text-[12px] flex items-center justify-center border-[1px] border-black pt-[10px] pb-[10px] pl-[22px] pr-[22px] uppercase font-light">
              View All Products
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default FeaturedSection;
