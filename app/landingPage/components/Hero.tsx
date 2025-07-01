'use client'
import { PT_Sans } from "@next/font/google";
import Navbar from "./Navbar";
const ptSans = PT_Sans({
    subsets:['latin'],
    weight:['700']
})

function Hero() {
  return (
        <div className="bg-[url('./bg_image.png')] h-screen bg-no-repeat bg-cover">
        <Navbar />
        <div className={`${ptSans.className} text-5xl font-extrabold text-white absolute left-10 bottom-36 max-w-md `}>
            We make people Date to Mate !!
        </div>
    </div>
  )
}

export default Hero
