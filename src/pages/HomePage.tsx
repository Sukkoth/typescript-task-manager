import SummaryCards from "../components/SummaryCards";
import HomeNav from "../components/HomeNav";
import TasksList from "../components/Task/TasksList";

function HomePage() {
  return (
    <div className='p-5'>
      <HomeNav />
      <SummaryCards />
      <TasksList header={tasksData.header} tasks={tasksData.tasks} />
    </div>
  );
}

export default HomePage;

const tasksData = {
  header: "Today's Tasks",
  tasks: [
    {
      id: "1",
      checked: false,
      title: "Complete report for meeting",
      projectTitle: "Project X",
    },
    {
      id: "2",
      checked: false,
      title: "Send email to client",
      projectTitle: "Project Y",
    },
    {
      id: "3",
      checked: true,
      title: "Prepare presentation slides",
      projectTitle: "Project Z",
    },
    {
      id: "4",
      checked: false,
      title: "Review code pull request",
      projectTitle: "Project A",
    },
    {
      id: "5",
      checked: true,
      title: "Attend team meeting",
      projectTitle: "Project B",
    },
    {
      id: "6",
      checked: false,
      title: "Update project documentation",
      projectTitle: "Project C",
    },
    {
      id: "7",
      checked: false,
      title: "Schedule project kickoff meeting",
      projectTitle: "Project D",
    },
    {
      id: "8",
      checked: true,
      title: "Follow up with stakeholders",
      projectTitle: "Project E",
    },
    {
      id: "9",
      checked: false,
      title: "Bug fixes for release",
      projectTitle: "Project F",
    },
    {
      id: "10",
      checked: true,
      title: "Write unit tests",
      projectTitle: "Project G",
    },
  ],
};
