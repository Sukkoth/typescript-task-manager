import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useQueryClient } from "@tanstack/react-query";

import Button from "../components/Button";
import { PROJECT_SCHEMA } from "../Schemas/projectSchema";
import { Project, ProjectForm } from "../components/shared/types";
import { useCreateProject, useUpdateProject } from "../react_query/mutations";
import { userSelector } from "../features/Auth/authSlice";

function NewProject(props: { editableProjectId?: string }) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const user = useSelector(userSelector);

  const projectToUpdate: Project | undefined = props.editableProjectId
    ? queryClient.getQueryData([
        "project",
        { id: props.editableProjectId.toString() },
      ])
    : undefined;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(PROJECT_SCHEMA),
  });

  useEffect(() => {
    if (projectToUpdate)
      reset({
        color: projectToUpdate.color,
        deadline: projectToUpdate?.deadline.split("T")[0],
        description: projectToUpdate.description,
        emoji: projectToUpdate.emoji,
        name: projectToUpdate.name,
      });
  }, [reset, projectToUpdate]);
  const createProject = useCreateProject();
  const updateProject = useUpdateProject();

  const onSubmitHandler = async (formData: ProjectForm) => {
    if (projectToUpdate) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { tasks, ...withoutTasks } = projectToUpdate;
      const toUpdate: Project = {
        ...withoutTasks,
        ...formData,
      };

      updateProject.mutate(toUpdate, {
        onSuccess: (data) => {
          toast.success("Project Updated Successfully");
          queryClient.invalidateQueries({
            queryKey: ["project", { id: projectToUpdate!.id.toString() }],
          });
          reset({
            color: data.color,
            deadline: data?.deadline.split("T")[0],
            description: data.description,
            emoji: data.emoji,
            name: data.name,
          });
        },
        onError: () => {
          toast.error("Error while updating project");
        },
      });
      return;
    }

    createProject.mutate(
      { user_id: user!.id, formData },
      {
        onSuccess: () => {
          toast.success("Project Created Successfully");
          reset();
        },
        onError: () => {
          toast.error("Error while creating project");
        },
      }
    );
  };

  return (
    <div className='p-5'>
      <div className='flex justify-between font-medium items-center'>
        {!projectToUpdate && (
          <p
            onClick={() => navigate(-1)}
            className='text-gray-400 text-sm cursor-pointer'
          >
            cancel
          </p>
        )}
        {!projectToUpdate && <h3 className='text-xl'>New Project</h3>}
      </div>
      <form
        className='mt-10 space-y-8'
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <div className='flex flex-col'>
          <label htmlFor='name' className='app-label'>
            Name
          </label>
          <input
            type='text'
            id='name'
            className='app-input'
            {...register("name")}
          />
          {errors.name?.message && (
            <p className='text-red-300 mt-2 ml-2 text-sm'>
              {errors.name?.message || "Incorrect one here"}
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
        <div className='flex flex-col'>
          <label htmlFor='deadline' className='app-label'>
            Deadline
          </label>
          <input
            id='deadline'
            type='date'
            defaultValue={
              projectToUpdate?.deadline !== undefined
                ? projectToUpdate?.deadline.split("T")[0]
                : undefined
            }
            className='app-input'
            {...register("deadline")}
          />

          {errors.deadline?.message && (
            <p className='text-red-300 mt-2 ml-2 text-sm'>
              {errors.deadline?.message || "Incorrect one here"}
            </p>
          )}
        </div>
        <div className='flex gap-10'>
          <div className='flex flex-col'>
            <label htmlFor='color' className='app-label'>
              Color
            </label>
            <input
              type='color'
              defaultValue={"#DDFF94"}
              className='app-input p-2 w-16 h-16 rounded-sm'
              {...register("color")}
            />
            {errors.color?.message && (
              <p className='text-red-300 mt-2 ml-2 text-sm'>
                {errors.color?.message || "Incorrect one here"}
              </p>
            )}
          </div>

          <div className='flex flex-col'>
            <label htmlFor='color' className='app-label'>
              Emoji
            </label>
            <input
              type='text'
              defaultValue='🚀'
              className='app-input w-16'
              {...register("emoji")}
            />
            {errors.emoji?.message && (
              <p className='text-red-300 mt-2 ml-2 text-sm'>
                {errors.emoji?.message || "Incorrect one here"}
              </p>
            )}
          </div>
        </div>

        <Button
          onClick={() => {}}
          textColor='black'
          rounded='rounded-3xl'
          type='submit'
        >
          {createProject.isPending || updateProject.isPending
            ? "Loading . . ."
            : `${projectToUpdate ? "Update" : "Create"} Project`}
        </Button>
      </form>
    </div>
  );
}

export default NewProject;
