import { ReactElement } from "react";

interface itemsProps {
    text:string;
    StartIcon?:ReactElement;
    onclick?:()=>void;
}

export default function Items(props:itemsProps) {
  return (
    <div className="hover:cursor-pointer hover:bg-slate-200/70 py-1 px-4 rounded-lg">
      <div>
        {props.StartIcon ? props.StartIcon:null}
      </div>
      <button onClick={props.onclick} className="border-none">
        {props.text}
      </button>
    </div>
  )
}
