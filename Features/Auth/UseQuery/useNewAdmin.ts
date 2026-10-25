import { useMutation } from "@tanstack/react-query";
import { createNewAdmin } from "../service/PostAdmin";

export function useNewAdmin(){
    return useMutation({
        mutationFn:createNewAdmin
    })
}