import TasksList from "../Task/TasksList";
import { Project } from "../shared/types";

type Props = {
  project: Project;
};

function Details({ project }: Props) {
  return (
    <div className='w-full mt-5'>
      <div className='flex bg-shade-200 px-5 h-16 items-center gap-7 rounded-xl text-4xl font-bold justify-center hover:bg-shade-100'>
        +
      </div>
      <TasksList tasks={project.tasks} />
    </div>
  );
}

export default Details;
