import React, { useState } from "react";

const Step = ({ onStepClick, positionX = 0, positionY = 0 }) => {
  const [stepStatus, setStepStatus] = useState("idle");

  const handleClick = () => {
    onStepClick();
  };

  return (
    <button
      className="bg-[var(--color-yellow)] absolute w-[100px] h-[100px] rounded-full custom-shadow cursor-pointer hover:text-[var(--color-blue)]"
      style={{
        top: `calc(50% + ${positionY}px)`,
        left: `calc(100% + ${positionX}px)`,
      }}
      type="button"
      onClick={handleClick}
    >
      <span
        className={`${
          stepStatus === "idle"
            ? "icon-camera"
            : stepStatus === "done"
            ? "icon-wheat"
            : "icon-crown"
        } text-[50px] transition-all duration-300`}
      ></span>
    </button>
  );
};

export default Step;
