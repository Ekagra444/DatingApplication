import { BookOpen, Camera, ChefHat, Coffee, Dog, Dumbbell, Heart, Mountain, Music, Palette, Plane, Wine } from "lucide-react";

const defaultInterests = [
  'Photography',
  'Hiking', 
  'Cooking',
  'Travel',
  'Yoga',
  'Music',
  'Art',
  'Reading',
  'Wine Tasting',
  'Dogs'
];
interface InterestsDisplayProps {
  interests?: string[]
  lifestyle?: {
    exercise?: string
    pets?: string
    lifestyle?: string
  }
}

const lifestyleIcons = {
  exercise: Dumbbell,
  pets: Dog,
  lifestyle: Coffee
}
const defaultLifestyle = {
  exercise: 'Regular Exercise',
  pets: 'Dog Lover',
  lifestyle: 'Coffee Enthusiast'
}
const interestIcons = {
  'Photography': Camera,
  'Hiking': Mountain,
  'Cooking': ChefHat,
  'Travel': Plane,
  'Yoga': Heart,
  'Music': Music,
  'Art': Palette,
  'Reading': BookOpen,
  'Wine Tasting': Wine,
  'Dogs': Dog
}

export default function InterestsProfile({interests = defaultInterests, lifestyle = defaultLifestyle}:InterestsDisplayProps) {

  return (
    <div className="min-h-screen px-10 py-4 w-full space-y-12">
        <div className="flex justify-center mt-10 text-3xl font-bold">Interests</div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 max-w-5xl mx-auto">
            {interests.map((interest, index) => {
                const IconComponent = interestIcons[interest as keyof typeof interestIcons];
                return <div key={index} className="flex flex-col items-center gap-3 p-6 rounded-xl border hover:shadow-lg transition-all duration-200 border-crdBorder hover:bg-[#ffc5b81a] dark:hover:bg-[#2f0d0d]/70 cursor-pointer bg-card group">
                        <div className="w-12 h-12 transition-all duration-200 bg-[#ffbdbb] group-hover:bg-[#ffffff] dark:bg-[#c25c5c]/30 dark:group-hover:bg-[#741e1e] rounded-full flex items-center justify-center">
                            {IconComponent && <IconComponent className="w-6 text-[#ef6f6f] h-6 dark:text-[#de4d4d]" />}
                        </div>
                        <span className="font-medium text-center">{interest}</span>
                </div>
            })}
        </div>
        <div className="flex justify-center text-3xl font-bold">Lifestyle</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {Object.entries(lifestyle).map(([key, val])=>{
                const IconComponent = lifestyleIcons[key as keyof typeof lifestyleIcons]
                return <div key={key} className="flex items-center gap-4 p-6 bg-card rounded-xl border border-crdBorder hover:shadow-lg transition-all dark:hover:bg-[#2f0d0d]/70 hover:bg-[#ffc5b81a] duration-200 cursor-pointer group">
                    {IconComponent && (
                                <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center dark:group-hover:bg-[#741e1e] transition-colors bg-[#ffbdbb] group-hover:bg-[#ffffff] dark:bg-[#c25c5c]/30">
                                    <IconComponent className="w-7 h-7 text-[#ef6f6f] dark:text-[#de4d4d]" />
                                </div>
                    )}
                    <span className="text font-semibold text-lg">{val}</span>
                </div>
            })}
        </div>
    </div>
  )
}
