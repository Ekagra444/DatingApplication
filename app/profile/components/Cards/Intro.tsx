import Locationsvg from "../Locationsvg";
import FBLogo from "./FBLogo";
import InstaLogo from "./InstaLogo";
import SmallTextBorder from "./SmallTextBorder";
import Xlogo from "./Xlogo";

const interests = ['cricket', 'music', 'cinema', 'coding' ];

export default function Intro() {
    return <div className="border border-slate-500/60 rounded-md z-20 flex gap-5">
        <div className="bg-slate-800/40 text-center w-1/3">
        Photo
        </div>
        <div className="py-3">
            <div className="flex items-center gap-3">
            <div className="font-semibold tracking-tighter text-2xl">
                Shivam
            </div>
            <div className="font-semibold text-2xl text-blue-600">
                M
            </div>
            <div className="font-semibold text-2xl">
                21
            </div>
            </div>
            <div className="flex items-center gap-1 opacity-60">
                <div>
                    <Locationsvg size="size-4"/>
                </div>
                <div className="text-sm">Gurgaon, Haryana, India</div>
            </div>
            <div className="text-sm mt-3 mr-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus hic corporis vel labore tempore dolor?
                Small Description
            </div>
            <div className="flex flex-wrap gap-4 mt-5">
                {interests.map(i=><SmallTextBorder text = {i} />)}
            </div>

            <div className="mt-5 mb-3">
                <div className="flex gap-3">
                    <InstaLogo size="size-5"/>
                    <FBLogo size="size-5" />
                    <Xlogo size="size-5" />
                </div>
            </div>
        </div>
        </div>
}