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
