const AboutData = [
  ["Lifestyle", "Vegetarian, Social smoker and drinker"],
  ["Hometown", "Mathura, UP, India"],
  ["Relationship", "Not Married"],
  ["Job", "Software Developer"],
  ["Education", "B.Tech in Civil from IIT Jammu"],
  ["Languages", "CPP, Python, JavaScript, English, Hindi"],
  ["Objective", "Looking for casual, just for hookup"],
];

export default function AboutCard() {
  return (
    <div className="bg-white/90 shadow-md shadow-slate-200 border border-slate-200 rounded-2xl z-20 gap-6 p-5 mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-6 border-b border-gray-600 pb-2">About</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-20 text-sm">
        {AboutData.map(([label, value], index) => (
          <div key={index} className="flex flex-col">
            <span className="text-pink-500 font-semibold">{label}</span>
            <span className="">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
