import { IProduct } from "@/Types/ProductTypes";
export async function updateProduct(id:string, details:any) {
    try{
        const res= await fetch(`http://localhost:4000/Products/Update/${id}`,{
            method:"PUT",
             headers: {
        "Content-Type": "application/json",
      },
            body:JSON.stringify(details)
        })
        const data = await res.json();
        if(!res.ok){
            throw new Error(data.message || "حذف محصول ناموفق بود")
        }
        return data
    } catch(err){
        console.error(err)
        throw err;

    }
}