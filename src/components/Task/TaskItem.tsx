import { useState } from "react";
import CheckBox from "../CheckBox";
import { Task } from "../shared/types";
import { useChangeTaskStatus } from "../../react_query/mutations";

type TaskItemProp = {
  task: Task;
  projectTitle?: string;
};

type Priority = "HIGH" | "LOW" | "MEDIUM" | undefined;

function TaskItem({ task, projectTitle }: TaskItemProp) {
  const [checked, setChecked] = useState<boolean>(task.status === "COMPLETED");

  const updateTaskStatus = useChangeTaskStatus();

  function setPriorityBg(status: Priority) {
    return status === "HIGH"
      ? "bg-red-400"
      : status === "MEDIUM"
      ? "bg-yellow-400"
      : status === "LOW"
      ? "bg-primary text-black"
      : "";
  }

  return (
    <div className='flex bg-shade-200 px-5 h-20 items-center gap-7 rounded-xl'>
      <CheckBox
        key={task.id}
        onChange={(val) => {
          setChecked(val);
          updateTaskStatus.mutate({
            id: `${task.id}`,
            value: val ? "COMPLETED" : "IN_PROGRESS",
          });
        }}
        value={checked}
      />
      <div className='flex justify-between items-center w-full'>
        <div>
          <p className='text-sm font-extralight'>{projectTitle}</p>
          <h4 className={checked ? "line-through" : ""}>{task.title}</h4>
        </div>
        <div
          className={` ${setPriorityBg(
            task?.priority as Priority
          )} py-1 px-3 rounded-3xl text-xs sm:text-sm w-fit`}
        >
          {task?.priority}
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
