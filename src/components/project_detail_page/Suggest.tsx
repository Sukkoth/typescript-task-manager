import { useEffect, useState } from "react";
import { useGetGeminiSuggestion } from "../../react_query/queries";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Project, TaskForm } from "../shared/types";
import Button from "../Button";
import { useCreateMultipleTasks } from "../../react_query/mutations";
import { toast } from "react-toastify";
import { useModal } from "../Modal";

function Suggest() {
  const { toggleModal } = useModal();

  const [selected, setSelected] = useState<Array<number>>([]);

  const queryClient = useQueryClient();

  const { projectId } = useParams();
  const project = queryClient.getQueryData([
    "project",
    { id: projectId },
  ]) as Project;

  const { isLoading, isError, error, data } = useGetGeminiSuggestion(project);
  const createTasks = useCreateMultipleTasks();

  function handleAddTasks() {
    const tasksToAdd = selected.map((index) => {
      const task: TaskForm = {
        title: data?.[index].task || "",
        description: data?.[index].description || "",
        deadline: new Date(project.deadline),
        project_id: projectId!,
      };
      return task;
    });

    createTasks.mutate(tasksToAdd, {
      onSuccess: () => {
        toast.success("Tasks added successfully");
        queryClient.invalidateQueries({
          queryKey: ["project", { id: projectId }],
        });
        toggleModal(false);
      },
      onError: () => {
        toast.error("Tasks could not be added!");
      },
    });
  }

  useEffect(() => {
    return () => {
      if (queryClient.getQueryData(["suggestion"]))
        queryClient.resetQueries({
          queryKey: ["suggestion"],
        });
    };
  }, [queryClient, projectId]);

  return (
    <div className='space-y-4'>
      {isLoading && (
        <h1 className='animate-pulse  font-mono'>Generating tasks . . . </h1>
      )}
      {isLoading && isError && <h1>{error}</h1>}
      {!isLoading && data?.length ? (
        <>
          <p className='font-mono ms-2 text-sm text-gray-400'>
            Select tasks to add to your project 🤖
          </p>
          {data.map((result, index) => (
            <div
              key={index}
              className='rounded-2xl border px-6 py-4 flex gap-3 items-start w-full'
            >
              <input
                type='checkbox'
                className='w-4 h-4 accent-primary border-purple-300 rounded-lg focus:ring-purple-800 ring-offset-gray-800 focus:ring-2'
                id={`${index}`}
                checked={selected.includes(index)}
                onChange={() =>
                  setSelected((prev) =>
                    prev.includes(index)
                      ? prev.filter((items) => items !== index)
                      : [...prev, index]
                  )
                }
              />
              <div>{result.task}</div>
            </div>
          ))}
        </>
      ) : (
        ""
      )}

      {data?.length && selected.length ? (
        <div className='float-end'>
          <Button onClick={handleAddTasks}>
            {createTasks.isPending
              ? "Adding tasks . . ."
              : "Add Selected Tasks"}
          </Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Suggest;
