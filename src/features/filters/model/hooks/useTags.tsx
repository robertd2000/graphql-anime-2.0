import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { ommitedParamsForTags } from "~features/filters/constants/filter";
import { getQueryParams } from "~features/filters/lib/queryParams";

export const useTags = () => {
  const navigate = useNavigate();
  const [tags, setTags] = useState<
    {
      id: string;
      name: string;
    }[]
  >([]);
  const { search } = useLocation();

  useEffect(() => {
    const tagsList = search
      ?.split("&")
      .map((tag) => ({
        name: tag.split("=")?.at(1) || "",
        id: (tag.split("=")?.at(1) || "").toLowerCase(),
      }))
      .filter((tag) => {
        if (ommitedParamsForTags.includes(tag.name)) return false;
        return tag.name;
      });

    setTags(tagsList);
  }, [search]);

  const onClear = (tag: string) => {
    setTags((prev) => prev.filter((i) => i.id !== tag));
    const queryParams = getQueryParams(tag, search);

    navigate(`/search-anime/?${queryParams}`);
    window.location.reload();
  };

  const onClearAll = () => {
    navigate(`/search-anime`);
    window.location.reload();
  };

  return {
    tags,
    onClearAll,
    onClear,
  };
};
