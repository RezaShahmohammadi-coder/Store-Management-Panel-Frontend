"use client"
import { useMutation,useQueryClient  } from "@tanstack/react-query"
import {deleteProductById}from"../Service/DeleteProduct"
import { error } from "console"

export function usedeleteProduct(){
      const queryClient = useQueryClient();

    return useMutation({
        mutationFn:deleteProductById, 
        onSuccess:()=>{
            alert("محصول شما با موفقیت حذف شد")
             queryClient.invalidateQueries({
        queryKey: ["products"],
      });
        },
        onError:(error)=>{
            console.error(error)
        }
    })
}