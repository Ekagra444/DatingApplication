import { Heart, HelpCircle, MessageCircle, Search, Settings, User, X } from "lucide-react";
interface sidebarProps{
  isOnline:boolean;
  setisOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface navItemProps{
  label:string;
  icon: React.ReactNode;
  href: string;
}

const navigationItems: navItemProps[] = [
  {
    label: "Discover",
    icon: <Search className="h-5 w-5 transition-all duration-200"/>,
    href: "/discover" 
  },
  {
    label: "Matches",
    icon: <Heart className="h-5 w-5 transition-all duration-200" />,
    href: "/matches"
  },
  {
    label: "Messages",
    icon: <MessageCircle className="h-5 w-5 transition-all duration-200 " />,
    href: "/messages"
  },
  {
    label: "Profile",
    icon: <User className="h-5 w-5 transition-all duration-200" />,
    href: "/profile"
  },
  {
    label: "Settings",
    icon: <Settings className="h-5 w-5 transition-all duration-200" />,
    href: "/settings"
  },
  {
    label: "Help & Support",
    icon: <HelpCircle className="h-5 w-5 transition-all duration-200 " />,
    href: "/help"
  }
];


export default function Sidebar(props:sidebarProps) {
  function closeSideBar(){
    props.setisOpen(val => !val);
}
  return (
    <div className="h-screen w-[300px] bg-gradient-to-b overflow-y-auto overflow-x-hidden from-black to-card border-r border-crdBorder">
        <div className="pt-8 flex items-start justify-around">
          <div className="flex gap-4">
            <div className="rounded-2xl bg-red-600/10 ring-2 ring-red-500/30 flex items-center px-3.5">
              <Heart className="size-6 text-red-400"/>
            </div>
            <div>
              <div className="text-2xl font-bold">
                Etrenite
              </div>
              <div className="opacity-40 text-sm">
                Find your match
              </div>
            </div>
          </div>
          <div onClick={closeSideBar} className="hover:text-slate-500 cursor-pointer">
            <X className="size-6"/>
          </div>
        </div>
        <div className=" py-9 flex justify-center">
          <div className="transition-all duration-200 bg-[#1a1a1a]/50 border border-[#262626]/40 hover:shadow-lg hover:bg-[#262626]/80 p-4 rounded-xl flex items-center gap-4">
          <div className="bg-red-600/10 flex rounded-full text-red-400 font-semibold ring-2 ring-red-500/40 text-lg px-3 h-full items-center ">
          SJ
          </div>
          <div>
            <div className="font-semibold tracking-tight">Emma Watson</div>
            <div className="flex items-center gap-3">
            <div className={`rounded-full size-2 brightness-125 ${props.isOnline?"bg-green-500":"bg-red-500"}`}>
            </div>
            <div className="text-sm opacity-70">{props.isOnline?"Online now": "Currently Offline"}</div>
          </div>
          </div> 
          </div>  
        </div>
        <div className="relative">
          <div className="flex flex-col gap-2 pl-6 mt-5">
            {navigationItems.map((item, index)=>(
              <div key={item.label} className="flex items-center gap-4 p-3 rounded-lg hover:text-pink-400 cursor-pointer">
                <div className="opacity-70">
                  {item.icon}
                </div>
                <div>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

    </div>
  )

  
}
