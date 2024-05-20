import TopMenu from "../components/project_detail_page/TopMenu";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProjectQuery } from "../react_query/queries";
import Loading from "../components/Loading";
import Todos from "../components/project_detail_page/Todos";
import { useState } from "react";
import { ProjectDetailFilter } from "../components/shared/types";
import Description from "../components/project_detail_page/Description";
import Deadlines from "../components/project_detail_page/Deadlines";
import { BiEdit } from "react-icons/bi";
import Modal from "../components/Modal";
import NewProject from "./NewProject";
import ConfirmModal from "../components/project_detail_page/DeleteConfirm";
import { useDeleteProject } from "../react_query/mutations";
import { toast } from "react-toastify";

function ProjectDetailPage() {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const project = useGetProjectQuery(projectId);
  const [tab, setTab] = useState<ProjectDetailFilter>(
    ProjectDetailFilter.tasks
  );

  const deleteProject = useDeleteProject();

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
              <Modal>
                <Modal.Button type='TOGGLER'>
                  <BiEdit className='cursor-pointer hover:scale-110 duration-300 hover:text-primary' />
                </Modal.Button>
                <Modal.Content title='Update Project'>
                  <div className='w-[50rem]'>
                    <NewProject editableProjectId={project.data?.id} />
                  </div>
                </Modal.Content>
              </Modal>
              <ConfirmModal
                confirmButtonText={
                  deleteProject.isPending ? "Deleting . . . " : "Delete"
                }
                headerText='Are you sure to delete the project?'
                onConfirm={() =>
                  deleteProject.mutate(project.data!.id, {
                    onSuccess: () => {
                      toast.success("Project Deleted");
                      navigate("/projects");
                    },
                    onError: () => {
                      toast.error("Could not delete project");
                    },
                  })
                }
              />
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
