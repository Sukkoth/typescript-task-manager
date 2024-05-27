import { Project } from "../shared/types";
import { BsClock } from "react-icons/bs";
import { TaskStatus } from "../shared/types";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Alert from "../Alert";
import { FiAlertTriangle } from "react-icons/fi";

function Deadlines() {
  const { projectId } = useParams();
  const project = useQueryClient().getQueryData([
    "project",
    {
      id: projectId,
    },
  ]) as Project;

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

  function getProjectColorBg() {
    return `${project.color ? (project.color as string) : "#DDFF94"}`;
  }

  return (
    <div className='mt-5 mb-32'>
      <h3 className='ml-4 mt-10 text-lg md:text-xl font-medium relative before:absolute before:content-[" "] before:size-2 before:bg-orange-500 before:rounded-full before:top-1/2 before:-left-4 before:-translate-y-1/2'>
        Deadlines
      </h3>

      {project.tasks && project.tasks.length > 0 ? (
        <div className='mt-10 space-y-10'>
          {project.tasks.map((task) => (
            <div
              className='grid grid-cols-3 lg:w-3/4 gap-6 lg:gap-10'
              key={task.id}
            >
              <div className='col-span-1 flex items-center justify-end'>
                {task.deadline && new Date(task.deadline!).toDateString()}
              </div>
              <div
                style={{
                  borderLeftColor: getProjectColorBg(),
                }}
                className={`col-span-2 border-l-8  bg-shade-100 flex p-2 lg:p-5 rounded-2xl flex-col`}
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
                {task.estimate_hours && (
                  <p className='flex items-center gap-3 mt-3 text-gray-400'>
                    <BsClock /> {task.estimate_hours} hrs
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='mt-5'>
          <Alert
            text='No task deadlines set'
            showBorder
            type='ERROR'
            showCloseButton
            icon={<FiAlertTriangle size={25} />}
          />
        </div>
      )}
    </div>
  );
}

export default Deadlines;
