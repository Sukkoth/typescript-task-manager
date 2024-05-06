import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Project } from "../shared/types";
import Title from "./Title";

function Description() {
  const { projectId } = useParams();
  const project = useQueryClient().getQueryData([
    "project",
    {
      id: projectId,
    },
  ]) as Project;

  return (
    <div className='mt-5 space-y-5'>
      <div>
        <Title>Project Description</Title>
        <p className='mt-10'> {project.description}</p>
      </div>
      <div>
        <Title>Deadline</Title>
        <p className='mt-10'> {new Date(project.deadline).toDateString()}</p>
      </div>
    </div>
  );
}

export default Description;
