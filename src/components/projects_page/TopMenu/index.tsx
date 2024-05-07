import { useState } from "react";
import TopMenuItem from "./TopMenuItem";
import { ProjectStatus } from "../../shared/types";
import { useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

function TopMenu() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const [activeFilter, setActiveFilter] = useState<ProjectStatus | null>(
    searchParams.get("filter") as ProjectStatus
  );

  function handleChangeTab(filter: ProjectStatus | null) {
    setActiveFilter(filter);
    setSearchParams((prevSearchParams) => {
      filter !== null
        ? prevSearchParams.set("filter", filter.toString())
        : prevSearchParams.delete("filter");
      return prevSearchParams;
    });

    queryClient.invalidateQueries({
      queryKey: ["projects", { status: filter }],
    });
  }
  return (
    <div className='flex justify-between mt-5'>
      <TopMenuItem
        label='All'
        active={activeFilter == null}
        handleChange={() => handleChangeTab(null)}
      />
      <TopMenuItem
        label='In Progress'
        active={activeFilter?.toString() === "IN_PROGRESS"}
        handleChange={() => handleChangeTab("IN_PROGRESS")}
      />
      <TopMenuItem
        label='Completed'
        active={activeFilter?.toString() == "COMPLETED"}
        handleChange={() => handleChangeTab("COMPLETED")}
      />
      <TopMenuItem
        label='On Hold'
        active={activeFilter === "ON_HOLD"}
        handleChange={() => handleChangeTab("ON_HOLD")}
      />
    </div>
  );
}

export default TopMenu;
