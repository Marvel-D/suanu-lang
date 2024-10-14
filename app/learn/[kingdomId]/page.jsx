"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

export default function LearningDashboard({ params }) {
  const { kingdomId } = params;
  const [selectedLesson, setSelectedLesson] = useState(null);

  const lessons = [
    {
      id: 1,
      title: "Introduction to Yoruba",
      description:
        "Start your journey by learning the basic greetings and common phrases.",
      completed: true,
    },
    {
      id: 2,
      title: "Numbers & Counting",
      description: "Learn how to count and express numbers in Yoruba.",
      completed: false,
    },
    {
      id: 3,
      title: "Everyday Conversations",
      description: "Master daily conversations and improve your fluency.",
      completed: false,
    },
  ];

  const challenges = [
    { id: 1, title: "Complete 2 lessons", reward: "100 XP", completed: false },
    {
      id: 2,
      title: "Achieve a 3-day streak",
      reward: "50 XP",
      completed: true,
    },
  ];

  const pathname = usePathname();
  const router = useRouter();

  const HandleSelectedLesson = (id) => {
    setSelectedLesson(id);

    console.log(pathname);

    router.push(`${pathname}/lessons/${id}`);
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-amber-900 via-purple-500 to-slate-900 p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 md:max-w-5xl lg:max-w-full mx-auto">
        {/* Dashboard Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <h1 className="text-3xl font-bold text-gray-700 mb-4">
            Welcome to the {kingdomId} Kingdom!
          </h1>
          <p className="text-gray-600">
            Track your progress, complete lessons, and earn rewards as you learn{" "}
            {kingdomId}.
          </p>
        </motion.div>

        {/* User Progress & Stats */}
        <div className="flex justify-between mb-10">
          <div className="bg-blue-100 p-4 rounded-md shadow-md w-full md:w-1/3 text-center mr-4">
            <h2 className="text-xl font-semibold text-blue-600">
              Your Progress
            </h2>
            <p className="text-gray-600 mt-2">Level 1 - 15% Completed</p>
            <div className="h-4 bg-gray-300 rounded-full mt-3">
              <div
                className="h-4 bg-blue-500 rounded-full"
                style={{ width: "15%" }}
              ></div>
            </div>
          </div>

          <div className="bg-green-100 p-4 rounded-md shadow-md w-full md:w-1/3 text-center ml-4">
            <h2 className="text-xl font-semibold text-green-600">
              XP & Rewards
            </h2>
            <p className="text-gray-600 mt-2">350 XP Earned</p>
            <div className="flex justify-center mt-4">
              <Image
                width={1000}
                height={1000}
                src="/images/flag1.png"
                alt="Rewards"
                className="h-12 w-12"
              />
            </div>
          </div>

          <div className="bg-green-100 p-4 rounded-md shadow-md w-full md:w-1/3 text-center ml-4">
            <h2 className="text-xl font-semibold text-green-600">
              XP & Rewards
            </h2>
            <p className="text-gray-600 mt-2">350 XP Earned</p>
            <div className="flex justify-center mt-4">
              <img
                src="/images/medal.png"
                alt="Rewards"
                className="h-12 w-12"
              />
            </div>
          </div>
        </div>

        {/* Lessons Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Lessons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {lessons.map((lesson) => (
              <motion.div
                key={lesson.id}
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  HandleSelectedLesson(lesson.id);
                }}
                className={`bg-white p-6 rounded-lg shadow-md cursor-pointer transition-transform ${
                  lesson.completed ? "border border-green-500" : "border"
                }`}
              >
                <h3 className="text-xl font-semibold text-gray-700">
                  {lesson.title}
                </h3>
                <p className="text-gray-600 mt-2">{lesson.description}</p>
                <div className="mt-4">
                  {lesson.completed ? (
                    <span className="text-green-500 font-semibold">
                      Completed
                    </span>
                  ) : (
                    <span className="text-gray-400">Not Completed</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Challenges & Quests Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            Quests & Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challenges.map((challenge) => (
              <motion.div
                key={challenge.id}
                whileHover={{ scale: 1.05 }}
                className={`bg-white p-6 rounded-lg shadow-md transition-transform ${
                  challenge.completed ? "border border-blue-500" : "border"
                }`}
              >
                <h3 className="text-xl font-semibold text-gray-700">
                  {challenge.title}
                </h3>
                <p className="text-gray-600 mt-2">Reward: {challenge.reward}</p>
                <div className="mt-4">
                  {challenge.completed ? (
                    <span className="text-blue-500 font-semibold">
                      Completed
                    </span>
                  ) : (
                    <span className="text-gray-400">In Progress</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Button to Continue Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <button
            onClick={() => console.log("Start learning!")}
            className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Continue Learning
          </button>
        </motion.div>
      </div>
    </div>
  );
}
