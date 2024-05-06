import { useQuery } from "@tanstack/react-query";
import { GET_PROJECT, GET_PROJECTS, GET_TASKS } from "../supabase/services";
import { Project, Task } from "../components/shared/types";

export function useGetProjectsQuery() {
  return useQuery({
    queryKey: ["projects"],
    queryFn: GET_PROJECTS,
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
