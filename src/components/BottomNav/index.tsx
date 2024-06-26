import { BiHome, BiPlus } from "react-icons/bi";
import BottomNavItem from "./BottomNavItem";
import { HiOutlineBriefcase } from "react-icons/hi";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { RiMenuFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function BottomNav() {
  return (
    <div
      id='bottom-nav' //to mark active links
      className='fixed flex justify-evenly items-center bottom-0 w-full lg:w-[65%] mx-auto py-3 bg-primary dark:bg-shade-200 border-2 border-secondary dark:border-shade-300 rounded-[3rem] z-50'
    >
      <Link to='new'>
        <div className='bg-secondary text-white dark:text-black dark:bg-primary size-10 cursor-pointer rounded-full center-all'>
          <BiPlus size={25} />
        </div>
      </Link>
      <BottomNavItem label='Home' icon={<BiHome size={25} />} to='/' />
      <BottomNavItem
        label='Projects'
        icon={<HiOutlineBriefcase size={25} />}
        to='projects'
      />
      <BottomNavItem
        to='calendar'
        label='Calendar'
        icon={<IoCalendarNumberOutline size={25} />}
      />
      <BottomNavItem to='menu' label='Menu' icon={<RiMenuFill size={25} />} />
    </div>
  );
}

export default BottomNav;
