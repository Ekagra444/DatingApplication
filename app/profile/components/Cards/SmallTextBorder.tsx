interface interProps {
    text:string;
    padding?:string;
}

export default function SmallTextBorder(props:interProps) {
  return (
    <span className="transition-all rounded-2xl shadow-md hover:shadow-violet-300/50 bg-violet-500 text-white/90 text-sm py-0.5 px-4">
      {props.text}
    </span>
  )
}
