import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import axios from "axios";
import { gsap } from "gsap";
import linkImage from "../assets/img/svg/link.svg";
import { Link } from "react-router-dom";

function Hero() {
  const [loading, setLoading] = useState(true);
  const [heroItem, setHeroItem] = useState(null);
  const heroImage = useRef();

  useLayoutEffect(() => {
    gsap.fromTo(
      heroImage.current,
      {
        scale: 1.6,
      },
      {
        scale: 1,
        duration: 0.3,
      }
    );
  }, []);
  useEffect(() => {
    setLoading(true);
    getHeroDetails();
  }, []);
  const getHeroDetails = () => {
    axios.get("http://localhost:3000/hero").then((res) => {
      setHeroItem(res.data[0]);
      setLoading(false);
      console.log(res.data[0]);
    });
  };

  if (loading) {
    return (
      <>
        <div className="m-auto flex items-center justify-center">
          Loading...
        </div>
      </>
    );
  }
  return (
    <div className="relative overflow-hidden min-h-[450px] sm:min-h-[480px] md:min-h-[500px] lg:min-h-[600px] mt-[50px] flex items-center justify-center">
      <img
        ref={heroImage}
        className="absolute top-0 bottom-0 object-cover w-full h-full "
        src={heroItem.images[0]}
      ></img>

      <div className=" z-10  flex flex-col text-white items-center gap-4 tracking-[.2em]">
        <span className="text-[12px] font-light">{heroItem.subtitle}</span>
        <span className="text-[20px]">{heroItem.title}</span>
        <Link
          className="flex items-end justify-center gap-1"
          to={heroItem.link}
        >
          <span className="text-[12px] underline underline-offset-4">
            {heroItem.linkText}
          </span>
          <img className="h-[17px] " src={linkImage}></img>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
