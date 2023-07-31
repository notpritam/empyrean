import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleProductItem from "./SingleProductItem";

function FeaturedSection({ collectionId, count }) {
  const latest = [11, 32, 23, 34];

  const [products, setProducts] = useState([]);
  const [featured, setFeatured] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProducts(count, collectionId);
  }, []);

  const getProducts = (total, collection) => {
    axios
      .get(
        `http://localhost:3000/collections/home?id=` +
          collection +
          `&count=` +
          total
      )
      .then((res) => {
        setProducts(res.data.products);
        console.log(res.data.products);
        setFeatured(res.data.featured[0].featuredImage);
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
            {/* {console.log(featured, "testt")} */}
            {featured[0].subtitle}
          </span>
          <div className="pl-20 pr-20">
            <img src={featured[0].image}></img>
          </div>
          <span>{featured[0].title}</span>

          <Link className="font-light " to={"/"}>
            <span>{featured[0].linkText}</span>
          </Link>
        </div>

        <div className="flex-1">
          <Link to={"/collections"}>
            <img className="w-full h-full" src={featured[1].image}></img>
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:gap-12">
        <div className="grid grid-cols-2 gap-2 pt-12 pl-4 pr-4 xl:gap-[60px] md:gap-[24px] lg:grid-cols-4 gap-y-4">
          {products.map((item) => (
            <SingleProductItem
              key={item._id}
              _id={item._id}
              image={
                "https://bouguessa.com/cdn/shop/products/Bouguessa_11-2_1927_400x.jpg?v=1681680386"
              }
              name={item.name}
              price={item.price}
              discountPrice={item.discountPrice}
              productId={item.productId}
              stock={"On Sale"}
            />
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
