import { useGetProjectsQuery } from "../../../react_query/queries";
import ProjectItem from "./ProjectItem";
import { RiLoader4Fill } from "react-icons/ri";

function ProjectsList() {
  const projectsQuery = useGetProjectsQuery();

  return (
    <div className=' mt-5 grid grid-cols-2 gap-5 md:grid-cols-3  md:gap-5 xl:grid-cols-4 mb-56 '>
      {projectsQuery.isLoading && (
        <div className='rounded-2xl font-medium px-10 py-4 text-xl text-center  col-span-full flex flex-col items-center justify-center'>
          <RiLoader4Fill className='animate-spin text-primary mb-5' size={70} />
        </div>
      )}
      {projectsQuery.data?.map((project) => (
        <ProjectItem project={project} key={project.id} />
      ))}
    </div>
  );
}

export default ProjectsList;
