import React from 'react'
import Hero from "./Hero/Hero"
import Feature from "./Features/Feature"
import PopularBeer from "./PopularBeer/PopularBeer"
import Delivery from "./Delivery/Delivery"

const Home = () => {
    return (
        <div className="overflow-hidden">
            <Hero />
            <Feature />
            <PopularBeer />
            <Delivery />
        </div>
    )
}

export default Home