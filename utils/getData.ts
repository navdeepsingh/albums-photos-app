export const getData = async <T>(url: string): Promise<T[]> => {
  try {
    const results = await (await fetch(url)).json();
    return results;
  } catch (e) {
    return [];
  }
};
