import { Day } from "@/types/Task";

export default class DayDateService {
  public orderedFormattedString(
    date: string,
    index: number,
    increase: boolean,
    iterationNumb: number
  ) {
    const mathOperation = increase
      ? new Date(date).getDate() + (iterationNumb - index)
      : new Date(date).getDate() - index;
    return `${new Date(date).getFullYear()}-${
      new Date(date).getMonth() + 1
    }-${mathOperation}`;
  }

  public getDayName(date: string): {
    dayName: string;
    dayNumber: number;
  } {
    switch (new Date(date).getDay()) {
      case 0:
        return {
          dayName: "Sunday",
          dayNumber: 0,
        };
      case 1:
        return {
          dayName: "Monday",
          dayNumber: 1,
        };
      case 2:
        return {
          dayName: "Tuesday",
          dayNumber: 2,
        };
      case 3:
        return {
          dayName: "Wednesday",
          dayNumber: 3,
        };
      case 4:
        return {
          dayName: "Thursday",
          dayNumber: 4,
        };
      case 5:
        return {
          dayName: "Friday",
          dayNumber: 5,
        };
      case 6:
        return {
          dayName: "Saturday",
          dayNumber: 6,
        };
    }
    return {
      dayName: "",
      dayNumber: -1,
    };
  }

  getDatesInWeek(date: string): string[] {
    const weekDayNumber = [0, 1, 2, 3, 4, 5, 6];
    const weekDaysDate: string[] = [];

    weekDayNumber.map((_, index) => {
      if (new Date(date).getDay() === 0) {
        weekDaysDate.push(this.orderedFormattedString(date, index, true, 6));
        return weekDaysDate.sort();
      } else if (new Date(date).getDay() === 6) {
        weekDaysDate.push(this.orderedFormattedString(date, index, false, 7));
        return weekDaysDate.sort();
      } else if (index <= new Date(date).getDay()) {
        weekDaysDate.push(this.orderedFormattedString(date, index, false, 7));
      } else if (index > new Date(date).getDay()) {
        weekDaysDate.push(this.orderedFormattedString(date, index, true, 7));
      }
      return weekDaysDate;
    });
    return weekDaysDate.sort();
  }

  public getDaysData(dates: string[]): Day[] {
    return dates.map((date: string) => {
      return {
        index: this.getDayName(date).dayNumber,
        dayName: this.getDayName(date).dayName,
        dayDate: date,
      };
    });
  }
}
