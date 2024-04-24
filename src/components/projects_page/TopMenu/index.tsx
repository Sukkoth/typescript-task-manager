import { useState } from "react";
import TopMenuItem from "./TopMenuItem";
import { ProjectsFilter } from "../../shared/types";

function TopMenu() {
  const [activeFilter, setActiveFilter] = useState<ProjectsFilter>(
    ProjectsFilter.all
  );

  function handleChangeTab(filter: ProjectsFilter) {
    setActiveFilter(filter);
  }
  return (
    <div className='flex justify-between mt-5'>
      <TopMenuItem
        label='All'
        active={activeFilter == ProjectsFilter.all}
        handleChange={() => handleChangeTab(ProjectsFilter.all)}
      />
      <TopMenuItem
        label='Active'
        active={activeFilter == ProjectsFilter.active}
        handleChange={() => handleChangeTab(ProjectsFilter.active)}
      />
      <TopMenuItem
        label='Finished'
        active={activeFilter == ProjectsFilter.finished}
        handleChange={() => handleChangeTab(ProjectsFilter.finished)}
      />
    </div>
  );
}

export default TopMenu;
