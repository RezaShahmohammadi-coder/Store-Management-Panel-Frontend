import { IProduct } from "@/Types/ProductTypes"
import { log } from "console"

export async function getAllProduct() {
    try {
        const res = await fetch("http://localhost:4000/Products")
        const result = await res.json()
        if(!res.ok){
            throw new Error(result.message)
        }
        return result
    }catch(err){
        console.error(err)
    }
}

export async function getProductById(id:string): Promise<IProduct> {
      try {
        const res = await fetch(`http://localhost:4000/Products/${id}`)
        const result = await res.json()
        if(!res.ok){
            throw new Error("خطا در دریافت محصولات")
        }
        return result.data
    }catch(err){
        console.error(err)
        throw err
    }
}