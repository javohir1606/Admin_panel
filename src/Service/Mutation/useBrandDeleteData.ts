import { useMutation } from "@tanstack/react-query";
import { request } from "../../Config/request";

export const useBrandDeleteData = () => {
  return useMutation({
    mutationFn: (id: number) =>
      request.delete(`/brand/${id}/`).then((res) => res.data),
  });
};
