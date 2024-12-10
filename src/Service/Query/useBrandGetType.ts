import { useQuery } from "@tanstack/react-query"
import { request } from "../../Config/request"

export const useBrandGetType = () => {
  return useQuery({
    queryKey:["get-data"],
    queryFn: () => request.get("/brand/").then((res) => res.data)
  })
}