import { ReactElement } from "react";

interface itemsProps {
    text:string;
    StartIcon?:ReactElement;
    onclick?:()=>void;
}

export default function Items(props:itemsProps) {
  return (
    <div className="hover:cursor-pointer hover:bg-slate-800/70 py-1 px-4 flex items-center gap-2 rounded-lg">
      <div>
        {props.StartIcon ? props.StartIcon:null}
      </div>
      <button onClick={props.onclick} className="border-none">
        {props.text}
      </button>
    </div>
  )
}
