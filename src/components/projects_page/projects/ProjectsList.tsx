import { useGetProjectsQuery } from "../../../react_query/queries";
import Loading from "../../Loading";
import ProjectItem from "./ProjectItem";

function ProjectsList() {
  const projectsQuery = useGetProjectsQuery();

  return (
    <div className=' mt-5 grid grid-cols-2 gap-5 md:grid-cols-3  md:gap-5 xl:grid-cols-4 mb-56 '>
      {projectsQuery.isLoading && <Loading />}
      {projectsQuery.data?.map((project) => (
        <ProjectItem project={project} key={project.id} />
      ))}
    </div>
  );
}

export default ProjectsList;
