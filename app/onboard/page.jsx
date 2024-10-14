"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // To navigate between pages
import Image from "next/image";

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();

  // Array of onboarding steps
  const steps = [
    {
      title: "Welcome to Your Language Adventure!",
      description:
        "Explore the rich diversity of African languages through an interactive, gamified experience. Learn while having fun!",
      image: "/images/boy.png",
    },
    {
      title: "Gamified Learning",
      description:
        "Complete quests, earn rewards, and level up as you master new languages. Our platform makes language learning fun and engaging.",
      image: "/images/man.png",
    },
    {
      title: "Choose Your Kingdom",
      description:
        "Start your journey by selecting a kingdom. Each kingdom represents a language and its cultural roots. Unlock them as you progress.",
      image: "/images/girl.png",
    },
  ];

  // Navigate to the next step
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      router.push("/select-language"); // After onboarding, navigate to the dashboard
    }
  };

  // Skip to dashboard
  const handleSkip = () => {
    router.push("/select-language");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-xl w-full">
        {/* Progress Bar */}
        <div className="mb-4">
          <div className="h-2 w-full bg-gray-300 rounded-full">
            <div
              className="h-2 bg-blue-500 rounded-full"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Onboarding Step Content */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            {/* Step Title */}
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
              {steps[currentStep].title}
            </h2>

            {/* Step Description */}
            <p className="text-gray-600 mb-6">
              {steps[currentStep].description}
            </p>

            {/* Step Image */}
            <div className="mb-6">
              <Image
                src={steps[currentStep].image}
                alt={steps[currentStep].title}
                width={1000}
                height={1000}
                className="mx-auto w-64"
              />
            </div>
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          {/* Skip Button */}
          <button
            onClick={handleSkip}
            className="text-gray-500 hover:text-gray-700 transition duration-200"
          >
            Skip
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            {currentStep < steps.length - 1 ? "Next" : "Finish"}
          </button>
        </div>
      </div>
    </div>
  );
}
