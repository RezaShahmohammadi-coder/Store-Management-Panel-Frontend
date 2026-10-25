import AdminRegisterForm from "@/Features/Auth/components/RegisterForm";
import styles from "@/Features/Auth/Css/register.module.css";


export default function RegisterPage() {
  return (
    <main className={styles.page} dir="rtl">

      <div className={styles.layout}>

        {/* =====================================================
            FORM
        ===================================================== */}

        <section className={styles.formSide}>

          <div className={styles.formContainer}>

            <AdminRegisterForm />

            <div className={styles.formFooter}>
              <span>AUTHORIZED ACCESS ONLY</span>
              <span>© 2026</span>
            </div>

          </div>

        </section>


        {/* =====================================================
            SECURITY PANEL
        ===================================================== */}

   <aside className={styles.archiveSide}>

  <div className={styles.archiveBackground}></div>

  <div className={styles.archiveFrame}>

    {/* HEADER */}
    <header className={styles.archiveHeader}>

      <div className={styles.brand}>
        <span className={styles.brandMark}>N</span>

        <div>
          <strong>PRIVATE</strong>
          <small>ADMINISTRATION</small>
        </div>
      </div>

      <span className={styles.number}>
        01
      </span>

    </header>


    {/* CENTER */}
    <section className={styles.archiveCenter}>

      <div className={styles.logo}>
        N
      </div>

      <span className={styles.kicker}>
        AUTHORIZED OFFICE
      </span>

      <h2>
        Private
        <br />
        <em>Administration</em>
      </h2>

      <div className={styles.divider}>
        <span></span>
        <b>◆</b>
        <span></span>
      </div>

      <p>
        محیط اختصاصی مدیریت
        <br />
        دسترسی برای کاربران مجاز
      </p>

    </section>


    {/* FOOTER */}
    <footer className={styles.archiveFooter}>

      <div>
        <span>ACCESS</span>
        <strong>PRIVATE</strong>
      </div>

      <div>
        <span>EST.</span>
        <strong>2026</strong>
      </div>

      <div>
        <span>STATUS</span>
        <strong>SECURE</strong>
      </div>

    </footer>

  </div>

</aside>
      </div>

    </main>
  );
}