import { Link } from "react-router-dom";
import TasksList from "../Task/TasksList";
import { Project } from "../shared/types";

type Props = {
  project: Project;
};

function Details({ project }: Props) {
  return (
    <div className='w-full mt-5'>
      <Link
        to={`/new/task?projectId=${project.id}`}
        className='flex bg-gray-200 hover:bg-gray-300 dark:bg-shade-200 px-5 h-16 items-center gap-7 rounded-xl text-4xl font-bold justify-center dark:hover:bg-shade-100'
      >
        +
      </Link>
      {project.tasks && project.tasks?.length > 0 && (
        <TasksList tasks={project.tasks} />
      )}
    </div>
  );
}

export default Details;
