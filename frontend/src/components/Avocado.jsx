import React, { useState, useEffect } from "react";
import avocadoGif from "../../public/videos/avocado.gif"; // Ensure the GIF is placed in the correct path
import avocadoPng from "../../public/images/avocado.png"; // Ensure the PNG is placed in the correct path

const Avocado = () => {
  const [isGif, setIsGif] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsGif(false);
    }, 5000); // Match the duration of the animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="avocado-container">
      <img
        src={isGif ? avocadoGif : avocadoPng}
        alt="Avocado"
        className={`avocado-animation ${isGif ? "fade-out" : "fade-in"}`}
      />
    </div>
  );
};

export default Avocado;
