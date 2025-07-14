import { ReactElement } from "react";

interface itemsProps {
    text:string;
    StartIcon?:ReactElement;
    onclick?:()=>void;
}

export default function Items(props:itemsProps) {
  return (
    <div className="hover:cursor-pointer items-center hover:bg-slate-800/70 px-2 py-1 flex rounded-lg gap-2">
      <div>
        {props.StartIcon ? props.StartIcon:null}
      </div>
      <button onClick={props.onclick} className="">
        {props.text}
      </button>
    </div>
  )
}
