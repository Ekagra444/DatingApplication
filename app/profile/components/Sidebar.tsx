import BestMatchsIcon from "./Sidebarcomponents/Icons/BestMatchsIcon";
import MessagesIcon from "./Sidebarcomponents/Icons/MessagesIcon";
import SettingIcon from "./Sidebarcomponents/Icons/SettingIcon";
import UserIcon from "./Sidebarcomponents/Icons/UserIcon";
import Items from "./Sidebarcomponents/Items";
export default function Sidebar() {
  return (
    <div className="h-screen mt-12 flex flex-col items-center gap-2">
        <Items text="My Profile" StartIcon={<UserIcon size="size-4" stroke="white"/>}/> 
        <Items text="Messages" StartIcon={<MessagesIcon size="size-3"/>}/>        
        <Items text="Best Matches" StartIcon={<BestMatchsIcon size="size-4" />}/> 
        <Items text="Settings" StartIcon={<SettingIcon size="size-4"/>}/> 
    </div>
  )
}
