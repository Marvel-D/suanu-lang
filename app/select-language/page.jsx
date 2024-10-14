"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

const kingdoms = [
  {
    id: 1,
    name: "Yoruba Kingdom",
    description: "Explore the rich culture and language of the Yoruba people.",
    image: "/images/flag1.png",
  },
  {
    id: 2,
    name: "Swahili Kingdom",
    description:
      "Learn Swahili, the most spoken African language across East Africa.",
    image: "/images/flag1.png",
  },
  {
    id: 3,
    name: "Zulu Kingdom",
    description:
      "Dive into the history and language of the Zulu people in South Africa.",
    image: "/images/flag1.png",
  },
  {
    id: 4,
    name: "Amharic Kingdom",
    description:
      "Unlock the secrets of the ancient Amharic language of Ethiopia.",
    image: "/images/flag1.png",
  },
];

export default function ChooseLanguagePage() {
  const [selectedKingdom, setSelectedKingdom] = useState(null);
  const router = useRouter();

  const handleSelect = (kingdomId) => {
    setSelectedKingdom(kingdomId);
  };

  const handleConfirm = () => {
    if (selectedKingdom !== null) {
      // Navigate to the next page after selecting the language
      router.push(`/learn/${selectedKingdom}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      <h1 className="text-3xl font-bold text-white mb-8">
        Choose Your Kingdom
      </h1>

      {/* Kingdom Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl">
        {kingdoms.map((kingdom) => (
          <motion.div
            key={kingdom.id}
            onClick={() => handleSelect(kingdom.id)}
            whileHover={{ scale: 1.05 }}
            className={`bg-white p-4 rounded-lg shadow-lg cursor-pointer transition-transform duration-200 ${
              selectedKingdom === kingdom.id
                ? "border-4 border-blue-500"
                : "border"
            }`}
          >
            <Image
              src={kingdom.image}
              alt={kingdom.name}
              width={1000}
              height={1000}
              className="h-40 w-full object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-700">
              {kingdom.name}
            </h2>
            <p className="text-gray-500 mt-2">{kingdom.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Confirm Button */}
      <button
        onClick={handleConfirm}
        disabled={selectedKingdom === null}
        className={`mt-8 px-6 py-2 text-white text-lg rounded-lg ${
          selectedKingdom !== null
            ? "bg-blue-500 hover:bg-blue-600"
            : "bg-gray-400 cursor-not-allowed"
        } transition duration-200`}
      >
        Start Learning
      </button>
    </div>
  );
}
