export const BASE_URL = import.meta.env.BUN_PUBLIC_BASE_URL;

export async function fetchApi(endpoint: string) {
  const res = await fetch(`${BASE_URL}${endpoint}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}