export const getQueryParams = (param: string, search: string) => {
  const queryParams = search
    .replace("?", "")
    .split("&")
    .filter((i) => {
      return i && i !== "?" && !i.toLowerCase().includes(param);
    })
    .join("&");

  return queryParams;
};
