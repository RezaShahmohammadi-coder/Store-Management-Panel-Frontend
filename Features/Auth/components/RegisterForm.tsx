"use client"

import { useState } from "react";
import styles from "../Css/register.module.css";
import { useNewAdmin } from "../UseQuery/useNewAdmin";
import { useRouter } from "next/navigation";
import ErrorAlert from "@/Features/Errors/FormAlertError"


export default function AdminRegisterForm() {

  const router = useRouter();
  const { mutate, isError, error, reset } = useNewAdmin()

  const [formDetail, setDetail] = useState({
    name: "",
    username: "",
    email: "",
    available: "",
    password: "",
  })

  function updateDetail(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    if (isError) {
      reset();
    }

    setDetail((prev) => ({
      ...prev,
      [name] : value,
    }));
  }

  function handelSubmit(e: React.FormEvent) {
    e.preventDefault()
      console.log(formDetail);
    mutate(formDetail, {
      onSuccess: (data) => {
        
        router.push("/")
      }
    })

  }

  return (
    <form className={styles.form} dir="rtl" onSubmit={handelSubmit}>

      {
        isError && (
          <ErrorAlert message={error.message} />
        )
      }
      <div className={styles.formHeader}>

        <div className={styles.mark}>
          A
        </div>

        <div>
          <span className={styles.eyebrow}>
            ADMINISTRATION
          </span>

          <h2>
            ایجاد حساب مدیر
          </h2>

          <p>
            اطلاعات دسترسی مدیر سیستم را وارد کنید.
          </p>
        </div>

      </div>


      {/* Divider */}
      <div className={styles.divider}>
        <span>01</span>
      </div>


      {/* Fields */}
      <div className={styles.fields}>

        {/* Full Name */}
        <div className={styles.field}>
          <label htmlFor="fullName">
            نام و نام خانوادگی
          </label>

          <input
            id="fullName"
            name="name"
            type="text"
            placeholder="نام کامل مدیر"
            onChange={updateDetail}
          />
        </div>


        {/* Username */}
        <div className={styles.field}>
          <label htmlFor="username">
            نام کاربری
          </label>

          <input
            id="username"
            name="username"
            type="text"
            placeholder="admin"
            dir="ltr"
            onChange={updateDetail}
          />
        </div>


        {/* Email */}
        <div className={styles.field}>
          <label htmlFor="email">
            ایمیل
          </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="admin@example.com"
            dir="ltr"
            onChange={updateDetail}
          />
        </div>


        {/* Role */}
        <div className={styles.field}>
          <label htmlFor="role">
            سطح دسترسی
          </label>

          <select
  id="role"
  name="available"
  onChange={updateDetail}
>
  <option value="" disabled>
    انتخاب سطح دسترسی
  </option>

  <option value="admin">
   ادمین
  </option>

  <option value="superadmin">
    مدیر ارشد
  </option>
</select>
        </div>


        {/* Password */}
        <div className={styles.field}>
          <label htmlFor="password">
            رمز عبور
          </label>

          <input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            dir="ltr"
            onChange={updateDetail}
          />
        </div>


        {/* Confirm Password */}
        <div className={styles.field}>
          <label htmlFor="confirmPassword">
            تکرار رمز عبور
          </label>

          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="••••••••"
            dir="ltr"
            onChange={updateDetail}
            
          />
        </div>

      </div>


      {/* Security Notice */}
      <div className={styles.notice}>

        <div className={styles.noticeIcon}>
          !
        </div>

        <div>
          <strong>
            دسترسی مدیریتی
          </strong>

          <p>
            این حساب دارای دسترسی مدیریتی است.
            اطلاعات ورود را در اختیار دیگران قرار ندهید.
          </p>
        </div>

      </div>


      {/* Footer */}
      <div className={styles.footer}>

        <span className={styles.required}>
          تمام فیلدها الزامی هستند
        </span>

        <button
          type="submit"
          className={styles.submit}
        >
          <span>
            ایجاد حساب
          </span>

          <span className={styles.arrow}>
            ←
          </span>
        </button>

      </div>

    </form>
  );
}