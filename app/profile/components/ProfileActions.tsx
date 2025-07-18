import { Heart, MessageCircleMore, Star, X } from "lucide-react";

interface profileActionProps{
    sidebarOpen:boolean;
}

export default function ProfileActions({sidebarOpen}:profileActionProps) {
  return (
    <div className={`fixed bottom-0 w-full flex flex-col z-50 bg-card/80 backdrop-blur-md border-t border-[#2f2f2f]/10 shadow-lg items-center ${sidebarOpen &&"-ml-[300px]"}`}>
        <div>
            {/* primary Action Buttons */}
            <div className="py-3 flex gap-10">
                <button className="rounded-full transition-all hover:scale-105 border p-6 border-[#2f2f2f]/30 bg-card "><X className="size-4"/></button>
                <button className="rounded-full transition-all hover:scale-105 border p-6 border-[#2f2f2f]/30 bg-card "><Star className="size-4"/></button>
                <button className="rounded-full transition-all hover:scale-105 border p-6 border-[#2f2f2f]/30 bg-[#f76f6f] "><Heart className="size-4"/> </button>
            </div>
            
        </div>
        <div className="flex gap-4 mb-5">
                {/* Secondary Action Buttons  */}
                <button className="flex gap-2 bg-card transition-all hover:scale-[1.02] border rounded-3xl px-20 py-3 border-[#2f2f2f]/40">🌹<span className="text-pink-600 ">Send Rose</span></button>
                <button className="flex gap-2 items-center bg-pink-700/80 dark:bg-white text-background transition-all hover:scale-[1.02] border rounded-3xl px-20 py-3 border-[#2f2f2f]/40"><MessageCircleMore className="size-5 text-background"/><span className="transition-all">Message</span></button>
            </div>
    </div>
  )
}
