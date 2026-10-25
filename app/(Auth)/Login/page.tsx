import AdminLoginForm from "@/Features/Auth/components/LoginForm";
import styles from "@/Features/Auth/Css/Login.module.css";
import { ShieldCheck, Fingerprint } from "lucide-react";


export default function LoginPage() {
  return (
    <main className={styles.page}>
      {/* LEFT SIDE — static reference image (scene + text baked in) */}
      <section className={styles.visualSide} />
 
      {/* RIGHT SIDE */}
      <section className={styles.loginSide}>
        <AdminLoginForm />
      </section>
    </main>
  );
}