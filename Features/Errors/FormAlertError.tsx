import styles from "./FormAlert.module.css"

interface ErrorAlertProps {
  message: string;
}

export default function ErrorAlert({
  message,
}: ErrorAlertProps) {
  return (
    <div className={styles.errorAlert}>

      <div className={styles.icon}>
        !
      </div>

      <div className={styles.content}>
        <span className={styles.title}>
         خطا در انجام عمیلیات
        </span>

        <span className={styles.message}>
          {message}
        </span>
      </div>

    </div>
  );
}