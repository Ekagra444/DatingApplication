import { Satisfy } from "next/font/google";
const satisfy = Satisfy({
  subsets:["latin"],
  weight:["400"]
})
// const AboutData = [
//   ["Lifestyle", "Vegetarian, Social smoker and drinker"],
//   ["Hometown", "Mathura, UP, India"],
//   ["Relationship", "Not Married"],
//   ["Job", "Software Developer"],
//   ["Education", "B.Tech in Civil from IIT Jammu"],
//   ["Languages", "CPP, Python, JavaScript, English, Hindi"],
//   ["Objective", "Looking for casual, just for hookup"],
// ];
export default function AboutCard() {
  return (
    <div className={`bg-black/80 shadow-md border-slate-200 rounded-2xl shadow-slate-600/80 z-20 gap-6 p-5 mx-auto border border-slate-600/70 mt-6`}>
      <h2 className="text-2xl font-bold mb-6 border-b border-gray-600 pb-2 text-white/80">About</h2>
      <div className="my-4">
        {/* {AboutData.map(([label, value], index) => (
          <div key={index} className="flex transition-all hover:translate-y-1 hover:shadow-slate-600 flex-col  gap-3 z-40 shadow-md p-5 rounded-xl">
            <span className={`text-pink-500 text-lg tracking-wider ${satisfy.className}`}>{label}</span>
            <span className="text-white/80">{value}</span>
          </div> */}
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, in fugiat nesciunt pariatur omnis voluptates ullam maxime quam provident ducimus, facilis at eligendi distinctio facere officia fuga quibusdam! Nobis molestias fugit rerum voluptatem animi necessitatibus? Minima dolorem inventore ipsum eum amet qui asperiores nobis libero sapiente soluta dignissimos impedit quaerat officia nisi, eligendi, quo temporibus ducimus quos? Fugiat rem pariatur, quod odio eligendi iure et quis molestias neque beatae error!
          </div>

        {/* ))} */}
      </div>
    </div>
  );
}
