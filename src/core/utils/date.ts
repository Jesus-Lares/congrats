import moment from "moment";

export const calculateRemainingTime = (congratulationDay: string) => {
  const today = moment();
  const congratulation = moment(congratulationDay);
  if (today.isAfter(congratulation)) return congratulation.diff(today, "days");
  return Math.abs(today.diff(congratulation, "days")) + 1;
};
