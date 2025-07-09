import { Rubik } from "@next/font/google";

const messages = ["p1", "p2", "p3", "p4", "p5", "p6", "p7"];
const rubik = Rubik({
  subsets:["latin"],
  weight:["300", "400", "500","600"]
})
export default function MessagesCard() {
  return (
    <div className={`bg-black/80 shadow-md border-slate-200 rounded-2xl shadow-slate-600/80 z-20 gap-6 p-5 mx-auto border border-slate-600/70 ${rubik.className}`}>
        <div className="text-2xl text-white/80 tracking-tighter font-semibold px-10 pt-4">
            Messages
        </div>
        <div className="mt-4">
        {messages.map((message, key)=>
            <div className="border-y flex justify-center py-1 border-gray-600/80" id={key.toString()}>
                {message}
            </div>
        )}
        </div>
        <span className="text-xs underline mt-2 mb-3">See more</span>
    </div>
  )
}
