import { useState } from "react";
import indianStates from "../data/indianStates";

export default function StateSelector({ onSelect }) {
  const [choice, setChoice] = useState("");

  const handleContinue = () => {
    if (choice) onSelect(choice);
  };

  return (
    <div className="state-modal-overlay">
      <div className="state-modal fade-in">
        <div className="state-modal-emoji">🪔</div>
        <h2 className="state-modal-title">Welcome to Festival Calendar!</h2>
        <p className="state-modal-subtitle">
          Select your state to see festivals relevant to you.
        </p>
        <select
          className="state-select"
          value={choice}
          onChange={(e) => setChoice(e.target.value)}
        >
          <option value="" disabled>
            Choose your state
          </option>
          {indianStates.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
        <button
          className="state-continue-btn"
          onClick={handleContinue}
          disabled={!choice}
        >
          Continue
        </button>
      </div>
    </div>
  );
}