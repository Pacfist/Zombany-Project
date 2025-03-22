import React, { useState } from "react";
import Module from "../components/Module";
import Modal from "../components/Modal";

const Home = () => {
  const [isStepActive, setIsStepActive] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleStepClick = () => {
    setIsStepActive(true);
  };

  const handleCloseModal = () => {
    setIsStepActive(false);
  };

  const handleContentChange = (e) => {
    setModalContent(e.target.value);
  };

  return (
    <section className="home">
      <Module onStepClick={handleStepClick} length={7} />
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
    </section>
  );
};

export default Home;
