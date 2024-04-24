import { useNavigate } from "react-router-dom";
import PriorityInput from "../components/PriorityInput";
import { useState } from "react";
import { TaskPriority } from "../components/shared/types";
import Button from "../components/Button";

function NewTask() {
  const [priority, setPriority] = useState<TaskPriority>(TaskPriority.low);
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <div className='p-5'>
      <div className='flex justify-between font-medium items-center'>
        <p
          onClick={() => navigate(-1)}
          className='text-gray-400 text-sm cursor-pointer'
        >
          cancel
        </p>
        <h3 className='text-xl'>New Task</h3>
        <div></div>
      </div>
      <form className='mt-10 space-y-8' onSubmit={handleSubmit}>
        <div className='flex flex-col'>
          <label htmlFor='title' className='text-xl'>
            Title
          </label>
          <input
            type='text'
            id='title'
            className='app-input'
            placeholder='Enter task title'
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='description' className='text-xl'>
            Description
          </label>
          <textarea id='description' rows={5} className='app-input' />
        </div>
        <div className='grid grid-cols-2 gap-5 w-full mx-auto'>
          <div className='flex flex-col'>
            <label htmlFor='duedate' className='text-xl'>
              Due Date
            </label>
            <input
              id='duedate'
              className='app-input'
              type='date'
              placeholder='Enter Date'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='duration' className='text-xl'>
              Estimate Task (hrs)
            </label>
            <input
              id='duration'
              className='app-input'
              type='number'
              placeholder='2'
              step={0.5}
            />
          </div>
        </div>
        <PriorityInput
          value={priority}
          onChange={(value) => setPriority(value)}
        />
        <div className='flex flex-col'>
          <label htmlFor='project' className='text-xl'>
            Project
          </label>
          <select name='project' id='project' className='app-input'>
            <option value='project1'>
              <div className='flex'>
                <span className='SIZE-3 bg-blue-500'></span>
                <span>PROJECT 1</span>
              </div>
            </option>
            <option value='project2'>PROJECT 2</option>
            <option value='project3'>PROJECT 3</option>
            <option value='project4'>PROJECT 4</option>
            <option value='project5'>PROJECT 5</option>
          </select>
        </div>

        <Button onClick={() => {}} textColor='black' rounded='rounded-3xl'>
          Create Task
        </Button>
      </form>
    </div>
  );
}

export default NewTask;
