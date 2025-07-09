// import { Rubik } from "@next/font/google";
import Locationsvg from "../Locationsvg";
import FBLogo from "./FBLogo";
import InstaLogo from "./InstaLogo";
import SmallTextBorder from "./SmallTextBorder";
import Xlogo from "./Xlogo";
// import { Comic_Neue } from "next/font/google";


// const rubik = Comic_Neue({
//   subsets:["latin"],
//   weight:["300", "400", "700"]
// })

const interests = ["cricket", "music", "cinema", "coding"];

export default function Intro() {
  return (
    <div className={`bg-black/80 shadow-md border-slate-200 rounded-2xl shadow-slate-600/80 z-20 flex gap-6 p-5 mx-auto border border-slate-600/70`}>
      <div className="bg-slate-900 text-white/60 flex justify-center items-center w-1/3 rounded-xl text-lg font-medium">
        Photo
      </div>
      <div className="flex flex-col justify-between py-1 w-2/3 ">
        <div className = "flex items-center gap-4">
          <div className="font-bold text-white/80 text-2xl">
            Rita
          </div>
          <div className="font-semibold text-pink-500 text-2xl">F</div>
          <div className="font-semibold text-white/80 text-2xl">21</div>
        </div>
        <div className="flex items-center gap-1 text-white/60 mt-1">
          <Locationsvg size="size-4" />
          <span className="text-sm">Gurgaon, Haryana, India</span>
        </div>
        <div className="text-sm text-white/70 mt-8 mb-4 mr-2 leading-relaxed">
          Passionate about tech, cinema, and music. Currently coding my way
          through life Small description
        </div>
        <div className="flex flex-wrap gap-3 mt-4">
          {interests.map((i) => (
            <SmallTextBorder key={i} text={i} />
          ))}
        </div>
        <div className="mt-7 flex gap-4 text-slate-600">
          <InstaLogo size="size-5" color="gray" />
          <FBLogo size="size-5" color="gray" />
          <Xlogo size="size-5" color="gray" />
        </div>
      </div>
    </div>
  );
}
