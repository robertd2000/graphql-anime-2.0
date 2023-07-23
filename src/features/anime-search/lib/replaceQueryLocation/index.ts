export const replaceQueryLocation = (
  pathName: string,
  search: string,
  value: string
) => {
  const queryParams =
    `${search
      .split("&")
      .filter((i) => !i.includes(pathName))
      ?.join("&")}` + (value ? `&${pathName}=${value}` : "");

  const isQueryLocation =
    queryParams
      .replace("?", "")
      .split("&")
      .filter((i) => i).length < 2 || queryParams === "&";

  return {
    queryParams,
    isQueryLocation,
  };
};
