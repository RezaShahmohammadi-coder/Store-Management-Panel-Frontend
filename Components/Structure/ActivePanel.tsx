"use client"
import React from "react";
import Link from "next/link";
import styles from "./structureCss.module.css";
import {logout} from"@/Features/Auth/service/Logout"
import { useRouter } from "next/navigation";

interface AdminLayoutProps {
  children: React.ReactNode;
  activePage: "dashboard" | "products" | "orders" | "admins";
}

const navItems = [
  {
    key: "dashboard",
    label: "داشبورد",
    href: "/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="11" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="17" width="7" height="4" rx="1.5" />
      </svg>
    ),
  },
  {
    key: "products",
    label: "محصولات",
    href: "Products",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5v-9Z" />
        <path d="M4.5 7.8 12 12l7.5-4.2" />
        <path d="M12 12v9" />
      </svg>
    ),
  },
  {
    key: "orders",
    label: "سفارشات",
    href: "orders",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M6 3h12v18H6z" rx="1.5" />
        <path d="M9 7h6M9 11h6M9 15h4" />
      </svg>
    ),
  },
  {
    key: "admins",
    label: "مدیران",
    href: "/Admins",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 20c.6-3.4 2.4-5 5.5-5s4.9 1.6 5.5 5" />
        <path d="M16 11a3 3 0 1 0 0-6" />
        <path d="M16 15c2.6 0 4.2 1.4 4.7 4" />
      </svg>
    ),
  },
];

const pageTitles = {
  dashboard: {
    eyebrow: "Overview",
    title: "خلاصه وضعیت مدیریتی",
  },
  products: {
    eyebrow: "Catalog",
    title: "مدیریت محصولات",
  },
  orders: {
    eyebrow: "Commerce",
    title: "مدیریت سفارشات",
  },
  admins: {
    eyebrow: "Access",
    title: "مدیریت مدیران",
  },
};

export default function AdminLayout({
  children,
  activePage,
}: AdminLayoutProps) {
  const currentPage = pageTitles[activePage];


  
const router = useRouter();

 async function logoutFn() {
  try {
    await logout();
    router.replace("/Login");
  } catch (err) {
    console.error("Logout failed:", err);
    alert("خروج از حساب ناموفق بود");
  }
}

  return (
    <div className={styles.dashboard}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={styles.brandMark}>B</div>

          <div className={styles.brandText}>
            <strong>Backend</strong>
            <span>Management System</span>
          </div>
        </div>

        <div className={styles.sidebarSection}>
          <span className={styles.sectionLabel}>Workspace</span>

          <nav className={styles.navigation}>
            {navItems.map((item) => {
              const isActive = activePage === item.key;

              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`${styles.navLink} ${isActive ? styles.activeNavLink : ""
                    }`}
                >
                  <span className={styles.navIcon}>{item.icon}</span>

                  <span className={styles.navText}>{item.label}</span>

                  {isActive && <span className={styles.activeIndicator} />}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className={styles.sidebarBottom}>
          <div className={styles.systemStatus}>
            <span className={styles.statusDot} />

            <div>
              <strong>System Online</strong>
              <span>All services operational</span>
            </div>
          </div>

          <div className={styles.version}>
            v1.0.0
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className={styles.main}>
        <header className={styles.topHeader}>
          <div className={styles.headingGroup}>
            <span className={styles.eyebrow}>
              {currentPage.eyebrow}
            </span>

            <h1>{currentPage.title}</h1>
          </div>

          <div className={styles.headerActions}>
            <button
              type="button"
              className={styles.iconButton}
              aria-label="Notifications"
            >
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
                <path d="M10 21h4" />
              </svg>
              <span className={styles.notificationDot} />
            </button>

            <button type="button" className={styles.logout} onClick={logoutFn}>
              <span>خروج از حساب</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
               
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
            </button>
            <div className={styles.divider} />

            <button type="button" className={styles.profile}>
              <div className={styles.avatar}>R</div>

              <div className={styles.profileText}>
                <strong></strong>
                <span>Administrator</span>
              </div>

              <svg
                className={styles.chevron}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path d="m7 10 5 5 5-5" />
              </svg>
            </button>
          </div>
        </header>

        <main className={styles.pageBody}>{children}</main>
      </div>
    </div>
  );
}