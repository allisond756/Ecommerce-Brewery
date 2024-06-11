import React from 'react'
import Nav from "./Nav"
import MobileNav from "./MobileNav"

const ResponsiveNav = () => {
    return (
        <div>
            <div>
                <Nav />
                <MobileNav />
            </div>
        </div>
    )
}

export default ResponsiveNav