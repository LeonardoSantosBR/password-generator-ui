import { useMutation } from "@tanstack/react-query";
import { createUser } from "@/app/services/users";

export function useUsersMutation() {
  const { mutateAsync: createUserFn, isPending } = useMutation({
    mutationFn: createUser,
  });

  return { createUserFn, isPending };
}
