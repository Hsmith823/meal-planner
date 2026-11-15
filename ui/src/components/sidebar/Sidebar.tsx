import './Sidebar.css'
import { MdOutlineCalendarMonth } from "react-icons/md";
import { BiFoodMenu } from "react-icons/bi";
import { GrBasket } from "react-icons/gr";

function Sidebar() {
  return (
    <div id="sidebar-component">
      <MdOutlineCalendarMonth title="Calender"/>
      <BiFoodMenu title="Recipes"/>
      <GrBasket title="Shopping List"/>
    </div>
  )
}

export default Sidebar
