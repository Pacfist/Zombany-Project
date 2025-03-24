import React from "react";

const Path = ({ positionX = 0, positionY = 0, index, visited }) => {
  return (
    <div
      className={`path absolute ${index % 2 === 1 ? "rotate-90" : "rotate-0"}`}
      style={{
        top: ` 50%`,
        right: `${positionX + 100}px `,
      }}
    >
      <img
        src={`/images/${visited ? "pathVisited" : "path"}.png`}
        alt="path"
        className="w-[100px] h-[100px]"
      />
    </div>
  );
};

export default Path;
