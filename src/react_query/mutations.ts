import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  COMPLETE_TASK,
  CREATE_PROJECT,
  CREATE_TASK,
  CREATE_TASKS,
  DELETE_PROJECT,
  SUBMIT_FEEDBACK,
  UPDATE_PROJECT,
} from "../supabase/services";
import { useParams } from "react-router-dom";

export function useChangeTaskStatus() {
  const { projectId } = useParams();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: COMPLETE_TASK,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
      //this happens when you are vieweing project details page
      if (projectId) {
        queryClient.invalidateQueries({
          queryKey: [
            "project",
            {
              id: projectId,
            },
          ],
        });
      }
    },
  });
}

export function useCreateTask() {
  return useMutation({
    mutationFn: CREATE_TASK,
  });
}

export function useCreateMultipleTasks() {
  return useMutation({
    mutationFn: CREATE_TASKS,
  });
}

export function useCreateProject() {
  return useMutation({
    mutationFn: CREATE_PROJECT,
  });
}

export function useUpdateProject() {
  return useMutation({
    mutationFn: UPDATE_PROJECT,
  });
}

export function useDeleteProject() {
  return useMutation({
    mutationFn: DELETE_PROJECT,
  });
}

export function useCreateFeedback() {
  return useMutation({
    mutationFn: SUBMIT_FEEDBACK,
    mutationKey: ["feedback"],
  });
}
