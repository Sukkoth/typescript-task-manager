import { useMutation, useQueryClient } from "@tanstack/react-query";
import { COMPLETE_TASK } from "../supabase/services";
import { useParams } from "react-router-dom";

export function useChangeTaskStatus() {
  const { projectId } = useParams();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: COMPLETE_TASK,
    onSuccess: (data) => {
      console.log("UPDATED DONE", data);
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
    onError: (error) => {
      console.log("UPDATE ERROR", error);
    },
  });
}
