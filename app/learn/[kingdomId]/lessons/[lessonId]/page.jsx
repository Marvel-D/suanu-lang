"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
// import { useSupabaseClient } from "@supabase/auth-helpers-react";

export default function FirstLesson({ params }) {
  const { kingdomId, lessonId } = params;
  const [currentSection, setCurrentSection] = useState(0);
  const router = useRouter();
  //   const supabase = useSupabaseClient();

  const sections = [
    {
      id: 1,
      title: "Greetings in the Kingdom",
      description:
        "Meet the villagers! Learn how to greet others in the Kingdom of Yoruba.",
      type: "dialogue",
      content: [
        { phrase: "Bawo ni?", translation: "How are you?" },
        { phrase: "E kaaro!", translation: "Good morning!" },
      ],
      xp: 50,
    },
    {
      id: 2,
      title: "Basic Vocabulary",
      description: "Learn the basic words to start a conversation.",
      type: "vocabulary",
      content: [
        { word: "Oko", translation: "Car" },
        { word: "Ile", translation: "House" },
      ],
      xp: 50,
    },
    {
      id: 3,
      title: "Test Your Knowledge",
      description: "Match the words with their correct translations.",
      type: "quiz",
      content: [
        {
          question: "What is the Yoruba word for 'House'?",
          options: ["Ile", "Oko"],
          answer: "Ile",
        },
      ],
      xp: 100,
    },
  ];

  const totalXP = sections.reduce((acc, section) => acc + section.xp, 0);

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    } else {
      router.push(`/learn/${kingdomId}/lessons/${lessonId}/summary`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
        {/* Story and Lesson Introduction */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-700 mb-4">
            {sections[currentSection].title}
          </h1>
          <p className="text-gray-600">
            {sections[currentSection].description}
          </p>
        </motion.div>

        {/* Lesson Content */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          {sections[currentSection].type === "dialogue" && (
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Dialogue
              </h2>
              <ul>
                {sections[currentSection].content.map((item, idx) => (
                  <li key={idx} className="text-lg text-gray-700 mb-2">
                    <span className="font-bold">{item.phrase}</span> -{" "}
                    {item.translation}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {sections[currentSection].type === "vocabulary" && (
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Vocabulary
              </h2>
              <ul>
                {sections[currentSection].content.map((item, idx) => (
                  <li key={idx} className="text-lg text-gray-700 mb-2">
                    <span className="font-bold">{item.word}</span> -{" "}
                    {item.translation}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {sections[currentSection].type === "quiz" && (
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Quiz
              </h2>
              {sections[currentSection].content.map((quiz, idx) => (
                <div key={idx} className="mb-6">
                  <p className="text-lg text-gray-700 mb-4">{quiz.question}</p>
                  <div className="flex gap-4">
                    {quiz.options.map((option, index) => (
                      <button
                        key={index}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Continue/Next Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <button
            onClick={nextSection}
            className="px-8 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-200"
          >
            {currentSection < sections.length - 1
              ? "Next Section"
              : "Finish Lesson"}
          </button>
        </motion.div>
      </div>
    </div>
  );
}
