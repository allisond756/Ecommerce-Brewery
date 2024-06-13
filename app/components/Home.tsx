import React from 'react'
import Hero from "./Hero/Hero"
import Feature from "./Features/Feature"
import PopularBeer from "./PopularBeer/PopularBeer"

const Home = () => {
    return (
        <div className="overflow-hidden">
            <Hero />
            <Feature />
            <PopularBeer />
        </div>
    )
}

export default Home