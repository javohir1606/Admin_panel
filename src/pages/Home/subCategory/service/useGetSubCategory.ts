import { useQuery } from "@tanstack/react-query"
import { categoryType } from "../../../category/query/categoryType"
import { request } from "../../../../config/request"


export const useGetSubCategory = () => {
    return useQuery({
        queryKey: ['category'],
        queryFn: () => request.get<categoryType>('/api/subcategory/').then((res) => res.data)
    })
}
