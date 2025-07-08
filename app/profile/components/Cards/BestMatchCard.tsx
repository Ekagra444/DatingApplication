
const AboutData = [
    ["Age", "27 to 33"],
    ["Height", "5'2'' (157 cm) to 5'10'' (178 cm)"],
    ["Marital Status", " Never Married"],
    ["Mother Toungue", "English, Hindi"],
    ["Country", "India"],
    ["State", "UP, Delhi"],
    ["Diet", "Vegan, Vegetarian"],
    ["Goals", "Casual"],
    ["Religion/Community", "Brahmin, Sharma"],
    ["Interests", "Music, Cinema, Coding"]
];
export default function BestMatchCard() {
  return (
    <div className="bg-black/90 shadow-md shadow-black border border-slate-200 rounded-2xl z-20 my-6 gap-6 p-5 mx-auto">
        <h2 className="text-2xl font-bold text-blue-500">Who would I hump ...</h2> 
        <div className="text-sm mt-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-20 text-sm">
                {AboutData.map(([label, value], index) => (
                <div key={index} className="flex flex-col">
                    <span className="text-pink-500/80 font-semibold">{label}</span>
                    <span className="text-white/90">{value}</span>
                </div>
                ))}
            </div>
            {/* <div className="flex items-center gap-3">
            <div className="text-pink-500 font-semibold">
                Age : 
            </div>
            <div >
                27 to 33
            </div>
            </div>
            <div className="flex items-center gap-3">
            <div className="text-pink-500 font-semibold">
                Height : 
            </div>
            <div >
                5'2'' (157 cm) to 5'10'' (178 cm)
            </div>
            </div>
            <div className="flex items-center gap-3">
            <div className="text-pink-500 font-semibold">
                Marital Status : 
            </div>
            <div >
                Never Married
            </div>
            </div>
            <div className="flex items-center gap-3">
            <div className="text-pink-500 font-semibold">
                Mother Toungue : 
            </div>
            <div >
                English, Hindi
            </div>
            </div>
            <div className="flex items-center gap-3">
            <div className="text-pink-500 font-semibold">
                Country Living in : 
            </div>
            <div >
                India
            </div>
            </div>
            <div className="flex items-center gap-3">
            <div className="text-pink-500 font-semibold">
                State Living in : 
            </div>
            <div >
                <span>Uttar Pradesh</span>
            </div>
            </div>
            <div className="flex items-center gap-3">
            <div className="text-pink-500 font-semibold">
                Diet : 
            </div>
            <div >
                Vegetarian
            </div>
            </div>
            <div className="flex items-center gap-3">
            <div className="text-pink-500 font-semibold">
                Goals : 
            </div>
            <div >
                Casual
            </div>
            </div>
            <div className="">
            <div className="text-pink-500 font-semibold">
                Interests : 
            </div>
            <div className="ml-3">
                <ul className="list-disc">
                    <li>Music</li>
                    <li>Cinema</li>
                    <li>Coding</li>
                </ul>
            </div>
            </div> */}

        </div>     
    </div>
  )
}
