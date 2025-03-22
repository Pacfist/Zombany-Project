import React from "react";
import Step from "./Step";

const Module = ({ onStepClick, length }) => {
  return (
    <div className="module w-full h-full relative">
      {Array.from({ length }).map((_, index) => (
        <Step
          key={index}
          onStepClick={onStepClick}
          positionX={index * -200}
          positionY={index % 2 === 0 ? 100 : -100}
        />
      ))}
    </div>
  );
};

export default Module;
