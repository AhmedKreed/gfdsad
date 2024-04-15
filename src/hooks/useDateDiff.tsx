import { useDate } from "./useDate";

export const useDateDiff = (createdAt: string[]) => {
  const { date } = useDate();
  const day = Number(createdAt[0].split("-")[2]);
  const month = Number(createdAt[0].split("-")[1]);
  const start = new Date(createdAt[0]);
  const end = new Date(date);
  const dayDiff = Math.floor(
    (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
  );
  let diff: string;
  if (dayDiff) {
    if (dayDiff > 27) {
      if (dayDiff < 365) {
        const dd = 12 - month;
        const currentMonths = date.getMonth() + 1;
        const monthTime =
          currentMonths > month ? currentMonths - month : currentMonths + dd;
        switch (monthTime) {
          case 1:
            diff = "شهر";
            break;
          case 2:
            diff = "شهرين";
            break;
          case 12:
            diff = "سنة";
            break;
          default:
            diff = `${monthTime} شهر`;
        }
      } else {
        diff = "اكثر من سنة";
      }
    } else {
      if (dayDiff > 10) {
        diff = `${dayDiff} يوم`;
      } else {
        switch (dayDiff) {
          case 1:
            diff = "يوم";
            break;
          case 2:
            diff = "يومان";
            break;
          default:
            diff = `${dayDiff} أيام`;
        }
      }
    }
  } else {
    const hour = Number(createdAt[1].split(":")[0]);
    const minutes = Number(createdAt[1].split(":")[1]);
    const dd = 24 - hour;
    const hourDiff =
      date.getHours() > hour ? date.getHours() - hour : date.getHours() + dd;
    if (hourDiff === 1 && date.getMinutes() < minutes) {
      const dd = 60 - minutes;
      let minutesDiff = date.getMinutes() + dd;
      if (minutesDiff < 5) {
        diff = "الان";
      } else if (minutesDiff < 15) {
        diff = "قبل 5 دقائق";
      } else if (minutesDiff < 30) {
        diff = "قبل 15 دقيقة";
      } else if (minutesDiff < 45) {
        diff = "قبل 30 دقيقة";
      } else {
        diff = "قبل 45 دقيقة";
      }
    } else if (hourDiff === 24 && date.getMinutes() > minutes) {
      let minutesDiff = date.getMinutes() - minutes;

      if (minutesDiff < 5) {
        diff = "الان";
      } else if (minutesDiff < 15) {
        diff = "قبل 5 دقائق";
      } else if (minutesDiff < 30) {
        diff = "قبل 15 دقيقة";
      } else if (minutesDiff < 45) {
        diff = "قبل 30 دقيقة";
      } else {
        diff = "قبل 45 دقيقة";
      }
    } else {
      switch (hourDiff) {
        case 1:
          diff = "ساعة";
          break;
        case 2:
          diff = "ساعتان";
          break;
        case 24:
          diff = "يوم";
          break;
        default:
          diff = `${hourDiff} ساعات`;
      }
    }
  }

  return diff!;
};
