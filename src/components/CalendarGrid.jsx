const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export default function CalendarGrid({ monthIndex, year, festivals, today }) {
  const firstDayOfMonth = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  const festivalDaysInMonth = new Set(
    festivals
      .filter((f) => f.month === monthIndex + 1)
      .map((f) => f.day)
  );

  const isCurrentMonth =
    today.getFullYear() === year && today.getMonth() === monthIndex;

  const cells = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    cells.push(<div key={`empty-${i}`} className="day-cell empty" />);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    const isToday = isCurrentMonth && today.getDate() === day;
    const hasFestival = festivalDaysInMonth.has(day);
    const dayOfWeek = (firstDayOfMonth + day - 1) % 7;
    const isSunday = dayOfWeek === 0;
    cells.push(
      <div
        key={day}
        className={`day-cell ${isToday ? "is-today" : ""} ${hasFestival ? "has-festival" : ""} ${isSunday ? "is-sunday" : ""}`}
      >
        <span>{day}</span>
        {hasFestival && <span className="festival-dot" />}
      </div>
    );
  }

  return (
    <div>
      <div className="weekday-row">
        {WEEKDAYS.map((d, i) => (
          <span key={d} className={i === 0 ? "is-sunday" : ""}>
            {d}
          </span>
        ))}
      </div>
      <div className="day-grid">{cells}</div>
    </div>
  );
}