export async function getAllAdmins(){
    try{
        const res= await fetch(" http://localhost:4000/Admin/admins")
        const data=await res.json()
        return data
        if(!res.ok){
            throw new Error(data.message)
        }
    } catch(err){
        throw err
    }
    
}