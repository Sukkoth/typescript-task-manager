import TopMenu from "../components/project_detail_page/TopMenu";
import { useParams } from "react-router-dom";
import { useGetProjectQuery } from "../react_query/queries";
import Loading from "../components/Loading";
import Todos from "../components/project_detail_page/Todos";
import { useState } from "react";
import { ProjectDetailFilter } from "../components/shared/types";
import Description from "../components/project_detail_page/Description";
import Deadlines from "../components/project_detail_page/Deadlines";

function ProjectDetailPage() {
  const { projectId } = useParams();
  const project = useGetProjectQuery(projectId);
  const [tab, setTab] = useState<ProjectDetailFilter>(
    ProjectDetailFilter.tasks
  );

  return (
    <div className='p-5'>
      {project.isLoading && <Loading />}

      {!project.isLoading && !project.isError && (
        <>
          <h1 className=' font-medium text-3xl'>Rig App</h1>
          <TopMenu onChange={(val) => setTab(val)} />
          {tab === ProjectDetailFilter.tasks && <Todos data={project.data} />}
          {tab === ProjectDetailFilter.description && <Description />}
          {tab === ProjectDetailFilter.deadlines && <Deadlines />}
        </>
      )}
    </div>
  );
}

export default ProjectDetailPage;
