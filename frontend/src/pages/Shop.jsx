import React, { useState } from "react";
import avocado1 from "../public/icons/avocado1.svg"
import avocado2 from "../public/icons/avocado2.svg"
import avocado3 from "../public/icons/avocado3.svg"
import hat from "../public/icons/hat-birthday-svgrepo-com.svg"
import glasses from "../public/icons/glasses-svgrepo-com.svg"
import cowboy from "../public/icons/hat-cowboy-hobbies-9-svgrepo-com.svg"
import { motion } from "framer-motion";

const customizations = [
    { id: 1, name: "Birthday Hat", price: 5, image: hat },
    { id: 2, name: "Stylish Glasses", price: 7, image: glasses },
    { id: 3, name: "Cowboy Hat", price: 10, image: cowboy },
];

const Shop = () => {
    const [ownedItems, setOwnedItems] = useState([]);
    const [selectedAvocado, setSelectedAvocado] = useState(avocado1);
    const [accessories, setAccessories] = useState([]);
    const [points, setPoints] = useState(20); // 🟢 Initial points

    const handlePurchase = (item) => {
        if (!ownedItems.includes(item.id) && points >= item.price) {
            setOwnedItems([...ownedItems, item.id]);
            setAccessories([...accessories, item.image]);
            setPoints(points - item.price); // 🔻 Deduct points

            if (item.id === 1) setSelectedAvocado(avocado2);
            if (item.id === 2) setSelectedAvocado(avocado3);

            alert(`You purchased: ${item.name}! 🎉`);
        } else if (points < item.price) {
            alert("Not enough points!");
        }
    };

    return (
        <div className="flex flex-col items-center p-8 bg-[#F5F5DC] min-h-screen mt-[80px]">
            {/* Title & Points */}
            <motion.h1
                className="text-5xl font-bold mb-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                Shop Page
            </motion.h1>
            <p className="text-lg mb-6 text-gray-700">Customize your Avocado 🥑</p>
            <p className="text-xl font-semibold mb-4 text-green-800">
                🪙 Current Points: {points}
            </p>

            {/* Avocado Character */}
            <motion.div
                className="relative flex items-center justify-center bg-white p-6 shadow-lg rounded-lg mb-8 w-[250px] h-[250px]"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
            >
                <img src={selectedAvocado} alt="Avocado Character" className="w-full h-full object-contain" />
            </motion.div>

            {/* Customization Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {customizations.map((item) => {
                    const owned = ownedItems.includes(item.id);
                    const affordable = points >= item.price;

                    return (
                        <motion.div
                            key={item.id}
                            className="bg-white p-4 shadow-md rounded-lg text-center w-[200px] transition hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                        >
                            <img src={item.image} alt={item.name} className="w-24 h-24 mx-auto" />
                            <h3 className="text-xl font-bold mt-2">{item.name}</h3>
                            <p className="text-gray-700">Price: ${item.price}</p>

                            <button
                                className={`mt-3 px-4 py-2 text-white font-bold rounded transition ${owned
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : !affordable
                                            ? "bg-red-400 cursor-not-allowed"
                                            : "bg-green-500 hover:bg-green-700"
                                    }`}
                                onClick={() => handlePurchase(item)}
                                disabled={owned || !affordable}
                            >
                                {owned ? "Owned ✅" : !affordable ? "Not enough points" : "Buy"}
                            </button>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default Shop;