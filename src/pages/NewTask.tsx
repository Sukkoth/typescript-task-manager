import { useNavigate, useSearchParams } from "react-router-dom";
import PriorityInput from "../components/PriorityInput";
import { useState } from "react";
import { TaskForm, TaskPriority } from "../components/shared/types";
import Button from "../components/Button";
import { TASK_SCHEMA } from "../Schemas/taskSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useGetProjectsQuery } from "../react_query/queries";
import { useCreateTask } from "../react_query/mutations";
import { toast } from "react-toastify";

function NewTask() {
  const [priority, setPriority] = useState<TaskPriority>(TaskPriority.low);
  const navigate = useNavigate();
  const projects = useGetProjectsQuery();
  const createTask = useCreateTask();
  const [searchParams] = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(TASK_SCHEMA),
  });

  const onSubmitHandler = async (formData: TaskForm) => {
    try {
      await createTask.mutateAsync(formData);
      reset();
      toast("Task is created succesfully", {
        type: "success",
      });
    } catch (error) {
      toast("Error while created the task", {
        type: "error",
      });
    }
  };

  return (
    <div className='p-5'>
      <div className='flex justify-between font-medium items-center'>
        <p
          onClick={() => navigate(-1)}
          className='text-gray-400 text-sm cursor-pointer'
        >
          cancel
        </p>
        <h3 className='text-lg md:text-xl'>New Task</h3>
        <div></div>
      </div>
      <form
        className='mt-10 space-y-8'
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <div className='flex flex-col'>
          <label htmlFor='title' className='app-label'>
            Title
          </label>
          <input
            type='text'
            id='title'
            className='app-input'
            placeholder='Enter task title'
            {...register("title")}
          />
          {errors.title?.message && (
            <p className='text-red-300 mt-2 ml-2 text-sm'>
              {errors.title?.message || "Incorrect one here"}
            </p>
          )}
        </div>
        <div className='flex flex-col'>
          <label htmlFor='description' className='app-label'>
            Description
          </label>
          <textarea
            id='description'
            rows={5}
            className='app-input'
            {...register("description")}
          />
          {errors.description?.message && (
            <p className='text-red-300 mt-2 ml-2 text-sm'>
              {errors.description?.message || "Incorrect one here"}
            </p>
          )}
        </div>
        <div className='grid sm:grid-cols-2 gap-5 w-full mx-auto'>
          <div className='flex flex-col'>
            <label htmlFor='deadline' className='app-label'>
              Deadline
            </label>
            <input
              id='deadline'
              className='app-input'
              type='date'
              placeholder='Enter Date'
              {...register("deadline")}
            />
            {errors.deadline?.message && (
              <p className='text-red-300 mt-2 ml-2 text-sm'>
                {errors.deadline?.message || "Incorrect one here"}
              </p>
            )}
          </div>
          <div className='flex flex-col'>
            <label htmlFor='duration' className='app-label'>
              Estimate Task (hrs)
            </label>
            <input
              id='duration'
              className='app-input'
              type='number'
              placeholder='2'
              step={0.5}
              {...register("estimate_hours")}
            />
            {errors.estimate_hours?.message && (
              <p className='text-red-300 mt-2 ml-2 text-sm'>
                {errors.estimate_hours?.message || "Incorrect one here"}
              </p>
            )}
          </div>
        </div>
        <PriorityInput
          value={priority}
          onChange={(value) => {
            setPriority(value);
            setValue("priority", value);
          }}
        />
        {errors.priority?.message && (
          <p className='text-red-300 mt-2 ml-2 text-sm'>
            {errors.priority?.message || "Incorrect one here"}
          </p>
        )}
        <div className='flex flex-col'>
          <label htmlFor='project' className='app-label'>
            Project
          </label>
          <select
            disabled={
              projects.isPending ||
              projects.isError ||
              projects.data.length === 0
            }
            defaultValue={searchParams.get("projectId") || undefined}
            id='project'
            className='app-input'
            {...register("project_id")}
          >
            {projects.data?.map((project) => (
              <option value={project.id} key={project.id}>
                {project.name}
              </option>
            ))}
          </select>
        </div>

        <Button
          textColor='black'
          rounded='rounded-3xl'
          type='submit'
          className='w-full'
        >
          Create Task
        </Button>
      </form>
    </div>
  );
}

export default NewTask;
