import { getQueryParams } from "../queryParams";

export const getLocationTags = (pathName: string, search: string) => {
  return search
    .replace("?", "")
    .split("&")
    .map((tag) => {
      if (tag.includes(pathName)) {
        return tag.split("=")?.[1] as string;
      }
    })
    .filter((i) => i);
};

export const constructLocationTags = (
  pathName: string,
  search: string,
  values: (string | undefined)[]
) => {
  const queryParams = getQueryParams(pathName, search);

  const genres = values.map((i) => `${pathName}=${i}`).join("&");
  const link = `/search-anime/?${queryParams}${
    queryParams.length ? "&" : ""
  }${genres}`;

  return link;
};
