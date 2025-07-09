import { Satisfy } from "next/font/google";
const satisfy = Satisfy({
  subsets:["latin"],
  weight:["400"]
})
const AboutData = [
  ["Lifestyle", "Vegetarian, Social smoker and drinker"],
  ["Hometown", "Mathura, UP, India"],
  ["Relationship", "Not Married"],
  ["Job", "Software Developer"],
  ["Education", "B.Tech in Civil from IIT Jammu"],
  ["Languages", "CPP, Python, JavaScript, English, Hindi"],
  ["Objective", "Looking for casual, just for hookup"],
];
export default function AboutCard() {
  return (
    <div className={`bg-black/80 shadow-md border-slate-200 rounded-2xl shadow-slate-600/80 z-20 gap-6 p-5 mx-auto border border-slate-600/70 mt-6`}>
      <h2 className="text-2xl font-bold mb-6 border-b border-gray-600 pb-2 text-white/80">About</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-20 text-sm">
        {AboutData.map(([label, value], index) => (
          <div key={index} className="flex transition-all hover:translate-y-1 hover:shadow-slate-600 flex-col  gap-3 z-40 shadow-md p-5 rounded-xl">
            <span className={`text-pink-500 text-lg tracking-wider ${satisfy.className}`}>{label}</span>
            <span className="text-white/80">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
