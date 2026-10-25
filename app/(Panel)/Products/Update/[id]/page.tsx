import AddProductForm from "@/Features/Products/components/form"
import { updateProduct } from "@/Features/Products/Service/UpdateProduct"
import { getProductById } from "@/Features/Products/Service/GetProducts";

export async function productById(id:string) {
   const product= getProductById(id)
   return product
}

export async function giveDetails(id: string, detail: any) {
await updateProduct(id,detail)
}

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function UpdateProductPage({params}:PageProps) {
    const{id}=await params
    const Product= await productById(id)
    return (
        <>
            <AddProductForm product={Product}/>
        </>
    )
}