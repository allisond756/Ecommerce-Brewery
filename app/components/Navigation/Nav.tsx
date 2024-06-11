import Link from "next/link";
import React from 'react'
import { BiShoppingBag } from "react-icons/bi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { RiBeerFill } from "react-icons/ri";

const Nav = () => {
    return (
        <div className="h-[12vh] bg-white">
            <div className="sm:w-[90%] w-[95%] mx-auto flex h-[100%] items-center justify-between">
                {/** Logo */}
                <div className="flex items-center space-x-1">
                    <RiBeerFill className="w-[1.2rem] h-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-amber-400" />
                    <h1 className="text-[20px] sm:text-[30px] font-semibold">
                        BismuthBrewing
                    </h1>
                </div>
                {/** Nav links */}
                <ul className="hidden xl:flex items-center space-x-10">
                    <li className="text-[20px] font-medium hover:text-lime-600">
                        <Link href='/'>Home</Link>
                    </li>
                    <li className="text-[20px] font-medium hover:text-lime-600">
                        <Link href='/'>Shop</Link>
                    </li>
                    <li className="text-[20px] font-medium hover:text-lime-600">
                        <Link href='/'>Menu</Link>
                    </li>
                    <li className="text-[20px] font-medium hover:text-lime-600">
                        <Link href='/'>Blog</Link>
                    </li>
                    <li className="text-[20px] font-medium hover:text-lime-600">
                        <Link href='/'>Contact</Link>
                    </li>
                </ul>
                {/** buttons */}
                <div className="flex items-center space-x-4">
                    <button className="px-4 py-2 sm:px-8 sm:py-3 text-[14px] sm:text-[14px] bg-indigo-500 
                        transition-all duration-200 hover:bg-lime-600 flex items-center rounded-md space-x-2 text-white">
                        <span>
                            <HiOutlineShoppingCart className="w-[1.3rem] h-[1.3rem] sm:w-[1.7rem] sm:h-[1.7rem]" />
                        </span>
                        <span className="font-medium text-nowrap sm:hidden xs:hidden">
                            Order Now
                        </span>
                    </button>
                    <button className="sm:px-8 sm:py-3 px-4 py-2 hover:bg-lime-600 transition-all duration-200 bg-orange-400
                      flex items-center rounded-md text-white">
                        <BiShoppingBag className="w-[1.3rem] h-[1.3rem] sm:w-[1.7rem] sm:h-[1.7rem]" />
                    </button>
                    <HiBars3BottomRight className="lg:hidden w-[2rem] h-[2rem] text-black" />
                </div>
            </div>
        </div>
    )
}

export default Nav