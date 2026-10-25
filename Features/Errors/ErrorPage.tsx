"use client";

import { AlertTriangle, RefreshCw } from "lucide-react";
import styles from "./errorcss.module.css";

interface ErrorPageProps {
  message: string;
  title?: string;
  onRetry?: () => void;
}

export default function ErrorPage({
  message,
  title = "مشکلی پیش آمده",
  onRetry,
}: ErrorPageProps) {
  return (
    <main className={styles.wrapper} dir="rtl">
      <div className={styles.content}>

        <div className={styles.icon}>
          <AlertTriangle size={60} strokeWidth={1.5} />
        </div>

        <h1>{title}</h1>

        <p>{message}</p>

        {onRetry && (
          <button
            className={styles.retry}
            onClick={onRetry}
          >
            <RefreshCw size={18} />
            تلاش مجدد
          </button>
        )}

      </div>
    </main>
  );
}