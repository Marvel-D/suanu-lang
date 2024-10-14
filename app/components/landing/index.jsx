"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="w-full py-6 px-4 bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Suanu Lang</div>
        <div>
          <a href="#features" className="mx-4">
            Features
          </a>
          <a href="#how-it-works" className="mx-4">
            How It Works
          </a>
          <a href="#languages" className="mx-4">
            Languages
          </a>
        </div>
        <div>
          <Link
            href="/login"
            className="mx-4 bg-green-500 px-4 py-2 rounded-md"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="mx-4 bg-blue-500 px-4 py-2 rounded-md"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};
const HeroSection = () => {
  return (
    <div className="bg-hero-pattern bg-cover h-screen text-amber-400 flex flex-col items-center justify-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        Master African Languages While Exploring Ancient Kingdoms!
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xl md:text-2xl mb-8"
      >
        A fun, immersive journey to fluency in African languages.
      </motion.p>
      <motion.a
        href="/signup"
        className="bg-green-500 text-lg px-8 py-3 rounded-md font-semibold"
        whileHover={{ scale: 1.05 }}
      >
        Start Your Adventure
      </motion.a>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      title: "Immersive Storyline",
      description: "Learn through an adventure across African kingdoms.",
      icon: "🌍",
    },
    {
      title: "Interactive Quests",
      description: "Solve puzzles and complete language-based challenges.",
      icon: "🧩",
    },
    {
      title: "Cultural Insights",
      description: "Understand proverbs, customs, and traditions.",
      icon: "📚",
    },
    {
      title: "Spoken Practice",
      description: "Practice your speaking with real-time voice recognition.",
      icon: "🎤",
    },
  ];

  return (
    <div id="features" className="py-16 bg-gray-100 px-5">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white shadow-md p-6 rounded-lg">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    { step: "Sign Up", description: "Create your free account." },
    {
      step: "Choose Your Language",
      description: "Pick the language you want to learn.",
    },
    {
      step: "Begin Your Journey",
      description: "Start learning through interactive stories and quests.",
    },
    { step: "Earn Rewards", description: "Unlock achievements and level up!" },
  ];

  return (
    <div id="how-it-works" className="py-16 bg-white px-5">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{step.step}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Languages = () => {
  const languages = [
    { name: "Yoruba", region: "West Africa" },
    { name: "Zulu", region: "Southern Africa" },
    { name: "Swahili", region: "East Africa" },
    { name: "Amharic", region: "Ethiopia" },
  ];

  return (
    <div id="languages" className="py-16 bg-gray-200 px-5">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Available Languages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {languages.map((lang, idx) => (
            <div key={idx} className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{lang.name}</h3>
              <p>{lang.region}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Navbar, HeroSection, Features, HowItWorks, Languages };
