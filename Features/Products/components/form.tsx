"use client"

import { useState } from "react";
import styles from "../Css/form.module.css";
import { IProduct } from "@/Types/ProductTypes";
import { useCreateProduct } from "../UseQuery/UseCreateProduct"
import ErrorAlert from "../../Errors/FormAlertError"
import { useRouter } from "next/navigation";
import { updateProduct } from "../Service/UpdateProduct";

interface ProductFormData {
    title: string;
    price: number;
    category: string;
    image: string;
    description: string;
}

interface formProps{
    product?:IProduct
}
export default function AddProductForm({product}:formProps) {
console.log(product)
    const router = useRouter();

    const { mutate, isError, error, isPending, reset } = useCreateProduct()

    const [formDetail, setDetail] = useState({
        title: product?.title||"",
        price: product?.price||0,
        category: product?.category||"",
        image: product?.image||"",
        description: product?.description||"",
    })

    function updateDetail(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        const { name, value } = e.target;
        if (isError) {
            reset();
        }

        setDetail((prev) => ({
            ...prev,
            [name]: name === "price" ? Number(value) : value,
        }));
    }

   
async function handelSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  try {
    if (product) {
      await updateProduct(product._id, formDetail);
    } else {
      mutate(formDetail, {
        onSuccess: (data) => {
          sessionStorage.setItem(
            "flashMessage",
            data.message || "محصول با موفقیت ایجاد شد"
          );

          router.push("/Products");
        },
      });

      return;
    }

    sessionStorage.setItem(
      "flashMessage",
      "محصول با موفقیت ویرایش شد"
    );

    router.push("/Products");
  } catch (error) {
    console.error("خطا در ذخیره محصول:", error);
  }
}

console.log(error?.message)

    return (
        <form className={styles.form} dir="rtl" onSubmit={handelSubmit}>

            {
                isError && (
                    <ErrorAlert message={error.message} />
                )
            }

            <div className={styles.header}>
                <div>
                    <span>PRODUCT</span>
                    <h1>افزودن محصول جدید</h1>
                    <p>اطلاعات محصول را وارد کنید.</p>
                </div>

                <div className={styles.number}>01</div>
            </div>

            <div className={styles.fields}>

                {/* نام محصول */}
                <div className={styles.inputGroup}>
                    <label htmlFor="title">
                        نام محصول
                    </label>

                    <input
                        id="title"
                        name="title"
                        type="text"
                        placeholder="نام محصول را وارد کنید"
                        value={formDetail.title}
                        onChange={updateDetail}
                    />
                </div>

                {/* قیمت */}
                <div className={styles.inputGroup}>
                    <label htmlFor="price">
                        قیمت
                    </label>

                    <div className={styles.price}>
                        <input
                            id="price"
                            name="price"
                            type="number"
                            placeholder="0"
                            value={formDetail.price}
                            onChange={updateDetail}
                        />

                        <span>تومان</span>
                    </div>
                </div>

                {/* دسته بندی */}
                <div className={styles.inputGroup}>
                    <label htmlFor="category">
                        دسته‌بندی
                    </label>

                    <select
                        id="category"
                        name="category"
                        value={formDetail.category}
                        onChange={updateDetail}
                    >
                        <option value="" disabled>
                            دسته‌بندی را انتخاب کنید
                        </option>

                        <option value="پیراهن">
                            پیراهن
                        </option>

                        <option value="شلوار">
                            شلوار
                        </option>

                        <option value="لباس">
                            لباس
                        </option>
                    </select>
                </div>

                {/* URL عکس */}
                <div className={styles.inputGroup}>
                    <label htmlFor="image">
                        URL عکس
                    </label>

                    <input
                        id="image"
                        name="image"
                        placeholder="https://example.com/image.jpg"
                        value={formDetail.image}
                        onChange={updateDetail}
                        
                    />
                </div>

                {/* توضیحات */}
                <div className={`${styles.inputGroup} ${styles.description}`}>
                    <label htmlFor="description">
                        توضیحات
                    </label>

                    <textarea
                        id="description"
                        name="description"
                        placeholder="توضیحات محصول را وارد کنید..."
                        rows={6}
                        value={formDetail.description}
                        onChange={updateDetail}
                    />
                </div>

            </div>

            <div className={styles.footer}>
                <p>
                    اطلاعات وارد شده را بررسی کنید.
                </p>

                <button
                    type="submit"
                    className={styles.submit}
                >
                    ثبت محصول
                </button>
            </div>

        </form>
    );
}