import React from 'react'
import { RiBeerFill } from "react-icons/ri"

const Footer = () => {
    return (
        <div className="pt-[5rem] pb-[3rem] bg-gray-900">
            <div className="w-[80%] pb-[2rem] border-b-[2px] border-b-gray-300 border-opacity-50 mx-auto grid grid-cols-1
             md:grid-cols-2 lg:grid-cols-4 gap-[3rem] items-start">
                {/* site logo */}
                <div>
                    <div className="flex items-center text-white space-x-1">
                        <RiBeerFill className="w-[1.2rem] h-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-amber-500" />
                        <h1 className="text-[20px] sm:text-[30px] font-semibold">
                            BismuthBrewing
                        </h1>
                    </div>
                    <p className="text-white text-opacity-60 mt-[0.4rem]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <p className="mt-[1rem] text-white">
                        support@bismuthbrew.com
                    </p>
                    <p>
                        +(123)-456-7890
                    </p>
                </div>
                <div>
                    <h1 className="text-[23px] font-semibold mb-[2rem] text-white">Products</h1>
                    <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all 
                     duration-200 cursor-pointer w-fit">
                        Pale Ale
                    </p>
                    <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all 
                     duration-200 cursor-pointer w-fit">
                        India Pale Ale
                    </p>
                    <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all 
                     duration-200 cursor-pointer w-fit">
                        Double IPA
                    </p>
                    <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all 
                     duration-200 cursor-pointer w-fit">
                        Stout
                    </p>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer