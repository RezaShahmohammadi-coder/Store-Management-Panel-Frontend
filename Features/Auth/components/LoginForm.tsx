"use client";
 import { useLogin } from "../UseQuery/useLogin";
import { useState } from "react";
import ErrorAlert from "@/Features/Errors/FormAlertError";
import {
  LockKeyhole,
  UserRound,
  Eye,
  EyeOff,
  Sun,
  Moon,
  ArrowLeft,
} from "lucide-react";
 
import styles from "../Css/Login.module.css";
import { useRouter } from "next/navigation";
import { log } from "node:console";


export default function AdminLoginForm() {
  const { mutate, isError, error, reset } = useLogin()
    const router = useRouter();
  

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isDark, setIsDark] = useState(true);
 
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
 
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
 
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
     mutate(formData,{
        onSuccess:(data)=>{
            router.push("/")
        }
     })
    console.log({ ...formData, rememberMe });
  }
 
  return (
    <form className={styles.form} dir="rtl" onSubmit={handleSubmit}>
        {
                isError && (
                  <ErrorAlert message={error.message} />
                )
              }
      {/* THEME TOGGLE */}
 
      <div className={styles.themeToggle}>
        <button
          type="button"
          className={!isDark ? styles.active : ""}
          onClick={() => setIsDark(false)}
          aria-label="حالت روشن"
        >
          <Sun size={14} strokeWidth={2} />
        </button>
 
        <button
          type="button"
          className={isDark ? styles.active : ""}
          onClick={() => setIsDark(true)}
          aria-label="حالت تاریک"
        >
          <Moon size={14} strokeWidth={2} />
        </button>
      </div>
 
      {/* HEADING */}
 
      <span className={styles.eyebrow}>LOGIN TO YOUR ACCOUNT</span>
 
      <h1>ورود به حساب کاربری</h1>
 
      <p className={styles.sub}>لطفا اطلاعات خود را وارد کنید</p>
 
      {/* USERNAME */}
 
      <div className={styles.field}>
        <label htmlFor="username">نام کاربری</label>
 
        <div className={styles.inputWrapper}>
          <UserRound size={17} strokeWidth={1.5} />
 
          <input
            id="username"
            name="username"
            type="text"
            placeholder="نام کاربری خود را وارد کنید"
            value={formData.username}
            onChange={handleChange}
            autoComplete="username"
          />
        </div>
      </div>
 
      {/* PASSWORD */}
 
      <div className={styles.field}>
        <label htmlFor="password">رمز عبور</label>
 
        <div className={styles.inputWrapper}>
          <LockKeyhole size={17} strokeWidth={1.5} />
 
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="رمز عبور خود را وارد کنید"
            value={formData.password}
            onChange={handleChange}
            autoComplete="current-password"
          />
 
          <button
            type="button"
            className={styles.eyeToggle}
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? "پنهان کردن رمز" : "نمایش رمز"}
          >
            {showPassword ? (
              <Eye size={17} strokeWidth={1.5} />
            ) : (
              <EyeOff size={17} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>
 
      {/* REMEMBER / FORGOT */}
 
      <div className={styles.rowBetween}>
        <label className={styles.remember}>
          <span
            className={`${styles.checkbox} ${
              rememberMe ? styles.checked : ""
            }`}
            role="checkbox"
            aria-checked={rememberMe}
            tabIndex={0}
            onClick={() => setRememberMe((prev) => !prev)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setRememberMe((prev) => !prev);
              }
            }}
          />
          مرا به خاطر بسپار
        </label>
 
        <button type="button" className={styles.forgot}>
          رمز عبور خود را فراموش کرده‌اید؟
        </button>
      </div>
 
      {/* SUBMIT */}
 
      <button type="submit" className={styles.submit}>
        <ArrowLeft size={18} strokeWidth={1.5} />
        <span>ورود به پنل مدیریت</span>
      </button>
 
      {/* DIVIDER */}
 
 
      {/* OAUTH */}
 
      <div className={styles.oauthRow}>
      
 
        
 
        
      </div>
    </form>
  );
}
 