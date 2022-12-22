import DayDateService from "@/services/DayDateService";

const daysDate = new DayDateService();
test("Given ISO date - day of week return array of objects which contain rest days of current week", () => {
  // expect(
  //   daysDate.getDaysData(daysDate.getDatesInWeek("2022-12-20"))[0]
  // ).toEqual(
  //   { index: 0, dayName: "Sunday", daysDate: "2022-12-18" }
  //   // { index: 1, dayName: "Monday", daysDate: "2022-12-19" },
  //   // { index: 2, dayName: "Tuesday", daysDate: "2022-12-20" },
  //   // { index: 3, dayName: "Wednesday", daysDate: "2022-12-21" },
  //   // { index: 4, dayName: "Thursday", daysDate: "2022-12-22" },
  //   // { index: 5, dayName: "Friday", daysDate: "2022-12-23" },
  //   // { index: 6, dayName: "Saturday", daysDate: "2022-12-24" },
  // );
  expect({ index: 0, dayName: "Sunday", dayDate: "2022-12-18" }).toEqual({
    index: 0,
    dayName: "Sunday",
    daysDate: "2022-12-18",
  });
  console.log(
    daysDate.getDaysData(daysDate.getDatesInWeek("2022-12-20"))[0],
    "test"
  );
  // expect(
  //   daysDate.getDaysData(daysDate.getDatesInWeek('2022-12-10'))
  // ).toStrictEqual([
  //   { index: 0, dayName: 'Sunday', daysDate: '2022-12-04' },
  //   { index: 1, dayName: 'Monday', daysDate: '2022-12-05' },
  //   { index: 2, dayName: 'Tuesday', daysDate: '2022-12-06' },
  //   { index: 3, dayName: 'Wednesday', daysDate: '2022-12-07' },
  //   { index: 4, dayName: 'Thursday', daysDate: '2022-12-08' },
  //   { index: 5, dayName: 'Friday', daysDate: '2022-12-09' },
  //   { index: 6, dayName: 'Saturday', daysDate: '2022-12-10' },
  // ]);
});
