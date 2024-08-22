import { login } from "@/app/services/users";
import { useMutation } from "@tanstack/react-query";

export function useLoginMutation() {
  const { mutateAsync: loginFn } = useMutation({
    mutationFn: login,
  });

  return loginFn;
}
