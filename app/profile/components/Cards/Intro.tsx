import Locationsvg from "../Locationsvg";
import FBLogo from "./FBLogo";
import InstaLogo from "./InstaLogo";
import SmallTextBorder from "./SmallTextBorder";
import Xlogo from "./Xlogo";

const interests = ["cricket", "music", "cinema", "coding"];

export default function Intro() {
  return (
    <div className="bg-white/90 shadow-md shadow-slate-200 border border-slate-200 rounded-2xl z-20 flex gap-6 p-5 mx-auto">
      {/* Photo Section */}
      <div className="bg-slate-100 text-slate-400 flex justify-center items-center w-1/3 rounded-xl text-lg font-medium">
        Photo
      </div>
      <div className="flex flex-col justify-between py-1 w-2/3">
        <div className="flex items-center gap-4">
          <div className="font-bold text-slate-800 tracking-tight text-2xl">
            Rita
          </div>
          <div className="font-semibold text-pink-500 text-2xl">F</div>
          <div className="font-semibold text-slate-600 text-2xl">21</div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1 text-slate-500 mt-1">
          <Locationsvg size="size-4" />
          <span className="text-sm">Gurgaon, Haryana, India</span>
        </div>

        {/* Bio */}
        <div className="text-sm text-slate-600 mt-4 mr-2 leading-relaxed">
          Passionate about tech, cinema, and music. Currently coding my way
          through life Small description
        </div>

        {/* Interests */}
        <div className="flex flex-wrap gap-3 mt-4">
          {interests.map((i) => (
            <SmallTextBorder key={i} text={i} />
          ))}
        </div>

        {/* Social Icons */}
        <div className="mt-5 flex gap-4 text-slate-600 hover:text-slate-800">
          <InstaLogo size="size-5" />
          <FBLogo size="size-5" />
          <Xlogo size="size-5" />
        </div>
      </div>
    </div>
  );
}
