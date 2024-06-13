import React from 'react'
import Img1 from '@/public/images/f1.jpg'
import Img2 from '@/public/images/f2.jpg'
import Img3 from '@/public/images/f3.jpg'
import Image from "next/image"

const Feature = () => {
    return (
        <div className="pt-[5rem] pb-[3rem]">
            {/* Header */}
            <h1 className="heading">
                beer crafted with 
                <span className="text-amber-600"> pride</span>
            </h1>
            {/* beer cards */}
            <div className="w-[90%] md:w-[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto grid grid-cols-1 
              md:grid-cols-3 lg:grid-cols-3 gap-[3rem] ">
                {/* card #1 */}
                <div>
                    <div className="p-6 hover:bg-white rounded-lg transition-all duration-200">
                        <Image src={Img1} alt='beer barrels' className="rounded-3xl"  />
                        <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
                            Fresh Hops
                        </h1>
                        <p className="mt-[0.2rem] text-[13px] text-black text-opacity-60 text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
                {/* card #2 */}
                <div>
                    <div className="p-6 hover:bg-white rounded-lg transition-all duration-200">
                        <Image src={Img2} alt='beer barrels' className="rounded-3xl"  />
                        <h1 className="mt-[1.5rem] text-nowrap text-center text-[24px] text-black font-semibold">
                             Ice Cold Taps
                        </h1>
                        <p className="mt-[0.2rem] text-[13px] text-black text-opacity-60 text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
                {/* card #3 */}
                <div>
                    <div className="p-6 hover:bg-white rounded-lg transition-all duration-200">
                        <Image src={Img3} alt='beer barrels' className="rounded-3xl"  />
                        <h1 className="mt-[1.5rem] text-center text-nowrap text-[24px] text-black font-semibold">
                            Your Favorites
                        </h1>
                        <p className="mt-[0.2rem] text-[13px] text-black text-opacity-60 text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature