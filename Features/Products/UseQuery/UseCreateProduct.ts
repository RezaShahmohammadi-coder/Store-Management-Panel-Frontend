import {PostProduct} from"../Service/CreateProduct"
import { useMutation } from "@tanstack/react-query";


export function useCreateProduct(){

    return useMutation({
        mutationFn:PostProduct
    })
}