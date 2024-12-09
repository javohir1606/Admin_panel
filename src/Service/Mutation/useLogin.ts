import { useMutation } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import { request } from '../../Config/request';
export const usLoginGet = () => {
  return (
     useMutation({
      mutationFn: (data)=> request.post("/api/admin-login/",data).then((res) => res.data),
      onSuccess: (res) => {
        Cookies.set( "accessToken", res?.data?.token)
      },
     })
  )
}

