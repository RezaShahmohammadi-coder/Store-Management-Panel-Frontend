
export async function deleteProductById(id:string) {
    try{
        const res= await fetch(`http://localhost:4000/Products/Delete/${id}`,{
            method:"DELETE",
            headers: { "Content-Type": "application/json" },
             credentials: "include",
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