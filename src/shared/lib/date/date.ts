export const getYears = () => {
  let currentYear = new Date().getFullYear(),
    years = [];
  let endYear = 1930;
  while (endYear <= currentYear) {
    years.push(currentYear--);
  }
  return years;
};

export const getYearsSelectOptions = () => {
  return getYears()?.map((i) => ({
    label: i,
    value: i,
  }));
};
