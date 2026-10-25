import { IAdmin } from "@/Types/AdminTypes";
import styles from "../Css/AdminCart.module.css"

interface AdminCardProps {
  admin: IAdmin;
}

export default function AdminCard({ admin }: AdminCardProps) {
  const initials =
    admin.name
      ?.trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part.charAt(0))
      .join("")
      .toUpperCase() || "A";

  return (
    <article className={styles.card}>
      <div className={styles.topLine} />

      <header className={styles.header}>
        <div className={styles.identity}>
          <div className={styles.avatar}>
            <span>{initials}</span>

            <i
              className={`${styles.presence} ${
                admin.available
                  ? styles.online
                  : styles.offline
              }`}
            />
          </div>

          <div className={styles.identityText}>
            <h3 className={styles.name}>
              {admin.name || "بدون نام"}
            </h3>

            <span className={styles.username} dir="ltr">
              @{admin.username}
            </span>
          </div>
        </div>

        <span
          className={`${styles.status} ${
            admin.available
              ? styles.active
              : styles.inactive
          }`}
        >
          <span className={styles.statusDot} />
          {admin.available ? "فعال" : "غیرفعال"}
        </span>
      </header>

      <div className={styles.divider} />

      <div className={styles.details}>
        <div className={styles.detailRow}>
          <span className={styles.detailIcon}>@</span>

          <div className={styles.detailContent}>
            <span className={styles.label}>آدرس ایمیل</span>
            <span className={styles.value} dir="ltr">
              {admin.email}
            </span>
          </div>
        </div>

        <div className={styles.detailRow}>
          <span className={styles.detailIcon}>#</span>

          <div className={styles.detailContent}>
            <span className={styles.label}>شناسه ادمین</span>
            <span
              className={`${styles.value} ${styles.idValue}`}
              dir="ltr"
              title={admin._id}
            >
              {admin._id}
            </span>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.role}>
          <span className={styles.roleIcon}>✦</span>
          حساب مدیریتی
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.editButton}
            disabled
          >
            ویرایش
          </button>

          <button
            type="button"
            className={styles.deleteButton}
            disabled
          >
            حذف
          </button>
        </div>
      </footer>
    </article>
  );
}
