"use client"
import ProductSkeleton from"../Skeleton/IsPending"
import { useQuery } from "@tanstack/react-query";
import {getAllProduct} from "../Service/GetProducts"
import ProductCard from"../components/ProductCard"
import { IProduct } from "@/Types/ProductTypes";
import { useState } from "react";
import ErrorPage from"../../Errors/ErrorPage"

export default function AllProductQuery(){

    const [errorMessage, setErrorMessage] = useState<string | null>(null);

const { data, isPending, isError } = useQuery({
  queryKey: ["products"],
  queryFn: getAllProduct,
});

if (isPending) {
  return <ProductSkeleton />;
}

if (isError) {
  return (
    <ErrorPage
      title="دریافت محصولات ناموفق بود"
      message="دریافت محصولات با خطا مواجه شد."
      onRetry={() => window.location.reload()}
    />
  );
}

const products = data?.data;
console.log(products)

if (!Array.isArray(products)) {
  return (
    <ErrorPage
      title="خطا در دریافت محصولات"
      message="ساختار پاسخ سرور معتبر نیست."
      onRetry={() => window.location.reload()}
    />
  );
}

if (products.length === 0) {
  return (
    <tr>
      <td colSpan={5}>
        هیچ محصولی در دیتابیس یافت نشد.
      </td>
    </tr>
  );
}

return (
  <>
    {products.map((product: IProduct) => (
      <ProductCard
        key={product._id}
        product={product}
        onError={setErrorMessage}
      />
    ))}
  </>
);
}

