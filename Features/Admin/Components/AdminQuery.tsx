"use client"
import ProductSkeleton from "@/Features/Products/Skeleton/IsPending";
import { useQuery } from "@tanstack/react-query";
import { getAllAdmins } from "../Service/AdminService";
import AdminCard from "./AdminCart";
import { IAdmin } from "@/Types/AdminTypes";
import { useState } from "react";
import ErrorPage from"../../Errors/ErrorPage"

export default function AllAdminQuery(){

    const [errorMessage, setErrorMessage] = useState<string | null>(null);

const{data,isPending}=useQuery({
    queryKey:["Admins"],
    queryFn:()=>getAllAdmins()
});

 if (errorMessage) {
    return (
      <ErrorPage
        title="حذف محصول ناموفق بود"
        message={errorMessage}
        onRetry={() => {
          setErrorMessage(null);
        }}
      />
    );
  }

if (isPending) {
    return <ProductSkeleton />
  }

  

   if (data.data.length === 0) {
    return (
      <tr>
        <td colSpan={5}>
          <div>
            هیچ ادمینی در دیتابیس یافت نشد.
          </div>
        </td>
      </tr>
    );
  }

  return(
      <>
    {data.data.map((admin:IAdmin) => (
      <AdminCard
      key={Number(admin._id)}
        admin={data.data}
      />
    ))}
  </>
  )
}

