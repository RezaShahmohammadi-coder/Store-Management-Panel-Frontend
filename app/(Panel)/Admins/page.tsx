
import {
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";

import { getQueryClient } from "@/lib/QuertCach";
import { getAllAdmins } from "@/Features/Admin/Service/AdminService";
import AdminLayout from "@/Components/Structure/ActivePanel";
import AdminCard from "@/Features/Admin/Components/AdminCart";
import { IAdmin } from "@/Types/AdminTypes";
import Link from "next/link";

import styles from "@/Features/Admin/Css/AdminPage.module.css";

interface AdminsResponse {
  data: IAdmin[];
  message: string;
}

export default async function Admins() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["Admins"],
    queryFn: getAllAdmins,
  });

  const result = queryClient.getQueryData<AdminsResponse>([
    "Admins",
  ]);

  const admins = result?.data ?? [];

  return (
    <AdminLayout activePage="admins">
      <main className={styles.page}>
        <header className={styles.header}>
          <div>
            <span className={styles.eyebrow}>
              MANAGEMENT CENTER
            </span>

            <h1 className={styles.title}>
              مدیریت ادمین‌ها
            </h1>

            <p className={styles.subtitle}>
              مدیریت حساب‌ها و دسترسی‌های مدیریتی سیستم
            </p>
          </div>

          <Link
            href="/Register"
            className={styles.addButton}
          >
            <span className={styles.plus}>＋</span>
            افزودن ادمین
          </Link>
        </header>

        <HydrationBoundary state={dehydrate(queryClient)}>
          {admins.length > 0 ? (
            <div className={styles.adminGrid}>
              {admins.map((admin) => (
                <AdminCard
                  key={admin._id}
                  admin={admin}
                />
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              هنوز ادمینی ثبت نشده است.
            </div>
          )}
        </HydrationBoundary>
      </main>
    </AdminLayout>
  );
}
