"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCurrentAdmin } from "@/Features/checkLogin/useCheckLogin";

export default function ProtectedRoute({
children,
}: {
children: React.ReactNode;
}) {
const router = useRouter();

const { data, isPending, isError } = useCurrentAdmin();

useEffect(() => {
if (!isPending && (isError || data?.isLoggedIn !== true)) {
router.replace("/Login");
}
}, [isPending, isError, data, router]);

if (isPending) {
return <div>در حال بررسی دسترسی...</div>;
}

if (isError || data?.isLoggedIn !== true) {
return null;
}

return children;
}
