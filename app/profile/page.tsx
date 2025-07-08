import React from 'react'
import Intro from './components/Cards/Intro'
import AboutCard from './components/Cards/AboutCard'
import MessagesCard from './components/Cards/MessagesCard'
import Navbar from './components/Navbar'
import BestMatchCard from './components/Cards/BestMatchCard'
import BestMatches from './components/Cards/BestMatches'
import Sidebar from './components/Sidebar'

export default function page() {
  return (
    <div>
      <Navbar />
    <div className='flex'>
      <div className='w-[210px] relative'>
      <Sidebar />
      </div>
      <div>
        <div>
          <div className='text-3xl font-bold tracking-tight my-10'> 
            Your Profile
          </div> 
    <div className='grid grid-flow-col gap-4'>
      <div className='col-span-2'>
        <Intro />
        <AboutCard />
        <BestMatchCard />
      </div>
      <div>
        <MessagesCard />
        <BestMatches />
      </div>
    </div>
    </div>
      </div>
    </div>
    </div>

  )
}
