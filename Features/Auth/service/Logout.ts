
export async function logout() {
  const res = await fetch("http://localhost:4000/Admin/Logout", {
    method: "POST",
    credentials: "include",
  });
  const data = await res.json().catch(() => null);

  console.log("Status:", res.status);
  console.log("Response:", data);

  if (!res.ok) {
    throw new Error(data.message || "خروج ناموفق بود");
  }

  return data;
}