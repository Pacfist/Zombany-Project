import React, { useState } from "react";
import Step from "./Step";
import Path from "./Path";

const Module = ({ onStepClick, length }) => {
  const stepSpacing = 200; // Distance between steps
  const [visited, setVisited] = useState(Array(length).fill(false));
  console.log(visited);
  return (
    <div className="module w-full h-full relative">
      {Array.from({ length }).map((_, index) => (
        <Step
          key={index}
          index={index}
          onStepClick={onStepClick}
          positionX={index * stepSpacing} // Move left progressively
          positionY={index % 2 === 0 ? 100 : -100} // Zig-zag pattern
          finalElement={index === length - 1}
          visited={visited}
          setVisited={setVisited}
        />
      ))}
      {Array.from({ length: length - 1 }).map((_, index) => (
        <Path
          key={index}
          positionX={index * 200} // Move left progressively
          positionY={index * 200}
          index={index}
          visited={visited[index]}
        />
      ))}
    </div>
  );
};

export default Module;
