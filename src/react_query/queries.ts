import { useQuery } from "@tanstack/react-query";
import { GET_PROJECT, GET_PROJECTS, GET_TASKS } from "../supabase/services";
import { Project, Task, TaskStatus } from "../components/shared/types";
import { useSearchParams } from "react-router-dom";
import { ASK_GEMINI } from "../utils/gemini";

export function useGetProjectsQuery() {
  const [searchParams] = useSearchParams();
  return useQuery({
    queryKey: ["projects", { status: searchParams.get("filter") }],
    queryFn: () =>
      GET_PROJECTS({ status: searchParams.get("filter") as TaskStatus }),
    refetchOnWindowFocus: false,
  });
}

export function useGetProjectQuery(id: string | undefined) {
  return useQuery<Project>({
    queryKey: ["project", { id }],
    queryFn: () => GET_PROJECT(id || "/"),
  });
}

export function useGetTasks() {
  return useQuery<Task[]>({
    queryKey: ["tasks"],
    queryFn: GET_TASKS,
  });
}

// GEMINI
export function useGetGeminiSuggestion(project: Project) {
  return useQuery<
    Array<{
      task: string;
      description: string;
    }>
  >({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ["suggestion"],
    queryFn: () =>
      ASK_GEMINI({
        title: project.name,
        description: project.description,
        alreadyIncluded: project.tasks?.map((task) => task.title).join(","),
      }),
  });
}
