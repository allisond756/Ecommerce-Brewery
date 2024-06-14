'use client'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from "next/image";
import BeerImg1 from "@/public/images/b1.png";
import BeerImg2 from "@/public/images/b2.png";
import { HiOutlineShoppingCart } from "react-icons/hi";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const Hero = () => {
    return (
        <Carousel 
            additionalTransfrom={0} 
            arrows={false} 
            autoPlay={true} 
            autoPlaySpeed={6000} 
            centerMode={false}
            infinite
            responsive={responsive}
            itemClass="item"
            showDots={false}
        >
            <div className="w-[100%] h-[88vh] sm:h-[75vh] flex items-center justify-center flex-col
            bg-lime-950 clip_path">
                <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto">
                    {/** Hero Img */}
                    <Image 
                        src={BeerImg1} 
                        alt="pint glass filled with beer" 
                        className="hidden md:block xl:p-[5rem] " 
                    />
                    {/** Hero info */}
                    <div>
                        <h1 className="text-[27px] lg:text[35px] font-semibold text-amber-500">
                            Superior Selection of
                        </h1>
                        <h1 className="text-[65px] lg:text-[90px]  leading-[5rem] uppercase text-white font-bold">
                            Superb <br /> Sips
                        </h1>
                        <p className="mt-[.5rem] text-white text-opacity-70 text-[16px]">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur illum 
                           maiores mollitia libero, ex consequuntur!
                        </p>
                        <button className="mt-[2rem] px-8 py-3 text-[14px] bg-orange-700 transition-all 
                          duration-200 hover:bg-orange-500 flex items-center rounded-md space-x-2 text-white">
                            <span>
                                <HiOutlineShoppingCart className="w-[1.7rem] h-[1.7rem]" />
                            </span>
                            <span className="font-medium text-nowrap">
                                Order Now
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/** 2nd Hero img */}
            <div className="w-[100%] h-[88vh] sm:h-[75vh] flex items-center justify-center flex-col
            bg-red-950 clip_path">
                <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto">
                    {/** Hero Img */}
                    <Image 
                        src={BeerImg2} 
                        alt="pint glass filled with beer" 
                        className="hidden md:block xl:p-[5rem] " 
                    />
                    {/** Hero info */}
                    <div>
                        <h1 className="text-[27px] lg:text[35px] font-semibold text-amber-500">
                            Tasty Terpenes in
                        </h1>
                        <h1 className="text-[65px] lg:text-[90px] leading-[5rem] uppercase text-white font-bold">
                            Bubbly <br /> Brews
                        </h1>
                        <p className="mt-[.5rem] text-white text-opacity-70 text-[16px]">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur illum 
                           maiores mollitia libero, ex consequuntur!
                        </p>
                        <button className="mt-[2rem] px-8 py-3 text-[14px] bg-orange-700 transition-all 
                          duration-200 hover:bg-orange-500 flex items-center rounded-md space-x-2 text-white">
                        <span>
                            <HiOutlineShoppingCart className="w-[1.7rem] h-[1.7rem]" />
                        </span>
                        <span className="font-medium text-nowrap">
                            Order Now
                        </span>
                    </button>
                    </div>
                </div>
            </div>
        </Carousel>
    )
}

export default Hero