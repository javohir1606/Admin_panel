import { useMutation } from "@tanstack/react-query";
import { request } from "../../Config/request";

export const useCreateBrandList = () => {
  return useMutation({
    mutationFn: (data: FormData) =>
      request.post("/brand/", data).then((res) => res.data.data),
  });
};
