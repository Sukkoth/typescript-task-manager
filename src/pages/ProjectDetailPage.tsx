import Details from "../components/project_detail_page/Details";
import TopMenu from "../components/project_detail_page/TopMenu";

function ProjectDetailPage() {
  return (
    <div className='p-5'>
      <h1 className=' font-medium text-3xl'>Rig App</h1>
      <TopMenu />
      <h3 className='ml-4 mt-10 text-xl font-medium relative before:absolute before:content-[" "] before:size-2 before:bg-orange-500 before:rounded-full before:top-1/2 before:-left-4 before:-translate-y-1/2'>
        To Do
      </h3>
      <Details project={project} />
    </div>
  );
}

export default ProjectDetailPage;

const project = {
  id: "1",
  title: "Website Redesign",
  description: "Redesign company website to improve user experience.",
  emoji: "🎨",
  color: "#FF5733",
  deadline: new Date("2024-06-30"),
  tasks: [
    { id: "1", checked: false, title: "Complete design mockups" },
    { id: "2", checked: true, title: "Develop frontend components" },
    { id: "3", checked: false, title: "Write API documentation" },
    { id: "4", checked: true, title: "Test application for bugs" },
    { id: "5", checked: false, title: "Deploy to production server" },
  ],
};
