import React, { useState } from "react";
import profilePic from "../public/icons/avocado1.svg"; // ✅ Move this to assets

const Profile = () => {
    const [name, setName] = useState("Avocado Andy");
    const [weight, setWeight] = useState(72);
    const [points, setPoints] = useState(120);
    const [foodPreference, setFoodPreference] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [editing, setEditing] = useState(false);
    const [subscribed, setSubscribed] = useState(false); // ✅ Subscription state

    const handleProfileSubmit = (e) => {
        e.preventDefault();
        setEditing(false);
    };

    const handleFoodSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const handleSubscribe = () => {
        // You can integrate Stripe/PayPal here later
        setSubscribed(true);
    };

    return (
        <div className="min-h-screen bg-[#F5F5DC] flex flex-col items-center px-4 py-8 mt-[80px]">
            <h1 className="text-4xl font-bold mb-6">Profile</h1>

            <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md flex flex-col items-center">
                {/* Profile Picture */}
                <img
                    src={profilePic}
                    alt="Profile"
                    className="w-28 h-28 rounded-full object-contain border-4 border-green-400 mb-4"
                />

                {/* Profile Info */}
                {!editing ? (
                    <>
                        <p className="text-xl mb-1"><strong>Name:</strong> {name}</p>
                        <p className="text-xl mb-1"><strong>Weight:</strong> {weight} kg</p>
                        <p className="text-xl mb-4"><strong>Points:</strong> {points}</p>
                        <button
                            onClick={() => setEditing(true)}
                            className="mb-6 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                        >
                            Edit Profile
                        </button>
                    </>
                ) : (
                    <form onSubmit={handleProfileSubmit} className="w-full">
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-3 py-2 border rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Weight (kg)</label>
                            <input
                                type="number"
                                value={weight}
                                onChange={(e) => setWeight(Number(e.target.value))}
                                className="w-full px-3 py-2 border rounded-md"
                            />
                        </div>
                        <div className="flex gap-3">
                            <button
                                type="submit"
                                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                            >
                                Save
                            </button>
                            <button
                                type="button"
                                onClick={() => setEditing(false)}
                                className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 transition"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                )}

                {/* Food Preferences Form */}
                <form onSubmit={handleFoodSubmit} className="mt-6 w-full">
                    <label className="block mb-2 text-lg font-medium">Your Food Preferences</label>
                    <input
                        type="text"
                        value={foodPreference}
                        onChange={(e) => setFoodPreference(e.target.value)}
                        placeholder="e.g., vegetarian, high protein"
                        className="w-full px-4 py-2 border rounded-md mb-4"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
                    >
                        Submit
                    </button>
                    {submitted && (
                        <p className="mt-4 text-green-600 font-medium text-center">
                            Preference saved: "{foodPreference}"
                        </p>
                    )}
                </form>

                {/* Subscription Section */}
                <div className="mt-10 w-full border-t pt-6">
                    <h2 className="text-2xl font-semibold mb-2 text-center">🌟 Premium Subscription</h2>
                    <p className="text-sm text-gray-700 text-center mb-4">
                        Get access to advanced features:
                    </p>
                    <ul className="text-gray-800 text-sm list-disc list-inside mb-4">
                        <li>🔓 Extra customization options for your Avocado</li>
                        <li>📷 Upload a photo of your food — AI suggests healthy recipes</li>
                        <li>📊 Instant calorie, protein, and nutrient breakdown</li>
                        <li>🤖 Personalized AI coaching based on your goals and preferences</li>
                    </ul>

                    {subscribed ? (
                        <p className="text-green-600 font-bold text-center">You're subscribed! ✅</p>
                    ) : (
                        <a
                            href="https://buy.stripe.com/test_bIY5l364Cd853YI3cc"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-center w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
                        >
                            Subscribe Now - 10CAD/month
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
