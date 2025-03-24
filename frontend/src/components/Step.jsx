import React, { useState } from "react";

const Step = ({
  onStepClick,
  positionX = 0,
  positionY = 0,
  finalElement,
  visited,
  setVisited,
  index,
}) => {
  const handleClick = () => {
    if (index > 0 && !visited[index - 1]) {
      alert("This step is not unlocked yet.");
      return;
    }
    onStepClick();
    setVisited(visited.map((v, i) => (i === index ? true : v)));
  };

  return (
    <button
      className={` absolute w-[100px] h-[100px] rounded-full ${
        visited[index] ? "visited-shadow" : "custom-shadow"
      } cursor-pointer hover:text-[var(--color-blue)]`}
      style={{
        backgroundColor: visited[index]
          ? "var(--color-orange)"
          : "var(--color-yellow)",
        top: `calc(50% + ${positionY}px)`,
        right: `${positionX}px`, // Start from right 0, move left
      }}
      type="button"
      onClick={handleClick}
    >
      <span
        className={`${
          visited[index] === false ? "icon-camera" : "icon-wheat"
        } ${
          finalElement && "icon-crown"
        } text-[50px] transition-all duration-300`}
      ></span>
    </button>
  );
};

export default Step;
