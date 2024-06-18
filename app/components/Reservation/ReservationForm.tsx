import React from 'react'
import { TbBuildingStore } from "react-icons/tb"

const ReservationForm = () => {
  return (
    <div className="bg-green-700 p-6 rounded-lg">
      < TbBuildingStore className="w-[5rem] h-[5rem] text-white mt-[2rem] mx-auto" />
      <h1 className="text-center font-bold uppercase text-[30px] md:text-[40px] lg:text-[50px] mt-[0.5rem] text-white">
        Reservation
      </h1>
      <p>Book a tour today!</p>
    </div>
  )
}

export default ReservationForm