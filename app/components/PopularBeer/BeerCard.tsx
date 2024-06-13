import Image from "next/image";
import React from 'react'
import { FaStar } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";

interface Props {
    title: string;
    image: string;
    price: string;
    reviews: string;
}

const BeerCard = ({ image, price, reviews, title }:Props) => {
    return (
        <div className="bg-white p-6 rounded-lg m-3">
            {/* img div */}
            <div className="w-[200px] mx-auto h-[200px]">
                <Image 
                    src={image}
                    alt={title}
                    width={200}
                    height={200}
                    className="w-[100%] h-[100%] object-cover"
                />
            </div>
            <h1 className="mt-[1.3rem] text-[22px] text-black font-semibold">
                {title}
            </h1>
            <div className="flex items-center mt-[0.5rem] space-x-3">
                <div className="flex items-center">
                    <FaStar className="w-[1rem] h-1[rem] text-yellow-500 " />
                    <FaStar className="w-[1rem] h-1[rem] text-yellow-500 " />
                    <FaStar className="w-[1rem] h-1[rem] text-yellow-500 " />
                    <FaStar className="w-[1rem] h-1[rem] text-yellow-500 " />
                    <FaStar className="w-[1rem] h-1[rem] text-yellow-500 " />
                </div>
                <div className="text-black opacity-80">[{reviews}]</div>
            </div>
            <p className="mt-[0.5rem] text-black text-opacity-70">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="flex mt-[1.4rem] item-center justify-between">
                <h1 className="text-[25px] text-red-600 font-bold">{price}<span className="text-black text-[18px] font-normal">/a pint</span></h1>
                <button className="px-4 py-2 hover:bg-orange-500 transition-all duration-200 bg-orange-700 items-center roundedd-md text-white">
                    <HiOutlineShoppingCart className="w-[1.3rem] h-[1.3rem] " />
                </button>
            </div>
        </div>
    )
}

export default BeerCard