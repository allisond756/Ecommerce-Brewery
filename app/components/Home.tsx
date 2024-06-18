import React from 'react'
import Hero from "./Hero/Hero"
import Feature from "./Features/Feature"
import PopularBeer from "./PopularBeer/PopularBeer"
import Delivery from "./Delivery/Delivery"
import Team from "./Team/Team";
import Reservation from "./Reservation/Reservation"
import Newsletter from "./Newsletter/Newsletter"

const Home = () => {
    return (
        <div className="overflow-hidden">
            <Hero />
            <Feature />
            <PopularBeer />
            <Delivery />
            <Team />
            <Reservation />
            <Newsletter />
        </div>
    )
}

export default Home