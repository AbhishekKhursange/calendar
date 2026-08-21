export default function Header({ stateName, onChangeState }) {
  const todayLabel = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <header className="app-header">
      <div>
        <h1 className="app-title">
          <i className="bi bi-stars"></i>
          Festival Calendar
        </h1>
        {stateName && (
          <button className="state-change-link" onClick={onChangeState}>
            <i className="bi bi-geo-alt-fill"></i> {stateName} · Change
          </button>
        )}
      </div>
      <span className="today-pill">{todayLabel}</span>
    </header>
  );
}