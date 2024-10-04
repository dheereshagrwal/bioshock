// utils/dateUtils.ts
export const calculateDaysPassed = (targetDate: Date): number => {
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - targetDate.getTime();
  return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
};
