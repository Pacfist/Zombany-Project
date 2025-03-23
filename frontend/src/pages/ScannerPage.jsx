import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import Header from "../components/Header";

const ScannerPage = () => {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);
  const [result, setResult] = useState("");

  const recognizeFood = async (imageData) => {
    try {
      console.log("Фото отправлено на анализ", imageData);
      setResult("🍌 This is a banana");
    } catch (error) {
      console.log("Error: ", error);
      setResult("Error with recognition");
    }
  };
  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    recognizeFood(imageSrc);
  };

  return (
    <div className="flex flex-col items-center justify-start h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Take a photo of food!</h1>
      <div className="relative w-64 h-64 bg-gray-200 rounded-lg overflow-hidden">
        <Webcam
          ref={webcamRef}
          className="w-full h-full"
          screenshotFormat="image/jpeg"
        />
      </div>
      <button
        onClick={capture}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        📸 Сделать снимок
      </button>
      {image && <img src={image} alt="Снимок" className="mt-4 w-32 h-32 rounded-lg border" />}
      {result && <p className="mt-4 text-lg font-semibold">{result}</p>}
    </div>
  );
};

export default ScannerPage;
