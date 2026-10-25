import Link from "next/link";
import styles from "../../../Features/Products/Css/ProductPage.module.css";
import AdminLayout from "@/Components/Structure/ActivePanel";
import { getQueryClient } from "@/lib/QuertCach";
import { getAllProduct } from "@/Features/Products/Service/GetProducts";
import {dehydrate, HydrationBoundary,} from "@tanstack/react-query";

import AllProductQuery from "@/Features/Products/UseQuery/AllProduct";
import ProductFlash from "@/Features/success/ProductFlash";


export default async function ProductPage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: getAllProduct,
  });

  return (
    <AdminLayout activePage="products">

      <ProductFlash/>

      {/* Main */}
      <main className={styles.main}>

        {/* Page Intro */}
        <section className={styles.pageIntro}>

          <div className={styles.titleArea}>

            <span className={styles.sectionLabel}>
              PRODUCT CATALOG
            </span>

            <h2>
              مدیریت محصولات
            </h2>

            <div className={styles.ornament}>
              <span />
              <b>◆</b>
              <span />
            </div>

            <p>
              لیست تمامی محصولات فروشگاه شما به همراه
              مشخصات، قیمت و دسته‌بندی
            </p>

          </div>


          <Link
            href="/Products/Add"
            className={styles.addButton}
          >
            <span className={styles.plus}>
              +
            </span>

            افزودن محصول جدید
          </Link>

        </section>


        {/* Products */}
        <section className={styles.productsContainer}>

          <HydrationBoundary
            state={dehydrate(queryClient)}
          >
            <AllProductQuery />
          </HydrationBoundary>

        </section>

      </main>


      {/* Bottom Logo */}
      <div className={styles.bottomLogo}>
        N
      </div>

    </AdminLayout>
  );
}