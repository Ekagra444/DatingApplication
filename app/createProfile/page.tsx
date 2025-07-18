'use client'
import { BookImage, Camera, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import React, { useRef, useState } from 'react'

export default function page() {
  const [currentStep, setCurrentStep] = useState(1);
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef(null);
  const [image, setImage] = useState('');
  const [filename, setfileName] = useState('');
  function nextStep (){
    if(currentStep < 4){
      setCurrentStep(currentStep+1);
    }
    else {
    }
  }
  function prevStep (){
    if(currentStep>1){
      setCurrentStep(currentStep-1);
    }
  }

  function cheackVal(){
    const name = nameRef.current?.value;
    const age = ageRef.current?.value;
    const location = locationRef.current?.value;
    if((document.getElementById('male') as HTMLInputElement)?.checked){
      console.log('male');
    }
  }
  const totalSteps = 4;
  return (
    <div className='min-h-screen space-y-12'>
      {/* header */}
      <div className='sticky top-0 bg-white z-50 border-b border-crdBorder'>
        <div className='max-w-4xl mx-auto p-4'>
          <div className='flex items-center justify-between'>
            <div className='flex text-2xl font-bold'>
              <div>E</div>
              <div className='text-4xl'>🥀</div>
              <div>rinite</div>
            </div>
            <div className='text-pink-800/80'>Step {currentStep} of {totalSteps}</div>
            </div>
        </div>
      </div>
      {/* main content */}
      {currentStep == 1 && <div className='max-w-4xl px-4 border border-crdBorder mx-auto bg-white py-2 shadow-lg rounded-xl'>
          <div className='flex items-center gap-2 mt-3 flex-col'>
          <div className='text-2xl font-extrabold'>Tell us about yourself</div>
          <div className='text-pink-800'>Let's start with the basics</div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-3'>
            <div className='space-y-2'>
              <div className='font-[550] tracking-wider text-sm'>First Name</div>
              <input type="text" ref = {nameRef} placeholder='Enter your first name' className='focus:outline-none border-crdBorder border py-2 pl-4 rounded-xl bg-background w-full text-base focus-visible:border focus-visible:border-pink-700 selection:bg-pink-400 placeholder:text-pink-950/75 focus-visible:ring-pink-600/50 focus-visible:ring-[3px]'/>
            </div>
            <div className='space-y-2'>
              <div className='font-[550] tracking-wide rtext-sm'>Age</div>
              <input type="number" ref = {ageRef} placeholder='Enter your age' className='focus:outline-none border-crdBorder border py-2 pl-4 rounded-xl bg-background w-full text-base focus-visible:border focus-visible:border-pink-700 selection:bg-pink-400 placeholder:text-pink-950/75 focus-visible:ring-pink-600/50 focus-visible:ring-[3px]'/>
            </div>
            <div className='space-y-2 col-span-2'>
              <div className='font-[550] tracking-wider text-sm'>Location</div>
              <div className='relative'>
              <MapPin className='size-4 absolute left-2 top-3'/>
              <input type="text"  ref = {locationRef} placeholder='Enter your city'  className='focus:outline-none border-crdBorder border py-2 pl-9 rounded-xl bg-background w-full text-base focus-visible:border focus-visible:border-pink-700 selection:bg-pink-400 placeholder:text-pink-950/75 focus-visible:ring-pink-600/50 focus-visible:ring-[3px]'/>
            </div>
          </div>  
          </div>
          <div className='space-y-1 mt-3'>
            <div className='font-[550] tracking-wider text-sm'>Gender</div>
            <div className='flex gap-4 text-sm'>
              <div className='flex gap-2 items-center'>
              <input name='gender' value='male' id='male' type="radio" className='border border-pink-800 checked:bg-pink-500 text-pink-500 focus:ring-0'/>
              <label htmlFor="Male">Male</label>
              </div>
              <div className='flex gap-2 items-center'>
              <input name='gender' className='border border-pink-800 checked:bg-pink-500 text-pink-500 focus:ring-0' type="radio"  value='female'/>
              <label htmlFor="Female">Female</label>
              </div>
              <div className='flex gap-2 items-center'>
              <input name='gender' className='border border-pink-800 checked:bg-pink-500 text-pink-500 focus:ring-0' type="radio" value='non-b'/>
              <label htmlFor="Non-binary">Non-binary</label>
              </div>
              <div className='flex gap-2 items-center'>
              <input name='gender' className='border border-pink-800 checked:bg-pink-500 text-pink-500 focus:ring-0' type="radio" value='unknown'/>
              <label htmlFor="Prefer not to say">Prefer not to say</label>
            </div>
            </div>
          </div>
          <div className='my-6 space-y-2'>
            <div className='font-[550] tracking-wider text-sm'>Looking for</div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 text-sm'>
              <div className='flex gap-2 items-center'>
                <input type = "checkbox" className='focus:ring-0 text-pink-500 rounded-md border border-pink-800' id='LTR'/>
                <label htmlFor="ltr">Long-term relationship</label>
              </div>
              <div className='flex gap-2 items-center'>
                <input className='focus:ring-0 rounded-md border text-pink-500 border-pink-800' type = "checkbox" id='sc'/>
                <label htmlFor="sc">Something casual</label>
              </div>
              <div className='flex gap-2 items-center'>
                <input className='focus:ring-0 rounded-md border text-pink-500 border-pink-800' type = "checkbox" id='sc'/>
                <label htmlFor="sc">New friends</label>
              </div>
              <div className='flex gap-2 items-center'>
                <input className='focus:ring-0 rounded-md border text-pink-500 border-pink-800' type = "checkbox" id='sc'/>
                <label htmlFor="sc">Not sure yet</label>
              </div>
            </div>
          </div>
        </div>}

        {currentStep == 2 && <div className='max-w-4xl px-4 border border-crdBorder mx-auto bg-white py-2 shadow-lg rounded-xl'>
          <div className='flex w-full justify-center mt-10'>
            <div className='text-2xl font-extrabold'>Add your photos</div>
          </div>
          <div className='flex justify-center my-3'>
            <span className='text-pink-800'>Show your personality with different photos</span>
          </div>
          <div className='space-y-2 my-10'>
            <span className='font-semibold'>Primary photo</span>
            <div className='w-full flex justify-center items-center flex-col gap-2 bg-background border-2 transition-all cursor-pointer hover:border-pink-500 border-dotted border-crdBorder rounded-lg p-4'>
              <Camera className='size-10 text-pink-900 mt-4'/>
              <button>Upload your main photo</button>
              <p className='text-pink-800 mb-4'>This will be your profile photo</p>
            </div>
          </div>
          <div className='mb-2'>
            <span className='font-semibold' >Upload additional photos (upto 5)</span>
            </div>
            <div className='grid grid-cols-2 gap-3 md:grid-cols-3'>
              <div className='border-2 border-dotted border-crdBorder hover:border-pink-600 w-full flex items-center justify-center rounded-lg flex-col gap-2 py-14 bg-background cursor-pointer transition-all'>
                <BookImage className='size-8 text-pink-900 mt-4'/>
                <button>Add photo</button>
              </div>
              <div className='border-2 border-dotted border-crdBorder hover:border-pink-600 w-full flex items-center justify-center rounded-lg flex-col gap-2 py-14 bg-background cursor-pointer transition-all'>
                <BookImage className='size-8 text-pink-900 mt-4'/>
                <button>Add photo</button>
              </div>
              <div className='border-2 border-dotted border-crdBorder hover:border-pink-600 w-full flex items-center justify-center rounded-lg flex-col gap-2 py-14 bg-background cursor-pointer transition-all'>
                <BookImage className='size-8 text-pink-900 mt-4'/>
                <button>Add photo</button>
              </div>
              <div className='border-2 border-dotted border-crdBorder hover:border-pink-600 w-full flex items-center justify-center rounded-lg flex-col gap-2 py-14 bg-background cursor-pointer transition-all'>
                <BookImage className='size-8 text-pink-900 mt-4'/>
                <button>Add photo</button>
              </div>
              <div className='border-2 border-dotted border-crdBorder hover:border-pink-600 w-full flex items-center justify-center rounded-lg flex-col gap-2 py-14 bg-background cursor-pointer transition-all'>
                <BookImage className='size-8 text-pink-900 mt-4'/>
                <button>Add photo</button>
              </div>
            </div>
            <div className='rounded-lg bg-background mt-6 p-2'>
              <span className='text-lg'>Photo guidlines</span>
              <ul className='text-pink-950 list-disc'>
                <li>Use recent photos that clearly show your face</li>
                <li>Avoid group photos as your main picture</li>
                <li>Natural lighting works best</li>
                <li>Show your personality and interests</li>
              </ul>
            </div>
          </div>}
          <div className='mx-auto max-w-4xl flex justify-between'>
            <button onClick={prevStep} className={`bg-white border border-pink-400/30 rounded-lg px-1 py-1 flex items-center ${currentStep == 1?"opacity-50 cursor-none":""}`}>
              <ChevronLeft className='size-4'/>
              <span className='mx-2'>Back</span>
              </button>
          <div className='flex gap-3 items-center'>
            {currentStep < 4 && <button onClick={nextStep} className='border px-4 py-1 rounded-lg bg-white items-center border-pink-400/30'>
            Skip
              </button>}  
            <button onClick={nextStep} className='flex items-center gap-2 bg-pink-500/80 rounded-lg px-3 py-1 text-background'>
              <span>{currentStep == 4?"Complete Profile" :"Next"}</span>
              {currentStep<4 && <ChevronRight className='size-4'/>}
              </button>
          </div>
        </div>
    </div>
  )
}
