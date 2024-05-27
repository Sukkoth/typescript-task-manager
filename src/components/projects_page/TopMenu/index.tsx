import { useState } from "react";
import TopMenuItem from "./TopMenuItem";
import { ProjectStatus } from "../../shared/types";
import { useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

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
    <Swiper
      breakpoints={{
        320: { slidesPerView: 2.5, spaceBetween: 5 },
        768: { slidesPerView: 4.5 },
      }}
      slidesPerView={"auto"}
      className='mt-5'
    >
      <SwiperSlide>
        <TopMenuItem
          label='All'
          active={activeFilter == null}
          handleChange={() => handleChangeTab(null)}
        />
      </SwiperSlide>
      <SwiperSlide>
        <TopMenuItem
          label='In Progress'
          active={activeFilter?.toString() === "IN_PROGRESS"}
          handleChange={() => handleChangeTab("IN_PROGRESS")}
        />
      </SwiperSlide>
      <SwiperSlide>
        <TopMenuItem
          label='Completed'
          active={activeFilter?.toString() == "COMPLETED"}
          handleChange={() => handleChangeTab("COMPLETED")}
        />
      </SwiperSlide>
      <SwiperSlide>
        <TopMenuItem
          label='On Hold'
          active={activeFilter === "ON_HOLD"}
          handleChange={() => handleChangeTab("ON_HOLD")}
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default TopMenu;
