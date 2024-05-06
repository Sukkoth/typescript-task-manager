import { useState } from "react";
import CheckBox from "../CheckBox";
import { Task } from "../shared/types";

type TaskItemProp = {
  task: Task;
  projectTitle?: string;
};

function TaskItem({ task, projectTitle }: TaskItemProp) {
  const [checked, setChecked] = useState<boolean>(task.status === "COMPLETED");

  return (
    <div className='flex bg-shade-200 px-5 h-20 items-center gap-7 rounded-xl'>
      <CheckBox
        key={task.id}
        onChange={(val) => {
          setChecked(val);
        }}
        value={checked}
      />
      <div>
        <p className='text-sm font-extralight'>{projectTitle}</p>
        <h4 className={checked ? "line-through" : ""}>{task.title}</h4>
      </div>
    </div>
  );
}

export default TaskItem;
