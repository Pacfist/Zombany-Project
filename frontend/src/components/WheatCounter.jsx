import React, { useState, useEffect } from "react";

const WheatCounter = ({ visitedSteps }) => {
  const [wheatCount, setWheatCount] = useState(() => {
    return localStorage.getItem("wheatBalance") || 0;
  });
  const [showIncrement, setShowIncrement] = useState(false);

  // Update wheat count when visited steps change
  useEffect(() => {
    // Count the number of true values in visitedSteps
    const completedSteps = visitedSteps.filter((step) => step).length;
    const newWheatCount = completedSteps * 5;

    // If wheat count increased, show the increment animation
    if (newWheatCount > wheatCount) {
      setShowIncrement(true);
      setTimeout(() => setShowIncrement(false), 1500); // Animation duration
    }
    localStorage.setItem("wheatBalance", newWheatCount);
    setWheatCount(newWheatCount);
  }, [visitedSteps, wheatCount]);

  return (
    <div className="wheat-counter">
      <span className="icon-wheat"></span>
      <span className="count">{wheatCount}</span>
      {showIncrement && <span className="wheat-increment">+5</span>}
    </div>
  );
};

export default WheatCounter;
