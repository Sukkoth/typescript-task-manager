import SummaryCards from "../components/SummaryCards";
import HomeNav from "../components/HomeNav";
import TasksList from "../components/Task/TasksList";
import { useGetTasks } from "../react_query/queries";
import Loading from "../components/Loading";

function HomePage() {
  const tasks = useGetTasks();
  return (
    <div className='p-5'>
      <HomeNav />
      <SummaryCards />
      {tasks.isLoading && <Loading />}
      {!tasks.isError && tasks.data && (
        <TasksList header={"Your Tasks"} tasks={tasks.data} shrinkable={true} />
      )}
    </div>
  );
}

export default HomePage;
