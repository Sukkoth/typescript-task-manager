import { useNavigate } from "react-router-dom";
import { Project } from "../../shared/types";

function ProjectItem({ project }: { project: Project }) {
  const navigate = useNavigate();
  const allTasksCount = project.tasks?.length || 0;
  const completedTasksCount =
    project.tasks?.filter((task) => task.status === "COMPLETED").length || 0;

  const percentCompleted = (completedTasksCount * 100) / allTasksCount;
  const classString = "absolute inset-0";

  const emojiClass = "p-3 rounded-full text-2xl";

  return (
    <div
      onClick={() => navigate("/projects/" + project.id)}
      className='bg-shade-100 aspect-square rounded-2xl py-6 px-4 flex flex-col justify-between items-start'
    >
      <span className={emojiClass} style={{ backgroundColor: project.color }}>
        {project.emoji || "😎"}
      </span>

      <div className='flex flex-col gap-1 w-full'>
        <h2 className='w-full text-sm break-normal overflow-hidden whitespace-nowrap text-ellipsis lg:text-xl'>
          {project.name}
        </h2>
        {project.status}
        <p className='text-gray-500 font-light'>{allTasksCount} Tasks</p>
        <div className='relative w-full rounded-2x overflow-hidden'>
          <div className='w-full bg-white h-1'></div>
          <div className={classString}>
            <div
              className='h-full'
              style={{
                width: `${percentCompleted}%`,
                backgroundColor:
                  percentCompleted > 0 && project.color
                    ? project.color
                    : undefined,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
