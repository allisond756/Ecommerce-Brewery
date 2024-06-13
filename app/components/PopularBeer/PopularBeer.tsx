'use client'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BeerCard from "./BeerCard";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const PopularBeer = () => {
    return (
        <div className="pt-[3rem] pb-[3rem]">
            <h1 className="heading">
                Popular <span className="text-amber-600"> Beers</span>
            </h1>
            <div className="w-[80%] mt-[4rem] mx-auto">
                <Carousel 
                    additionalTransfrom={0} 
                    arrows={true} 
                    autoPlay={false} 
                    centerMode={false}
                    infinite
                    responsive={responsive}
                    itemClass="item"
                    showDots={true}
                    className="popular-beer-carousel"
                >
                    {/* Popular Beer Card */}
                    <BeerCard 
                        title="beer" 
                        image="/images/b1.png" 
                        reviews="6"
                        price="$7.00"
                    />
                    <BeerCard 
                        title="beer" 
                        image="/images/b2.png" 
                        reviews="6"
                        price="$7.00"
                    />
                    <BeerCard 
                        title="beer" 
                        image="/images/b3.png" 
                        reviews="6"
                        price="$7.00"
                    />
                    <BeerCard 
                        title="beer" 
                        image="/images/b4.png" 
                        reviews="6"
                        price="$7.00"
                    />
                    <BeerCard 
                        title="beer" 
                        image="/images/b5.png" 
                        reviews="6"
                        price="$7.00"
                    />
                    <BeerCard 
                        title="beer" 
                        image="/images/b6.png" 
                        reviews="6"
                        price="$7.00"
                    />
                    <BeerCard 
                        title="beer" 
                        image="/images/b7.png" 
                        reviews="6"
                        price="$7.00"
                    />
                    <BeerCard 
                        title="beer" 
                        image="/images/b8.png" 
                        reviews="6"
                        price="$7.00"
                    />
                    <BeerCard 
                        title="beer" 
                        image="/images/b9.png" 
                        reviews="6"
                        price="$7.00"
                    />
                </Carousel>
            </div>
        </div>
    )
}

export default PopularBeer