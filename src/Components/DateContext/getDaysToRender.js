import { today } from "./DateReducer";

export function getDaysToRender(month, year) {
  // объект Date из выбранной даты
  const selectedDateObj = new Date(year, month);

  //количество дней в текущем месяце
  const daysInSelectedMonth = new Date(year, month + 1, 0).getDate();

  //количество дней в предыдущем месяце
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  // день недели первого дня месяца
  const weekDayStart = selectedDateObj.getDay();
  // день недели последнего дня месяца
  const weekDayEnd = new Date(year, month + 1, 0).getDay();

  //получение массива дней конца предыдущего месяца
  function getDaysToPrepend() {
    const arr = [];
    let day = daysInPrevMonth;

    if (weekDayStart === 0) {
      for (let i = 1; i < 7; i++) {
        arr.unshift({
          day,
          month: month ? month - 1 : 11,
          year: month ? year : year - 1,
        });
        day--;
      }
    } else {
      for (let i = 1; i < weekDayStart; i++) {
        arr.unshift({
          day,
          month: month ? month - 1 : 11,
          year: month ? year : year - 1,
        });
        day--;
      }
    }

    return arr;
  }

  const daysArrToPrepend = getDaysToPrepend();

  //массив из дней текущего месяца
  const daysArrCurrMonth = Array.from(
    { length: daysInSelectedMonth },
    (_, index) => ({
      day: index + 1,
      month,
      year,
      today:
        index + 1 === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear()
          ? true
          : false,
      currentMonth: true,
    })
  );

  // получение массива дней начала следующего месяца
  function getDaysToAppend() {
    const arr = [];

    if (weekDayEnd === 0) return arr;
    else {
      for (let i = 1; i <= 7 - weekDayEnd; i++) {
        arr.push({
          day: i,
          month: month === 11 ? 0 : month + 1,
          year: month === 11 ? year + 1 : year,
        });
      }
    }

    return arr;
  }

  const daysArrToAppend = getDaysToAppend();

  return [...daysArrToPrepend, ...daysArrCurrMonth, ...daysArrToAppend];
}
