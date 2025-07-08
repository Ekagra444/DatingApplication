const messages = ["p1", "p2", "p3"]
export default function BestMatches() {
  return (
    <div className="bg-white/90 shadow-md shadow-slate-200 border border-slate-200 rounded-2xl z-20 gap-6 my-6 p-5 mx-auto">
        <div className="text-2xl tracking-tighter font-semibold px-10 pt-4">
            Best Matches
        </div>
        <div className="mt-4">
        {messages.map((message, key)=>
            <div className="border-y flex justify-center py-1 border-black" id={key.toString()}>
                {message}
            </div>
        )}
        </div>
        <span className="text-xs underline mt-2 mb-3">See more</span>
    </div>
  )
}
