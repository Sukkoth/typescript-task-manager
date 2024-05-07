import { useQuery } from "@tanstack/react-query";
import { GET_PROJECT, GET_PROJECTS, GET_TASKS } from "../supabase/services";
import { Project, Task, TaskStatus } from "../components/shared/types";
import { useSearchParams } from "react-router-dom";

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
