"use client"

import React, { useState } from 'react'
import SideBar from './components/SideBar';
import { Menu } from 'lucide-react';
import DatingProfileMain from './components/DatingProfileMain';
import InterestsProfile from './components/InterestsProfile';
import ProfileActions from './components/ProfileActions';

export default function page() {
  const [sidebarOpen, setsideBarOpen] = useState(true);
  const [view, setView] = useState<'profile'|'interests'>('profile');
  const [showActions, setShowActions] = useState(true);
  function changeSideBarState(){
    setsideBarOpen(v=>!v);
  }
  function toggleViewInterest(){
    setView("interests");
  }
  function toggleViewProfile(){
    setView("profile");
  }
  const sampleProfile = {
    name: 'Emma',
    age: 26,
    location: 'New York , USA',
    isOnline: true,
    photos: [
      'https://plus.unsplash.com/premium_photo-1669704098824-3bb06bb771f4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face'
    ],
    height: '5\'6"',
    education: 'Stanford University',
    jobTitle: 'Product Designer',
    relationshipGoals: 'Long-term relationship',
    drinkingPreference: 'Socially',
    smokingPreference: 'Occasionally',
    prompts: [
      {
        question: 'My simple pleasures',
        answer: 'Sunday morning coffee, farmers market finds, and getting lost in a good book'
      },
      {
        question: 'I take pride in',
        answer: 'Creating designs that make people\'s lives a little bit better and easier'
      },
      {
        question: 'What I order for the group',
        answer: 'Always the appetizer sampler because variety is the spice of life!'
      }
    ],
    bio: 'Creative soul with a passion for design and adventure. I love exploring new neighborhoods, trying different cuisines, and having deep conversations over coffee. When I\'m not designing digital experiences, you can find me hiking local trails, practicing yoga, or experimenting with new recipes in the kitchen. Looking for someone who appreciates both quiet moments and spontaneous adventures.'
  }
  return (
    <div className='min-h-screen flex relative'>
      {sidebarOpen && <div className={`fixed inset-y-0 left-0 z-50 duration-300 ease-in-out`}>
        <SideBar isOnline = {true} setisOpen={setsideBarOpen}/>
      </div>}
      <div className={`flex flex-col w-full z-10 ${sidebarOpen?"ml-[300px]":"ml-5"}`}>
        <div className='sticky z-40 top-0 flex items-center backdrop-blur-md border-b py-5 px-6 border-[#262626]'>
          <div>
          {(!sidebarOpen) && <button onClick={changeSideBarState}><Menu className='hover:text-slate-200/90'/></button>}
          </div>
            <div className='bg-[#1a1a1a]/90 font-medium mx-auto py-1 px-2 rounded-xl flex justify-center gap-4 shadow-lg'>
          <button className={`${view == "profile" ? "backdrop-blur-md shadow-md bg-black":"bg-[#1a1a1a]/90"} duration-200 transition-all py-3 px-3 rounded-xl hover:scale-105`} onClick={toggleViewProfile}>Profile</button>
          <button className={`${view == "interests" ? "backdrop-blur-md shadow-md bg-black":"bg-[#1a1a1a]/90"} duration-200 transition-all py-3 px-3 rounded-xl hover:scale-105`} onClick={toggleViewInterest}>Interests</button>
          </div> 
        </div>
        {/* Main content Area */}
        <div className='overflow-y-auto pb-52' >
          {view == "profile"?<DatingProfileMain profile={sampleProfile}/>:<InterestsProfile />}
        </div>
        {/* Actions */}
        <div>
          {showActions && <ProfileActions sidebarOpen = {sidebarOpen} />}
        </div>
      </div>
    </div>
  )
}
