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
            <div className="w-[90%] mt-[4rem] mx-auto">
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
                        title="Lundy Pale Ale"
                        manufacturer="Harbour Brewing Company"
                        image="/images/b1.png" 
                        reviews="6"
                        price="$4.00"
                        abv="3.8%"
                    />
                    <BeerCard 
                        title="Fader Juicy IPA"
                        manufacturer="Laine Brew Co." 
                        image="/images/b2.png" 
                        reviews="17"
                        price="$6.00"
                        abv="5.1%"
                    />
                    <BeerCard 
                        title="Curve Ball IPA" 
                        manufacturer="Brewdog"
                        image="/images/b3.png" 
                        reviews="8"
                        price="$7.00"
                        abv="7.4%"
                    />
                    <BeerCard 
                        title="Hazy Jane Guava" 
                        manufacturer="Brewdog"
                        image="/images/b4.png" 
                        reviews="21"
                        price="$6.00"
                        abv="5%"
                    />
                    <BeerCard 
                        title="Pecan & Toffee Stout" 
                        manufacturer="Brewdog"
                        image="/images/b5.png" 
                        reviews="9"
                        price="$7.00"
                        abv="7%"
                    />
                    <BeerCard 
                        title="Level Head IPA" 
                        manufacturer="Green King Brewery"
                        image="/images/b6.png" 
                        reviews="33"
                        price="$4.00"
                        abv="4%"
                    />
                    <BeerCard 
                        title="Harbour/Stohk IPA" 
                        manufacturer="Harbour Brewing Company"
                        image="/images/b7.png" 
                        reviews="10"
                        price="$7.00"
                        abv="7.1%"
                    />
                    <BeerCard 
                        title="Bigmouth Session IPA" 
                        manufacturer="Yeastie Boys"
                        image="/images/b8.png" 
                        reviews="28"
                        price="$4.00"
                        abv="4.5%"
                    />
                    <BeerCard 
                        title="Between Land & Sea" 
                        manufacturer="Harbour Brewing Company"
                        image="/images/b9.png" 
                        reviews="5"
                        price="$6.00"
                        abv="6%"
                    />
                </Carousel>
            </div>
        </div>
    )
}

export default PopularBeer