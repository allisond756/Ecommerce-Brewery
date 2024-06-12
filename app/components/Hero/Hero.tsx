'use client'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from "next/image";
import BeerImg1 from "@/public/images/b1.png";
import BeerImg2 from "@/public/images/b2.png";

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
            autoPlaySpeed={4000} 
            centerMode={false}
            infinite
            responsive={responsive}
            itemClass="item"
            showDots={true}
        >
            <div className="w-[100%] h-[88vh] flex items-center justify-center flex-col
            bg-lime-950 clip_path">
                <div>
                    <Image src={BeerImg1} alt="pint glass filled with beer" />
                </div>
            </div>
        </Carousel>
    )
}

export default Hero