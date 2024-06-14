import React from 'react'
import { BiPhone } from "react-icons/bi"

const Reservation = () => {
    return (
        <div className="pt-[5rem] relative mt-[2rem] pb-[5rem] mb-[3rem] bg-center bg-cover bg-[url('/images/bg-dark.jpg')]">
            <div className="absolute w-full h-full bg-[#000000a6] top-0 left-0 right-0 bottom-0"></div>
            <div className="w-[80%] relative z-[20] mx-auto grid grid-cols-1 lg:grod-cols-2 items-center gap-[3rem]">
                {/* info */}
                <div>
                    <h1 className="text-[30px] md:text-[40px] lg:text-[50px] text-white font-bold leading-[3rem] md:leading-[4rem]">
                        Want to see how the beer gets made? Come tour our facilities!
                    </h1>
                    <p className="text-[17px] mt-[1rem] text-white text-opacity-70">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque nulla debitis 
                        obcaecati quasi cupiditate adipisci fugiat tempora tenetur laboriosam soluta!
                    </p>
                    <div className="flex mt-[2rem] items-center space-x-4">
                        <div className="w-[3rem] h-[3rem] bg-amber-600 rounded-full flex items-center justify-center flex-col">
                            <BiPhone className="w-[1.7rem] h-[1.7rem] text-white" />
                        </div>
                        <div>
                            <h1 className="text-[25px] text-white font-semibold">Quick book by calling:</h1>
                            <h1 className="text-amber-600 text-[30px] font-bold">+0123 456 7890</h1>
                        </div>
                    </div>
                </div>
                {/* form */}
            </div>
        </div>
    )
}

export default Reservation