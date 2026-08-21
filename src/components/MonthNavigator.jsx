const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export default function MonthNavigator({ monthIndex, year, onPrev, onNext }) {
  return (
    <div className="month-nav">
      <button className="month-nav-btn" onClick={onPrev} aria-label="Previous month">
        <i className="bi bi-chevron-left"></i>
      </button>
      <span className="month-nav-label">
        {MONTH_NAMES[monthIndex]} {year}
      </span>
      <button className="month-nav-btn" onClick={onNext} aria-label="Next month">
        <i className="bi bi-chevron-right"></i>
      </button>
    </div>
  );
}