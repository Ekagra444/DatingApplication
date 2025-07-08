interface interProps {
    text:string;
    padding?:string;
}

export default function SmallTextBorder(props:interProps) {
  return (
    <span className="rounded-2xl bg-rose-400 py-0.5 px-4 text-sm font-normal">
      {props.text}
    </span>
  )
}
