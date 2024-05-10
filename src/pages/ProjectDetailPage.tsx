import TopMenu from "../components/project_detail_page/TopMenu";
import { useParams } from "react-router-dom";
import { useGetProjectQuery } from "../react_query/queries";
import Loading from "../components/Loading";
import Todos from "../components/project_detail_page/Todos";
import { useState } from "react";
import { ProjectDetailFilter } from "../components/shared/types";
import Description from "../components/project_detail_page/Description";
import Deadlines from "../components/project_detail_page/Deadlines";
import { BiEdit, BiTrash } from "react-icons/bi";

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
          <div className='flex justify-between items-center mb-16'>
            <div>
              <h1 className=' font-medium text-3xl'>
                {project.data?.name} {project.data?.emoji}
              </h1>
            </div>
            <div className='flex gap-5 text-3xl items-center'>
              <BiEdit className='cursor-pointer hover:scale-110 duration-300 hover:text-primary' />
              <BiTrash className='cursor-pointer hover:scale-110 duration-300 hover:text-red-400' />
            </div>
          </div>
          <TopMenu onChange={(val) => setTab(val)} />
          {tab === ProjectDetailFilter.tasks && <Todos data={project.data!} />}
          {tab === ProjectDetailFilter.description && <Description />}
          {tab === ProjectDetailFilter.deadlines && <Deadlines />}
        </>
      )}
    </div>
  );
}

export default ProjectDetailPage;
