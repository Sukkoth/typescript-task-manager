import { BsClock } from "react-icons/bs";
import { Task, TaskStatus } from "../shared/types";

function Timeline({ tasks }: { tasks: Task[] }) {
  function setStatusBg(status: TaskStatus) {
    return status === "NOT_STARTED"
      ? "bg-red-400"
      : status === "COMPLETED"
      ? "bg-primary text-black"
      : status === "IN_PROGRESS"
      ? "bg-orange-500"
      : status === "ON_HOLD"
      ? "bg-yellow-500"
      : "bg-blue-500";
  }

  function getProjectColorBg(color?: string) {
    return `${color ? (color as string) : "#DDFF94"}`;
  }
  return (
    <div className='mt-10 space-y-10'>
      {tasks.map((task) => (
        <div
          className='grid grid-cols-3 lg:w-3/4 gap-6 lg:gap-10'
          key={task.id}
        >
          <div className='col-span-1 flex items-center justify-end'>
            {task.deadline && new Date(task.deadline!).toDateString()}
          </div>
          <div
            style={{
              borderLeftColor: getProjectColorBg(task.project?.color),
            }}
            className={`col-span-2 border-l-8  bg-shade-100 flex p-5 rounded-2xl flex-col`}
          >
            <div className='flex justify-between flex-col lg:flex-row gap-3 md:gap-2'>
              <h1>{task.title}</h1>
              <div
                className={`${setStatusBg(
                  task.status
                )} py-1 px-3 rounded-3xl text-xs sm:text-sm w-fit`}
              >
                {task.status.replace("_", " ")}
              </div>
            </div>
            <p className='flex items-center gap-3 mt-3 text-gray-400'>
              <BsClock /> {task.estimate_hours} hrs
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Timeline;
