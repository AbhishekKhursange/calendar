import { useMemo, useState } from "react";
import Header from "./components/Header";
import FestivalBanner from "./components/FestivalBanner";
import MonthNavigator from "./components/MonthNavigator";
import CalendarGrid from "./components/CalendarGrid";
import StateSelector from "./components/StateSelector";
import useTodayFestival from "./hooks/useTodayFestival";
import useSelectedState from "./hooks/useSelectedState";

export default function App() {
  const today = new Date();
  const [monthIndex, setMonthIndex] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  const { selectedState, setSelectedState, clearSelectedState } = useSelectedState();
  const { list, todayFestival } = useTodayFestival(today);

  const filteredList = useMemo(() => {
    if (!selectedState) return [];
    return list.filter(
      (f) => f.states.includes("all") || f.states.includes(selectedState)
    );
  }, [list, selectedState]);

  const filteredToday =
    todayFestival &&
    (todayFestival.states.includes("all") || todayFestival.states.includes(selectedState))
      ? todayFestival
      : null;

  // Festivals that fall in the month currently being viewed, sorted by date.
  const monthFestivals = useMemo(() => {
    return filteredList
      .filter((f) => f.month === monthIndex + 1)
      .map((f) => ({ ...f, date: new Date(year, monthIndex, f.day) }))
      .sort((a, b) => a.day - b.day);
  }, [filteredList, monthIndex, year]);

  const monthLabel = new Date(year, monthIndex, 1).toLocaleDateString("en-IN", {
    month: "long",
  });

  const handlePrev = () => {
    if (monthIndex === 0) {
      setMonthIndex(11);
      setYear((y) => y - 1);
    } else {
      setMonthIndex((m) => m - 1);
    }
  };

  const handleNext = () => {
    if (monthIndex === 11) {
      setMonthIndex(0);
      setYear((y) => y + 1);
    } else {
      setMonthIndex((m) => m + 1);
    }
  };

  if (!selectedState) {
    return <StateSelector onSelect={setSelectedState} />;
  }

  return (
    <div className="app-shell">
      <Header stateName={selectedState} onChangeState={clearSelectedState} />
      <FestivalBanner festival={filteredToday} />

      <MonthNavigator
        monthIndex={monthIndex}
        year={year}
        onPrev={handlePrev}
        onNext={handleNext}
      />
      <CalendarGrid
        monthIndex={monthIndex}
        year={year}
        festivals={filteredList}
        today={today}
      />

      <section className="upcoming-section">
        <h2 className="upcoming-title">
          <i className="bi bi-calendar-event"></i>
          Festivals in {monthLabel}
        </h2>
        {monthFestivals.length === 0 && (
          <p className="no-festivals-text">No festivals this month.</p>
        )}
        {monthFestivals.map((f) => (
          <div className="upcoming-item" key={f.name}>
            <span className="upcoming-emoji">{f.emoji}</span>
            <div>
              <div className="upcoming-name">{f.name}</div>
              <div className="upcoming-date">
                {f.date.toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                })}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}