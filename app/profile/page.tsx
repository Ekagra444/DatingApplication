import React from 'react'
import Intro from './components/Cards/Intro'
import AboutCard from './components/Cards/AboutCard'
import MessagesCard from './components/Cards/MessagesCard'
import Navbar from './components/Navbar'
import BestMatchCard from './components/Cards/BestMatchCard'
// import BestMatches from './components/Cards/BestMatches'
import Sidebar from './components/Sidebar'
import { Chivo, Fredoka, Noto_Sans, Noto_Sans_Mono, Roboto, Space_Mono, Work_Sans } from 'next/font/google'

const roboto = Roboto({
  subsets:["latin"],
  weight:["100", "300", "400", "500", "700"]
})

const c_n = Space_Mono({
  subsets:["latin"],
  weight:["400"]
})

export default function page() {
  return (
    <div className={`bg-black text-white ${c_n.className} tracking-tighter`}>
      <Navbar />
    <div className='flex'>
      <div className='w-[650px]'>
      <Sidebar /> 
      </div>
      <div>
        <div> 
          <div className={`text-3xl flex gap-5 font-extrabold my-10 ${roboto.className}`}> 
            <div>
              YOUR
            </div>
            <div className='text-pink-500'>
              PROFILE
            </div>
          </div> 
    <div className='grid grid-flow-col gap-16'>
      <div className='col-span-2'>
        <Intro />
        <AboutCard />
      </div>
      <div className=''>
        <MessagesCard />
        {/* <BestMatches /> */}
      </div>
    </div>
        <BestMatchCard />

    </div>
      </div>
    </div>
    </div>

  )
}
