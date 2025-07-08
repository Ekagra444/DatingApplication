const messages = ["p1", "p2", "p3"]
export default function BestMatches() {
  return (
    <div className="border border-slate-500/60 rounded-lg z-20 flex flex-col px-2 mt-6">
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
