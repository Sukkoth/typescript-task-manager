import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { PROJECT_SCHEMA } from "../Schemas/projectSchema";
import { useForm } from "react-hook-form";
import { ProjectForm } from "../components/shared/types";
import { useCreateProject } from "../react_query/mutations";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { userSelector } from "../features/Auth/authSlice";

function NewProject() {
  const navigate = useNavigate();
  const user = useSelector(userSelector);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(PROJECT_SCHEMA),
  });

  const createProject = useCreateProject();

  const onSubmitHandler = async (formData: ProjectForm) => {
    createProject.mutate(
      { user_id: user!.id, formData },
      {
        onSuccess: () => {
          toast.success("Project Created Successfully");
          reset();
        },
        onError: () => {
          toast.error("Error while creating user");
        },
      }
    );
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
        <h3 className='text-xl'>New Project</h3>
        <div></div>
      </div>
      <form
        className='mt-10 space-y-8'
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <div className='flex flex-col'>
          <label htmlFor='name' className='text-xl'>
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
          <label htmlFor='description' className='text-xl'>
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
          <label htmlFor='deadline' className='text-xl'>
            Deadline
          </label>
          <input
            id='deadline'
            type='date'
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
            <label htmlFor='color' className='text-xl'>
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
            <label htmlFor='color' className='text-xl'>
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
          {createProject.isPending ? "Creating . . ." : "Create Project"}
        </Button>
      </form>
    </div>
  );
}

export default NewProject;
