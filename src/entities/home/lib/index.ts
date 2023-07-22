export const getNextSeason = () => {
  const month = new Date().getMonth();
  if (month <= 1 || month === 11) return "SPRING";
  else if (month <= 4) return "SUMMER";
  else if (month <= 7) return "FALL";
  else return "WINTER";
};

export const getSeason = () => {
  const month = new Date().getMonth();
  if (month <= 1 || month === 11) return "WINTER";
  else if (month <= 4) return "SPRING";
  else if (month <= 7) return "SUMMER";
  else return "FALL";
};

export const getYear = () => {
  const year = new Date().getFullYear();

  return year;
};

export const getNextYear = () => {
  const season = getNextSeason();

  const year = getYear();

  if (season === "FALL") return year + 1;
  return year;
};
