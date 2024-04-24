import React from "react";
import { NavLink } from "react-router-dom";

type BottomNavItemPropTypes = {
  to: string;
  icon: React.ReactNode;
  label: string;
};

function BottomNavItem({ to, icon, label }: BottomNavItemPropTypes) {
  return (
    <NavLink
      to={to}
      className='flex flex-col items-center gap-2 text-gray-500 hover:text-primary hover:cursor-pointer'
    >
      {icon}
      <p className='text-xs'>{label}</p>
    </NavLink>
  );
}

export default BottomNavItem;
