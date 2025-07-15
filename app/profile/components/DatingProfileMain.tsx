import { Briefcase, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Cigarette, GraduationCap, MapPin, Ruler, Wine } from "lucide-react"
import { useState } from "react"

interface DatingProfileMainProps {
  profile: {
    name: string
    age: number
    location: string
    isOnline: boolean
    photos: string[]
    height: string
    education: string
    jobTitle: string
    relationshipGoals: string
    drinkingPreference: string
    smokingPreference: string
    prompts: Array<{
      question: string
      answer: string
    }>
    bio: string
  }
  onLike?: () => void
  onPass?: () => void
  onMessage?: () => void
}

export default function DatingProfileMain({ 
  profile,  
}: DatingProfileMainProps) {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const [showFullBio, setShowFullBio] = useState(false);
    const nextPhoto = () => {
        setCurrentPhotoIndex((prev) => (prev + 1) % profile.photos.length)
    }

    const prevPhoto = () => {
        setCurrentPhotoIndex((prev) => (prev - 1 + profile.photos.length) % profile.photos.length)
    }

    const goToPhoto = (index: number) => {
        setCurrentPhotoIndex(index)
    }
    const truncatedBio = profile.bio.length > 200 ? profile.bio.substring(0, 200) + '...' : profile.bio;
    const shouldShowMore = profile.bio.length > 200;
  return (
    <div className="min-h-screen px-4 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-6">
                <div className="h-[600px] hover:shadow-2xl hover:scale-[1.02] transition-all duration-200 rounded-xl overflow-hidden shadow-2xl">
                    <div className="h-full w-full relative">
                        <img src={profile.photos[currentPhotoIndex]} alt={`${profile.name}'s photo, ${currentPhotoIndex}+1`} className="h-full w-full object-cover" />
                        {/* Navigation Arrows */}
                        {profile.photos.length > 1 && (
                            <>
                            <button onClick={prevPhoto} className=" absolute transition-all duration-200 rounded-full backdrop-blur-3xl hover:bg-black/60 top-1/2 bg-black/40 hover:scale-110">
                                <ChevronLeft className="size-10" />
                            </button>
                            <button onClick={nextPhoto} className="absolute right-1 rounded-full backdrop-blur-3xl hover:bg-black/60 top-1/2 bg-black/40 hover:scale-110 transition-all duration-200">
                                <ChevronRight className="size-10"/>
                            </button>
                            </>  
                        )}
                    </div>
                </div>
                {profile.photos.length>1 && <div className="grid grid-cols-3 gap-3">
                            {profile.photos.slice(0, 3).map((photo, index) => (
                                <button key={index} onClick={()=>{goToPhoto(index)}} className={`relative rounded-lg overflow-auto transition-all duration-300 hover:scale-105 hover:shadow-lg ${index === currentPhotoIndex?'ring-2 ring-red-400 ring-primary shadow-lg':'hover:rotate-1'}`}>
                                    <img src={photo} alt = {`${profile.name}'s photo ${index + 1}`} className="w-full h-full object-cover" />
                                </button>
                            ))}
                </div>}
            </div>
            <div className="space-y-6">
                <div className="rounded-xl flex flex-col shadow-xl hover:scale-[1.01] transition-all duration-200 p-7 gap-2 bg-gradient-to-br from-card to-card/90">
                    <div className="flex items-center gap-5">
                        <div className="font-bold text-4xl">
                        {`${profile.name}, ${profile.age}`}
                        </div>
                        <div>
                            {profile.isOnline?<div className="flex items-center gap-2">
                                <div className="bg-green-500 h-3 w-3 rounded-full"></div>
                                <div className="text-green-500">Online</div>
                                </div>:<div className="flex items-center gap-2">
                                <div className="bg-red-500 h-3 w-3 rounded-full"></div>
                                <div className="text-red-500">Offline</div>
                                </div>}
                        </div>
                    </div>
                    <div className="opacity-40 flex items-center gap-2">
                        <div><MapPin className="size-5"/></div>
                        <div>{profile.location}</div>
                    </div>
                </div>
                {/* Details component */}
                <div className="bg-card rounded-xl border border-crdBorder shadow-md py-10 px-6">
                        <div className="font-semibold text-xl">Details</div>
                        <div className="flex flex-col mt-3 gap-3 opacity-90">
                                <div className="flex items-center gap-3">
                                    <Ruler className="size-5 opacity-60"/>
                                    {profile.height}
                                </div>
                                <div className="flex items-center gap-3">
                                    <GraduationCap className="size-5 opacity-60"/>
                                    {profile.education}
                                </div>
                                <div className="flex items-center gap-3">
                                    <Briefcase className="size-5 opacity-60"/>
                                    {profile.jobTitle}
                                </div>
                                <div className="flex items-center gap-3">
                                    <Wine className="size-5 opacity-60"/>
                                    {profile.drinkingPreference}
                                </div>
                                <div className="flex items-center gap-3">
                                    <Cigarette className="size-5 opacity-60"/>
                                    {profile.smokingPreference}
                                </div>
                        </div>
                        <div className="border border-crdBorder my-3"></div>
                        <div className="flex gap-1">
                            <div className="font-semibold">Looking for :</div>
                            <div className="opacity-70">{profile.relationshipGoals}</div>
                        </div>
                </div>
                {/* About Me Card */}
                <div className="bg-card rounded-xl border border-crdBorder shadow-md py-10 px-6">
                    <div>
                        <div className="text-xl font-semibold">About Me</div>
                        <div className="space-y-3 mt-3 opacity-90">
                            {shouldShowMore && <><p className="text-foreground">{showFullBio?profile.bio:truncatedBio}</p>
                            <button onClick={()=>{setShowFullBio(e => !e)}} className=" text-red-400 text-sm px-2 rounded-lg hover:underline transition-all">
                                {showFullBio ? <div className="flex gap-1 items-center">
                                    <div>Show less</div>
                                    <ChevronUp className="size-4"/>
                                </div>:<div className="flex gap-1 items-center">
                                    <div>Show more</div>
                                    <ChevronDown className="size-4"/>
                                </div>}
                                </button></>}
                        </div>
                    </div>
                </div>
            </div>
            {/* Get to know Me */}
            <div className="space-y-6">
                <div className="flex flex-col mt-5">
                    <div className="text-2xl bg-gradient-to-r mx-auto from-red-400 to-pink-400 text-transparent bg-clip-text font-bold">Get to Know Me</div>
                    <div className="w-16 h-1 bg-gradient-to-r from-red-400 to-pink-400 mx-auto mt-2 rounded-full"></div>
                </div>
                {profile.prompts.map((prompt, index)=>(
                    <div key={index} className="bg-card rounded-xl border border-crdBorder shadow-md py-10 px-6">
                        <div className="bg-gradient-to-r font-bold mb-2 text-lg from-red-400 to-pink-400 text-transparent bg-clip-text">{prompt.question}</div>
                        <div>{prompt.answer}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
