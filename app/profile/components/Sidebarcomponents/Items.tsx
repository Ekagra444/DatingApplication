import { ReactElement } from "react";

interface itemsProps {
    text:string;
    StartIcon?:ReactElement;
    onclick?:()=>void;
}

export default function Items(props:itemsProps) {
  return (
    <div >
      <div>
        {props.StartIcon ? props.StartIcon:null}
      </div>
      <button onClick={props.onclick} className="border-none">
        {props.text}
      </button>
    </div>
  )
}
