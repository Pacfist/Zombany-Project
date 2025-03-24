import React, { useState, useEffect } from "react";
import avocadoGif from "../../public/videos/avocado.gif"; // Ensure the GIF is placed in the correct path
import avocadoPng from "../../public/images/avocado.png"; // Ensure the PNG is placed in the correct path

const Avocado = ({ currentStep, stopAtCrown = false }) => {
  const [isGif, setIsGif] = useState(true);
  const [showChat, setShowChat] = useState(false);
  const [animationKey, setAnimationKey] = useState(0); // Add a key to force re-render

  // Messages for each step of the avocado journey
  const chatMessages = {
    0: "Hi there! I'm Avo, your guide!",
    1: "Let's explore Zombany together!",
    2: "Going down a bit, lots to see here!",
    3: "Up we go, isn't this fun?",
    4: "Taking a dip down again!",
    5: "Rising up to new heights!",
    6: "Down we go once more!",
    7: "Almost at the finish line!",
    8: "We made it! Thanks for joining me!",
    crown: "We did it! You've reached the crown! 👑",
    // Add more messages for steps beyond 8 if needed
  };

  // Get message based on current step
  const getCurrentMessage = () => {
    if (stopAtCrown) {
      return chatMessages.crown;
    }

    if (currentStep > 8) {
      const remainder = currentStep % 8;
      return chatMessages[remainder] || "Continuing our journey!";
    }
    return chatMessages[currentStep] || "Ready for adventure!";
  };

  // Reset animation and chat state to trigger them again
  const refreshAnimation = () => {
    setIsGif(true);
    setShowChat(false);
    setAnimationKey((prev) => prev + 1); // Change key to force re-render

    // Show GIF, then fade to PNG
    setTimeout(() => {
      setIsGif(false);
    }, 3000);

    // Show chat box shortly after
    setTimeout(() => {
      setShowChat(true);
    }, 1000);
  };

  // Called when component mounts or step/crown state changes
  useEffect(() => {
    refreshAnimation();

    return () => {
      // Clean up timeouts when unmounting or before re-running effect
    };
  }, [currentStep, stopAtCrown]);

  // Listen for modal close events to refresh animation
  useEffect(() => {
    // Create a function to listen for custom events
    const handleModalClose = () => {
      refreshAnimation();
    };

    // Add event listener for custom modal close event
    window.addEventListener("modalClosed", handleModalClose);

    // Clean up
    return () => {
      window.removeEventListener("modalClosed", handleModalClose);
    };
  }, []);

  const getMovementClass = () => {
    // If we should stop at crown, apply special positioning class
    if (stopAtCrown) {
      return "crown-position";
    }

    if (currentStep === 0) return "";

    // Handle steps beyond 8 with a pattern
    if (currentStep > 8) {
      const remainder = currentStep % 8;
      if (remainder === 0) return "move-down8";
      return remainder % 2 === 1
        ? `move-up${remainder > 2 ? remainder : ""}`
        : `move-down${remainder}`;
    }

    // Handle steps 1-8
    switch (currentStep) {
      case 1:
        return "move-up";
      case 2:
        return "move-down";
      case 3:
        return "move-up3";
      case 4:
        return "move-down4";
      case 5:
        return "move-up5";
      case 6:
        return "move-down6";
      case 7:
        return "move-up7";
      default:
        return "";
    }
  };

  return (
    <div
      key={animationKey}
      className={`avocado-container ${getMovementClass()}`}
    >
      <img
        src={isGif ? avocadoGif : avocadoPng}
        alt="Avocado"
        className={`avocado-animation ${isGif ? "fade-out" : "fade-in"}`}
      />
      {showChat && (
        <div className="avocado-chat-box">
          <div className="chat-bubble">{getCurrentMessage()}</div>
        </div>
      )}
    </div>
  );
};

export default Avocado;
