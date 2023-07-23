export const getLocationTag = (pathName: string, search: string) => {
  return search
    .replace("?", "")
    .split("&")
    .map((tag) => {
      if (tag.includes(pathName)) {
        return tag.split("=")?.[1];
      }
    })
    .filter((i) => i)?.[0];
};
