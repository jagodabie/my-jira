export function getDay(weekDay: number, monthDay: number): number[] {
  const weekDaysDate = [];
  for (weekDay; weekDay <= 6; weekDay++) {
    monthDay++;
    weekDaysDate.push(monthDay);
  }
  for (weekDay; weekDay > 0; weekDay--) {
    monthDay--;
    weekDaysDate.push(monthDay);
  }
  return weekDaysDate;
}
