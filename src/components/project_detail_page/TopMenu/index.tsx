import { useState } from "react";
import TopMenuItem from "./TopMenuItem";
import { ProjectDetailFilter } from "../../shared/types";

function TopMenu() {
  const [activeFilter, setActiveFilter] = useState<ProjectDetailFilter>(
    ProjectDetailFilter.tasks
  );

  function handleChangeTab(filter: ProjectDetailFilter) {
    setActiveFilter(filter);
  }

  const menus = [
    {
      label: "Tasks",
      active: activeFilter == ProjectDetailFilter.tasks,
      filter: ProjectDetailFilter.tasks,
    },
    {
      label: "Description",
      active: activeFilter == ProjectDetailFilter.description,
      filter: ProjectDetailFilter.description,
    },
    {
      label: "Deadlines",
      active: activeFilter == ProjectDetailFilter.deadlines,
      filter: ProjectDetailFilter.deadlines,
    },
  ];

  return (
    <div className='flex justify-between mt-5'>
      {menus.map((menu) => (
        <TopMenuItem
          label={menu.label}
          active={activeFilter == menu.filter}
          handleChange={() => handleChangeTab(menu.filter)}
        />
      ))}
    </div>
  );
}

export default TopMenu;
