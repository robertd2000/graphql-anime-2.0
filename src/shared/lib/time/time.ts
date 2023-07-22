export const convertSeconds = (totalMinutes: number): string => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${padToTwoDigits(hours)} hour, ${padToTwoDigits(minutes)} mins`;
};

function padToTwoDigits(num: number) {
  return num.toString().padStart(2, "0");
}
