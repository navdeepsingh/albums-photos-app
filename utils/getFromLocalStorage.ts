export const getFromLocalStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key) || "");
};
