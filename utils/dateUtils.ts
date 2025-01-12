export const calculateMonthsAndDays = (
  targetDate: Date
): { months: number; days: number } => {
  const currentDate = new Date();
  let months = (currentDate.getFullYear() - targetDate.getFullYear()) * 12;
  months += currentDate.getMonth() - targetDate.getMonth();
  if (currentDate.getDate() < targetDate.getDate()) {
    months--;
  }
  const daysDifference = currentDate.getDate() - targetDate.getDate();
  const days = daysDifference >= 0 ? daysDifference : 30 + daysDifference;
  return { months, days };
};
