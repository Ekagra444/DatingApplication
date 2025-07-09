import { Rubik } from "@next/font/google";
import { Chivo, Comic_Neue, Fredoka, Space_Mono } from "next/font/google";


const rubik = Comic_Neue({
  subsets:["latin"],
  weight:["700", "400", "300"]
})
const AboutData = [
    ["Age", "27 to 33"],
    ["Height", "5'2'' (157 cm) to 5'10'' (178 cm)"],
    ["Marital Status", " Never Married"],
    ["Mother Toungue", "English, Hindi"],
    ["Country", "India"],
    ["State", "UP, Delhi"],
    ["Diet", "Vegan, Vegetarian"],
    ["Goals", "Casual"],
    ["Religion/Community", "Brahmin, Sharma"],
    ["Interests", "Music, Cinema, Coding"]
];
export default function BestMatchCard() {
  return (
    <div className={`bg-black/80 shadow-md border-slate-200 rounded-2xl shadow-slate-600/80 my-6 z-20 gap-6 p-5 mx-auto border border-slate-600/70 `}>
        <h2 className="text-2xl font-bold text-blue-500">Best Match</h2> 
        <div className="text-sm mt-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-20 text-sm">
                {AboutData.map(([label, value], index) => (
                <div key={index} className="flex flex-col">
                    <span className="text-pink-500/80 font-semibold">{label}</span>
                    <span className="text-white/90">{value}</span>
                </div>
                ))}
            </div>

        </div>     
    </div>
  )
}
