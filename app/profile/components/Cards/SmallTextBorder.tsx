interface interProps {
    text:string;
    padding?:string;
}

export default function SmallTextBorder(props:interProps) {
  return (
    <span className="rounded-2xl shadow-md shadow-pink-300/70 bg-pink-500/90 text-white/90 py-0.5 px-4 text-sm">
      {props.text}
    </span>
  )
}
