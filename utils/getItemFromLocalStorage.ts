export const getItemFromLocalStorage = (key: string) => {
  if (typeof window === "undefined") return "";
  const data = window.localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};
