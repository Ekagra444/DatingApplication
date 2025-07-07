import { Montserrat } from '@next/font/google';
import { Work_Sans } from '@next/font/google';
import { Kalam } from 'next/font/google';
const poppins = Kalam({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin','devanagari'],
  display: 'swap',
});
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: [ '500'],
});
const workSans = Work_Sans({
    subsets: ['latin'],
  weight: [ '500'],
})
function Navbar() {
  return (
    <div className='pt-4'>
    <div className={`${montserrat.className} flex items-center justify-between`}>
        <div className={`tracking-tighter rounded-md backdrop-blur-lg px-20 flex items-center justify-between`}>
        <div className="flex gap-16 ">
            <div className="transition-all font-medium py-1 hover:opacity-50  cursor-pointer rounded-md text-lg">Matches</div>
            <div className="transition-all font-medium py-1 hover:opacity-50 cursor-pointer text-lg">About Us</div>
            <div className="transition-all hover:opacity-50 font-medium py-1 cursor-pointer text-lg">Research</div>
        </div>
        </div>
        <div className={`${poppins.className} font-black tracking-tighter text-4xl`}>
            संगमन
        </div>
        <div className={`mr-10 tracking-tighter hover:bg-amber-400/70 hover:text-white p-3 font-semibold rounded-lg cursor-pointer transition-all`}>
            <button className=''>Log Out</button>
        </div>
    </div>
    </div>
  )
}

export default Navbar
