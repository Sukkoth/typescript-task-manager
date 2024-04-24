import { BiSearch } from "react-icons/bi";
import TopMenu from "../components/projects_page/TopMenu";
import ProjectsList from "../components/projects_page/projects/ProjectsList";

function ProjectsPage() {
  return (
    <div className='p-5'>
      <nav className='flex justify-between text-3xl'>
        <h1 className=' font-medium'>Projects</h1>
        <BiSearch />
      </nav>
      <TopMenu />
      <ProjectsList />
    </div>
  );
}

export default ProjectsPage;
