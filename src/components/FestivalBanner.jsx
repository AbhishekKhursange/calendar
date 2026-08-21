export default function FestivalBanner({ festival }) {
  if (!festival) {
    return (
      <div className="no-festival-card fade-in">
        <i className="bi bi-emoji-smile"></i>
        <span>No festival today. Enjoy your day!</span>
      </div>
    );
  }

  return (
    <div className="festival-banner fade-in">
      {festival.type === "gazetted" && (
        <span className="holiday-badge">Public Holiday</span>
      )}
      <div className="festival-banner-emoji">{festival.emoji}</div>
      <div className="festival-banner-name">Happy {festival.name}!</div>
      <div className="festival-banner-msg">{festival.message}</div>
    </div>
  );
}