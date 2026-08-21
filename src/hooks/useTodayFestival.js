import { useMemo } from "react";
import festivals from "../data/festivals";

// Returns { list, today, isFestivalToday, todayFestival, upcoming }
export default function useTodayFestival(referenceDate = new Date()) {
  return useMemo(() => {
    const today = referenceDate;
    const todayMonth = today.getMonth() + 1;
    const todayDay = today.getDate();

    const todayFestival = festivals.find(
      (f) => f.month === todayMonth && f.day === todayDay
    );

    // Next 5 upcoming festivals from today (wraps into next year conceptually,
    // sorted by "days from now" within the same 2026 dataset).
    const withDayOfYear = festivals.map((f) => {
      const date = new Date(today.getFullYear(), f.month - 1, f.day);
      let diff = Math.ceil((date - stripTime(today)) / (1000 * 60 * 60 * 24));
      if (diff < 0) diff += 365; // rough wrap for festivals already passed this year
      return { ...f, diff, date };
    });

    const upcoming = withDayOfYear
      .filter((f) => f.diff > 0)
      .sort((a, b) => a.diff - b.diff)
      .slice(0, 5);

    return {
      list: festivals,
      today,
      isFestivalToday: Boolean(todayFestival),
      todayFestival,
      upcoming,
    };
  }, [referenceDate]);
}

function stripTime(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}