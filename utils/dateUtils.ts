// utils/dateUtils.ts
export const calculateDaysPassed = (targetDate: Date): number => {
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - targetDate.getTime();
  return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
};

export const calculateMonthsAndDays = (targetDate: Date): { months: number; days: number } => {
  const currentDate = new Date();
  let months = (currentDate.getFullYear() - targetDate.getFullYear()) * 12;
  months += currentDate.getMonth() - targetDate.getMonth();
  if (currentDate.getDate() < targetDate.getDate()) {
    months--;
  }
  const days = calculateDaysPassed(targetDate) % 30;
  return { months, days };
};
