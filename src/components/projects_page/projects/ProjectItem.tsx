import { useNavigate } from "react-router-dom";
import { Project } from "../../shared/types";

function ProjectItem({ project }: { project: Project }) {
  const navigate = useNavigate();
  const allTasksCount = project.tasks.length;
  const completedTasksCount = project.tasks.filter(
    (task) => task.checked
  ).length;

  const percentCompleted = (completedTasksCount * 100) / allTasksCount;
  const classString = "absolute inset-0";

  return (
    <div
      onClick={() => navigate("/projects/" + project.id)}
      className='bg-shade-100 aspect-square rounded-2xl py-6 px-4 flex flex-col justify-between items-start'
    >
      <span
        className='
         bg-shade-300
         p-3 rounded-full text-2xl'
      >
        {project.emoji || "😎"}
      </span>

      <div className='flex flex-col gap-1 w-full'>
        <h2 className='text-xl'>{project.title}</h2>
        <p className='text-gray-500 font-light'>{allTasksCount} Tasks</p>
        <div className='relative w-full rounded-2x overflow-hidden'>
          <div className='w-full bg-white h-1'></div>
          <div
            // style={{ backgroundColor: project.color }}
            className={classString}
          >
            <div
              className='h-full bg-primary'
              style={{
                width: `${percentCompleted}%`,
                backgroundColor: project.color,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
