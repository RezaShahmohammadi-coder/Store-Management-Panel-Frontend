import styles from"./formAlert.module.css"

interface SuccessAlertProps {
  message: string;
}

export default function SuccessAlert({
  message,
}: SuccessAlertProps) {
  return (
    <div className={styles.successAlert}>

      <div className={styles.icon}>
        ✓
      </div>

      <div className={styles.content}>

        <span className={styles.title}>
          عملیات موفق
        </span>

        <span className={styles.message}>
          {message}
        </span>

      </div>

    </div>
  );
}