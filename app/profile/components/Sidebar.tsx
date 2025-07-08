import Items from "./Sidebarcomponents/Items";

export default function Sidebar() {
  return (
    <div className="h-screen mt-2 flex flex-col items-center gap-2">
        <Items text="My Profile"/> 
        <Items text="Best Matches"/> 
        <Items text="Messages"/>        
        <Items text="Settings"/> 
    </div>
  )
}
