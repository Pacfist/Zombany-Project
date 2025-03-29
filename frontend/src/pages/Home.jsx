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

  const healthyRecipes = [
    {
      title: "Step 1: Mediterranean Quinoa Power Bowl",
      recipe:
        "1. Toast quinoa in a dry pan until fragrant, then cook with vegetable broth\n" +
        "2. Roast vegetables: \n   - Sweet potato cubes tossed in za'atar\n   - Broccoli with garlic and olive oil\n   - Spiced chickpeas with cumin and paprika\n" +
        "3. Make tahini dressing:\n   - Blend tahini, lemon juice, garlic, maple syrup\n   - Thin with water until desired consistency\n" +
        "4. Assemble bowl with:\n   - Quinoa base\n   - Roasted veggies\n   - Fresh herbs (mint, parsley)\n   - Pomegranate seeds\n   - Drizzle with dressing",
    },
    {
      title: "Step 2: Superfood Açaí Breakfast Bowl",
      recipe:
        "1. Blend until smooth:\n   - Frozen açaí packet\n   - Frozen mixed berries\n   - 1 frozen banana\n   - Almond milk\n   - 1 tbsp maca powder\n   - 1 scoop plant protein\n" +
        "2. Create toppings:\n   - Toast coconut flakes until golden\n   - Activate nuts by soaking overnight\n   - Make honey-granola clusters\n" +
        "3. Layer bowl with:\n   - Açaí base\n   - Sliced dragon fruit\n   - Activated nuts\n   - Toasted coconut\n   - Fresh berries",
    },
    {
      title: "Step 3: Pan-Seared Salmon with Ancient Grains",
      recipe:
        "1. Prepare salmon:\n   - Cure with salt & herbs for 30 mins\n   - Pat dry thoroughly\n   - Score skin in diamond pattern\n" +
        "2. Make ancient grain risotto:\n   - Toast farro and wild rice\n   - Simmer with mushroom stock\n   - Add white wine and herbs\n" +
        "3. Cook salmon:\n   - Sear skin-side down until crispy\n   - Flip and baste with herb butter\n   - Rest for 5 minutes",
    },
    {
      title: "Step 4: Spicy Korean Bibimbap",
      recipe:
        "1. Prepare rice and toppings:\n   - Cook short-grain rice\n   - Julienne carrots, cucumber, zucchini\n   - Sauté spinach with garlic\n   - Marinate mushrooms in soy sauce\n" +
        "2. Make gochujang sauce:\n   - Mix gochujang, sesame oil, rice vinegar\n   - Add honey and minced garlic\n" +
        "3. Cook protein:\n   - Marinate tofu in Korean BBQ sauce\n   - Pan-fry until crispy\n" +
        "4. Assemble:\n   - Hot stone bowl with rice base\n   - Arrange vegetables in sections\n   - Top with fried egg",
    },
    {
      title: "Step 5: Raw Vegan Sushi Rolls",
      recipe:
        "1. Make cauliflower rice:\n   - Process cauliflower until rice-like\n   - Season with rice vinegar and salt\n" +
        "2. Prepare vegetables:\n   - Julienne cucumber, carrots, bell peppers\n   - Slice avocado thinly\n   - Sprout microgreens\n" +
        "3. Make cashew 'cream cheese':\n   - Blend soaked cashews\n   - Add nutritional yeast, lemon juice\n" +
        "4. Roll using nori sheets:\n   - Layer ingredients carefully\n   - Roll tightly using bamboo mat",
    },
    {
      title: "Step 6: Ancient Grain Buddha Bowl",
      recipe:
        "1. Cook ancient grains:\n   - Mix of kamut, spelt, and einkorn\n   - Toast grains before cooking\n   - Simmer in vegetable broth\n" +
        "2. Roast root vegetables:\n   - Purple sweet potato\n   - Golden beets\n   - Watermelon radish\n" +
        "3. Make miso-tahini sauce:\n   - Blend white miso\n   - Add tahini and ginger\n   - Thin with rice vinegar",
    },
    {
      title: "Step 7: Fermented Probiotic Bowl",
      recipe:
        "1. Prepare fermented items:\n   - Homemade kimchi\n   - Cultured vegetables\n   - Kombucha-pickled onions\n" +
        "2. Cook base ingredients:\n   - Black forbidden rice\n   - Tempeh marinated in tamari\n   - Steamed kale with garlic\n" +
        "3. Make probiotic sauce:\n   - Blend kefir or coconut yogurt\n   - Add herbs and spices\n   - Mix in miso paste",
    },
    {
      title: "Step 8: Living Garden Salad",
      recipe:
        "1. Sprout and grow:\n   - Microgreens (radish, sunflower)\n   - Sprouted lentils and mung beans\n   - Living wheat grass\n" +
        "2. Make living dressing:\n   - Cold-pressed oils\n   - Fresh herbs\n   - Raw apple cider vinegar\n" +
        "3. Assemble:\n   - Layer microgreens\n   - Add edible flowers\n   - Garnish with sprouts\n" +
        "4. Finish with:\n   - Activated seeds\n   - Bee pollen\n   - Dried superfood powders",
    },
  ];

  const handleStepClick = (isCrown, stepIndex) => {
    if (isCrown) {
      setStopAvocado(true);
      return;
    }

    setModalContent(
      `${healthyRecipes[stepIndex].title}\n\n${healthyRecipes[stepIndex].recipe}`
    );
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
    <section className="home  z-1 ">
      <WheatCounter visitedSteps={visitedSteps} />
      <Module
        onStepClick={handleStepClick}
        length={8}
        onVisitedChange={handleVisitedChange}
      />
      <Modal
        stepStatus={isStepActive}
        onClose={handleCloseModal}
        content={<div>{modalContent}</div>}
      />
      <Avocado currentStep={currentStep} stopAtCrown={stopAvocado} />
    </section>
  );
};

export default Home;
