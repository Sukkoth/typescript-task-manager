import { useEffect, useState } from "react";
import { TaskPriority } from "./shared/types";

type Props = {
  value?: TaskPriority;
  onChange: (value: TaskPriority) => void;
};

function PriorityInput({ value = TaskPriority.low, onChange }: Props) {
  const [, setPriority] = useState<TaskPriority>(value);
  useEffect(() => {
    setPriority(value);
  }, [value]);

  function handleChange(priorityItem: TaskPriority) {
    setPriority(() => {
      onChange(priorityItem);
      return priorityItem;
    });
  }
  return (
    <div>
      <p className='app-label'>Priority</p>
      <div className='priority-input text-white'>
        <div
          className={`item ${TaskPriority.low === value ? "active" : ""}`}
          onClick={() => handleChange(TaskPriority.low)}
        >
          Low
        </div>
        <div
          className={`item ${TaskPriority.medium === value ? "active" : ""}`}
          onClick={() => handleChange(TaskPriority.medium)}
        >
          Medium
        </div>
        <div
          className={`item ${TaskPriority.high === value ? "active" : ""}`}
          onClick={() => handleChange(TaskPriority.high)}
        >
          High
        </div>
      </div>
    </div>
  );
}

export default PriorityInput;
