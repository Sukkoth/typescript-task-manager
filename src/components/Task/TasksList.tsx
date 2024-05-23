import { Task } from "../shared/types";
import TaskItem from "./TaskItem";
import EmptyListAlert from "./EmptyListAlert";
import { useState } from "react";
("react-icons/io5");
import { FaAnglesDown } from "react-icons/fa6";

type TasksListPropTypes = {
  header?: string;
  tasks: Task[];
  projectName?: string;
  shrinkable?: boolean;
};
function TasksList({
  header,
  tasks,
  projectName,
  shrinkable = false,
}: TasksListPropTypes) {
  const [showAll, setShowAll] = useState<boolean>(false);

  const tasksToDisplay = showAll ? tasks : tasks.slice(0, 8);

  return (
    <div className='flex flex-col gap-5 mt-10 mb-32'>
      {header && (
        <div className='flex justify-between items-center'>
          <h2 className='text-2xl'>{header}</h2>
          {shrinkable && (
            <div
              className='flex gap-2 items-center text-gray-500 cursor-pointer me-1'
              onClick={() => setShowAll((prev) => !prev)}
            >
              <p>All Tasks</p>
              <span className={`${showAll ? "rotate-180" : ""} duration-300`}>
                <FaAnglesDown />
              </span>
            </div>
          )}
        </div>
      )}
      {tasks.length === 0 ? (
        <EmptyListAlert />
      ) : (
        tasksToDisplay.map((task) => (
          <TaskItem
            task={task}
            projectTitle={projectName || task?.project?.name}
            key={task.id}
          />
        ))
      )}
    </div>
  );
}

export default TasksList;
