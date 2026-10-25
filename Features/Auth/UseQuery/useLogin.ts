import { useMutation } from "@tanstack/react-query";
import{Login} from"../service/PostLogin"

export function useLogin(){
    return useMutation({
        mutationFn:Login
    })
}