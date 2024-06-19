import Image from "next/image";
import DeliveryImg from "@/public/images/delivery.svg";
import { RiBeerFill, RiEBike2Fill } from "react-icons/ri";
import { HiOutlineIdentification } from "react-icons/hi";

const Delivery = () => {
    return (
        <div className="pt-[8rem] pb-[3rem]">
            <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[2rem]">
                {/* delivery img */}
                <div
                    data-aos='fade-right' 
                    data-aos-anchor-placement='top-center'
                >
                    <Image src={DeliveryImg} alt="delivery svg" />
                </div>
                {/* info */}
                <div>
                    <h1 className="text-[30px] uppercase md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold leading-[3rem] md:leading-[4rem]">
                        Get Your <span className="text-amber-600"> Favorite Drinks</span> Delivered to You.
                    </h1>
                    <p className="mt-[2rem] text-black text-[17px] text-opacity-70">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Iste quod ipsam autem corrupti alias facilis suscipit dicta impedit dolores repudiandae.
                    </p>
                    <div className="flex items-center space-x-3 mt-[2rem]">
                        <RiEBike2Fill className="w-[2rem] h-[2rem] text-amber-600" />
                        <h1 className="text-[18px] text-black font-medium ">Delivery in 30 minutes</h1>
                    </div>
                    <div className="flex items-center space-x-3 mt-[1rem]">
                        <RiBeerFill className="w-[2rem] h-[2rem] text-amber-600" />
                        <h1 className="text-[18px] text-black font-medium ">Guaranteed cold beer </h1>
                    </div>
                    <div className="flex items-center space-x-3 mt-[1rem]">
                        <HiOutlineIdentification className="w-[2rem] h-[2rem] text-amber-600" />
                        <h1 className="text-[18px] text-black font-medium ">Must present I.D. at delivery</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Delivery