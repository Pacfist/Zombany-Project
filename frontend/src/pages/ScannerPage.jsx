import React, { useRef, useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as tf from '@tensorflow/tfjs';
import axios from 'axios';

const FoodScanner = () => {
  const webcamRef = useRef(null);
  const [model, setModel] = useState(null);
  const [foodName, setFoodName] = useState('');
  const [nutrition, setNutrition] = useState([]);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState('');
  const [manualInput, setManualInput] = useState('');

  useEffect(() => {
    const loadModel = async () => {
      await tf.setBackend('webgl');
      await tf.ready();
      const loadedModel = await mobilenet.load();
      setModel(loadedModel);
      setLoading(false);
    };

    loadModel();
  }, []);

  const recognizeFood = async (food) => {
    try {
      setResult('Recognizing...');
      const apiUrl = `https://api.calorieninjas.com/v1/nutrition?query=${food}`;
      const response = await axios.get(apiUrl, {
        headers: { 'X-Api-Key': 'hIZc/vilUVkgMSAPFrERig==xiYQwZ4QRF5AYf8Z' },
      });

      if (response.data.items && response.data.items.length > 0) {
        setResult(`Nutrition Facts for: ${food}`);
        setNutrition(response.data.items);
      } else {
        setResult('Food not recognized. Please try again.');
      }
    } catch (error) {
      setResult('Error with recognition');
    }
  };

  const captureAndIdentify = async () => {
    if (!model || !webcamRef.current) return;

    const imageSrc = webcamRef.current.getScreenshot();
    const img = new Image();
    img.src = imageSrc;
    img.onload = async () => {
      const predictions = await model.classify(img);
      if (predictions && predictions.length > 0) {
        const detectedFood = predictions[0].className;
        setFoodName(detectedFood);
        recognizeFood(detectedFood);
      } else {
        setFoodName('Could not recognize food.');
      }
    };
  };

  const handleManualSearch = () => {
    if (manualInput.trim() !== '') {
      setFoodName(manualInput);
      recognizeFood(manualInput);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Food Scanner & Nutrition Info</h1>
      {loading ? (
        <p className="text-lg">Loading scanner...</p>
      ) : (
        <>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={{ facingMode: 'environment' }}
            className="rounded-xl shadow-md"
          />
          <button
            onClick={captureAndIdentify}
            className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow"
          >
            Scan Food
          </button>
          {result && (
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-2">{result}</h2>
              {nutrition.length > 0 && (
                <table className="table-auto w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border px-4 py-2">Food Item</th>
                      <th className="border px-4 py-2">Calories (kcal)</th>
                      <th className="border px-4 py-2">Protein (g)</th>
                      <th className="border px-4 py-2">Carbs (g)</th>
                      <th className="border px-4 py-2">Fat (g)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {nutrition.map((item, index) => (
                      <tr key={index} className="bg-white">
                        <td className="border px-4 py-2">{item.name}</td>
                        <td className="border px-4 py-2">{item.calories}</td>
                        <td className="border px-4 py-2">{item.protein_g}</td>
                        <td className="border px-4 py-2">{item.carbohydrates_total_g}</td>
                        <td className="border px-4 py-2">{item.fat_total_g}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}
          <div className="mt-6 w-full max-w-md">
            <input
              type="text"
              placeholder="Enter food name manually"
              value={manualInput}
              onChange={(e) => setManualInput(e.target.value)}
              className="border p-2 rounded w-full"
            />
            <button
              onClick={handleManualSearch}
              className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-full"
            >
              Search Nutrition
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default FoodScanner;