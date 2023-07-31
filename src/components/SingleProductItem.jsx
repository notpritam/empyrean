import React from "react";
import { Link } from "react-router-dom";

function SingleProductItem({
  productId,
  stock,
  image,
  hoverImage,
  price,
  discountPrice,
  name,
  _id,
}) {
  return (
    <>
      <Link to={"/products/" + productId}>
        <div className="flex flex-col gap-4">
          <div className="relative">
            <div className="text-[11px] pl-2 pr-2 p-1 bg-white absolute top-2 left-2 font-light rounded-[4px]">
              {stock}
            </div>
            <img src={image}></img>
            {console.log(image, "imgae")}
          </div>

          <div className="flex flex-col items-center gap-2">
            <span className="uppercase text-[14px] font-light">{name}</span>
            <div className="flex gap-4 items-center text-[15px]">
              <span className="font-normal text-red-500 ">
                ${discountPrice}
              </span>
              <span className=" font-normal line-through text-[14px] ">
                ${price}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default SingleProductItem;
