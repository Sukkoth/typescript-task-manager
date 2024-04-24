import { PiStack } from "react-icons/pi";
import { Task } from "../shared/types";
import TaskItem from "./TaskItem";
import EmptyListAlert from "./EmptyListAlert";

type TasksListPropTypes = {
  header?: string;
  tasks: Task[];
};
function TasksList({ header, tasks }: TasksListPropTypes) {
  return (
    <div className='flex flex-col gap-5 mt-10'>
      {header && (
        <div className='flex justify-between items-center'>
          <h2 className='text-2xl'>{header}</h2>
          <PiStack size={25} color='grey' />
        </div>
      )}
      {tasks.length === 0 ? (
        <EmptyListAlert />
      ) : (
        tasks.map((task) => (
          <TaskItem
            task={task}
            projectTitle={task.projectTitle}
            key={task.id}
          />
        ))
      )}
    </div>
  );
}

export default TasksList;
