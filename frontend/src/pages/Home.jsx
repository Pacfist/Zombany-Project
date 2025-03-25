import React, { useState } from "react";
import Module from "../components/Module";
import Modal from "../components/Modal";
import Avocado from "../components/Avocado";
import WheatCounter from "../components/WheatCounter";

const Home = () => {
  const [isStepActive, setIsStepActive] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [stopAvocado, setStopAvocado] = useState(false);
  const [visitedSteps, setVisitedSteps] = useState([]);

  const handleStepClick = (isCrown) => {
    if (isCrown) {
      // If it's a crown click, only set stopAvocado but don't open modal or increment step
      setStopAvocado(true);
      return;
    }

    // For normal steps, continue with regular behavior
    setIsStepActive(true);
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleCloseModal = () => {
    setIsStepActive(false);
  };

  const handleContentChange = (e) => {
    setModalContent(e.target.value);
  };

  const handleVisitedChange = (visited) => {
    setVisitedSteps(visited);
  };

  return (
    <section className="home mt-[-100px] ">
      <WheatCounter visitedSteps={visitedSteps} />
      <Module
        onStepClick={handleStepClick}
        length={8}
        onVisitedChange={handleVisitedChange}
      />
      <Modal
        stepStatus={isStepActive}
        onClose={handleCloseModal}
        content={
          <div>
            <textarea
              value={modalContent}
              onChange={handleContentChange}
              placeholder="Paste your content here..."
              className="w-full h-32 p-2 border rounded"
            />
          </div>
        }
      />
      <Avocado currentStep={currentStep} stopAtCrown={stopAvocado} />
    </section>
  );
};

export default Home;
