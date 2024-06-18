import React from 'react'

const Newsletter = () => {
    return (
        <div className="pt-[5rem] pb-[5rem]">
            <div className="text-center">
                <h1 className="text-[38px] sm:text-[28px] md:text-[45px] text-black font-bold uppercase">
                    Join our Email List for Exclusive Discounts!
                </h1>
                <p className="text-black text-opacity-70 w-[85%] md:w-[60%] mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ad quae repudiandae inventore qui minima voluptatem eum autem eveniet beatae est.
                </p>
                <div className="flex items-center space-x-2 mt-[3rem] justify-center">
                    {/* input */}
                    <input 
                        type="email" 
                        placeholder="Email Address" 
                        className="px-5 py-4 bg-gray-300 w-[40%] outline-none rounded-lg placeholder:text-gray-700" 
                    />
                    {/* subscribe button */}
                    <button className="px-8 py-4 bg-orange-700 hover:bg-orange-500 transition-all duration-200 
                     rounded-md text-white font-bold">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter