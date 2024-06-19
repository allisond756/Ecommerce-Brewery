import React from 'react'
import TeamCard from "./TeamCard"

const Team = () => {
    return (
        <div className="pt-[5rem] pb-[3rem]">
            <h1 className="heading">
                Meet Our <span className="text-amber-600"> Brewmasters</span>
            </h1>
            <div className="mt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-[3rem] items-center">
                {/* team card */}
                <div>
                    <TeamCard
                        image="/images/brewer-1.jpg"
                        name="John Doe"
                        position="Asst. Brewer"
                    />
                </div>
                <div>
                    <TeamCard
                        image="/images/brewer-2.jpg"
                        name="James Do"
                        position="Asst. Brewer"
                    />
                </div>
                <div>
                    <TeamCard
                        image="/images/brewer-3.jpg"
                        name="Jen Dough"
                        position="Head Brewer"
                    />
                </div>
            </div>
        </div>
    )
}

export default Team