export async function Login(info:any){
   
          const res= await fetch("http://localhost:4000/Admin/Login", {
        method: "POST",
         credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(info),
    })

    const data= await res.json()

    if(!res.ok){
        throw new Error(data.errors?.[0]?.message ||
    data.message || "خطا در انجام عملیات")
    }
    return data
}