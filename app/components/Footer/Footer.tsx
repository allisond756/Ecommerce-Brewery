import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import { RiBeerFill } from "react-icons/ri"

const Footer = () => {
    return (
        <div className="pt-[5rem] pb-[3rem] bg-gray-900">
            <div className="w-[80%] pb-[2rem] border-b-[2px] border-b-gray-300 border-opacity-50 mx-auto grid grid-cols-1
             md:grid-cols-3 lg:grid-cols-4 gap-[3rem] items-start">
                {/* site logo */}
                <div>
                    <div className="flex items-center text-white space-x-1">
                        <RiBeerFill className="w-[1.5rem] h-[1.5rem] sm:w-[1.5rem] sm:h-[1.5rem] text-amber-500" />
                        <h1 className="text-[20px] sm:text-[20px] font-semibold">
                            BismuthBrewing
                        </h1>
                    </div>
                    <p className="text-white text-opacity-60 mt-[0.4rem] text-[15px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <p className="mt-[1rem] text-white text-[15px]">
                        support@bismuthb.com
                    </p>
                    <p className="text-[15px] text-amber-500">
                        +(123)-456-7890
                    </p>
                </div>
                {/* footer products */}
                <div>
                    <h1 className="text-[20px] font-semibold mb-[2rem] text-white">Products</h1>
                    <p className="mt-[0.7rem] text-white opacity-60 hover:text-amber-500 transition-all 
                     duration-200 cursor-pointer w-fit">
                        Pale Ale
                    </p>
                    <p className="mt-[0.7rem] text-white opacity-60 hover:text-amber-500 transition-all 
                     duration-200 cursor-pointer w-fit">
                        India Pale Ale
                    </p>
                    <p className="mt-[0.7rem] text-white opacity-60 hover:text-amber-500 transition-all 
                     duration-200 cursor-pointer w-fit">
                        Double IPA
                    </p>
                    <p className="mt-[0.7rem] text-white opacity-60 hover:text-amber-500 transition-all 
                     duration-200 cursor-pointer w-fit">
                        Stout
                    </p>
                </div>
                {/* quick links */}
                <div>
                    <h1 className="text-[20px] font-semibold mb-[2rem] text-white">Quick Links</h1>
                    <p className="mt-[0.7rem] text-white opacity-60 hover:text-amber-500 transition-all 
                     duration-200 cursor-pointer w-fit">
                        Home
                    </p>
                    <p className="mt-[0.7rem] text-white opacity-60 hover:text-amber-500 transition-all 
                     duration-200 cursor-pointer w-fit">
                        Shop
                    </p>
                    <p className="mt-[0.7rem] text-white opacity-60 hover:text-amber-500 transition-all 
                     duration-200 cursor-pointer w-fit">
                        Menu
                    </p>
                    <p className="mt-[0.7rem] text-white opacity-60 hover:text-amber-500 transition-all 
                     duration-200 cursor-pointer w-fit">
                        Contact
                    </p>
                </div>
                {/* hours of op */}
                <div>
                    <h1 className="text-[20px] font-semibold mb-[2rem] text-white">
                        Business Hours
                    </h1>
                    <p className="text-white text-[15px]">
                        Sun -  Thurs: <span className="text-amber-500">11am - 12am</span>
                    </p>
                    <p className="text-white text-[15px]">
                        Fri & Sat: <span className="text-amber-500">11am - 2am</span>
                    </p>
                    {/* socials */}
                    <div className="flex mt-[2rem] items-center space-x-6">
                        <FaFacebook className="w-[1.5rem] h-[1.5rem] text-blue-500" />
                        <FaInstagram className="w-[1.5rem] h-[1.5rem] text-pink-500"/>
                        <FaTwitter className="w-[1.5rem] h-[1.5rem] text-blue-300"/>
                    </div>
                </div>
            </div>
            {/* copyright */}
            <p className="text-center text-white opacity-50 mt-[1.5rem]">
                Copyright &copy; 2024{" "}
                <span className="text-amber-500">Bismuth Brewing</span>. All rights reserved.
            </p>
        </div>
    )
}

export default Footer