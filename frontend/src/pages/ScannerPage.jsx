import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import Header from "../components/Header";

const ScannerPage = () => {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);
  const [result, setResult] = useState("");
  const [clicked, setClick] = useState(false);
  const recognizeFood = async (imageData) => {
    try {
      setTimeout(() => {
        setResult("Lebron weiny dihhh");
      }, 3000)
    } catch (error) {
      console.log("Error: ", error);
      setResult("Error with recognition");
    }
  };
  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    recognizeFood(imageSrc);
    setClick(true)
  };

  return (
    <div className="flex flex-col items-center justify-start h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Take a photo of food!</h1>
      <div className="relative w-full bg-gray-200 rounded-lg overflow-hidden">
        <Webcam
          ref={webcamRef}
          className="w-full h-full z-20"
          screenshotFormat="image/jpeg"
        />
      </div>
      <button
        onClick={capture}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Take a picture
      </button>
      {!result && clicked && <p className="mt-4 text-lg font-semibold">Loading result...</p>}
      {result && <p className="mt-4 text-lg font-semibold">{result}</p>}
    </div>
  );
};

export default ScannerPage;
