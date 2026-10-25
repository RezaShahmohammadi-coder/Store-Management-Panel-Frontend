export async function getCurrentAdmin() {
  const res = await fetch("http://localhost:4000/Admin/Me", {
    credentials: "include",
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}