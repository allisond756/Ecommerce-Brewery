import React from 'react'
import Hero from "./Hero/Hero"
import Feature from "./Features/Feature"
import PopularBeer from "./PopularBeer/PopularBeer"
import Delivery from "./Delivery/Delivery"
import Team from "./Team/Team";

const Home = () => {
    return (
        <div className="overflow-hidden">
            <Hero />
            <Feature />
            <PopularBeer />
            <Delivery />
            <Team />
        </div>
    )
}

export default Home