import { GiftIcon, Heart, HeartIcon, Rose } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [position, setPosition] = useState({ top: 50, left: 50 });
  const [showPopup, setShowPopup] = useState(false);

  const moveButton = () => {
    const container = document.getElementById("move-container");
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const btnWidth = 120;
    const btnHeight = 40;

    const randomX = Math.floor(Math.random() * (rect.width - btnWidth));
    const randomY = Math.floor(Math.random() * (rect.height - btnHeight));

    setPosition({ top: randomY, left: randomX });
  };

  return (
    <div className="bg-pink-100 min-h-screen relative overflow-hidden">
      {/* Floating Hearts Background (z-0 behind everything) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <span
            key={i}
            className="absolute text-pink-400 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${6 + Math.random() * 6}s`,
              fontSize: `${20 + Math.random() * 30}px`,
            }}
          >
            ❤️
          </span>
        ))}
      </div>

      {/* Hero Section (put above with z-10) */}
      <div className="relative z-10 h-[635px] bg-[url('./assets/Tulips.png')] bg-cover bg-center opacity-90 flex flex-col justify-center items-center px-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="font-bold text-5xl md:text-6xl text-black"
        >
          Happy 21st Birthday,
          <span className="text-pink-600"> My First and Last Love</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-black font-semibold text-2xl p-6 max-w-2xl"
        >
          Today marks not just your 21st year, but also my chance to apologize
          sincerely
        </motion.p>
      </div>

      {/* Sections (they inherit z-10 because they’re after bg hearts) */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="m-5 relative z-10"
      >
        <div className="rounded-lg bg-pink-200 text-center p-6 shadow-md">
          <GiftIcon className="h-12 w-12 text-pink-700 mx-auto animate-bounce" />
          <h2 className="text-4xl font-bold text-black opacity-80 pb-5 pt-5">
            Twenty-One Years of You
          </h2>
          <p className="px-5 text-lg text-gray-700">
            Today you turn 21, and I can't help but think about how grateful I
            am to be part of your journey. You've grown into such an incredible
            woman – strong, beautiful, kind, and absolutely amazing in every
            way.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="m-5 relative z-10"
      >
        <div className="rounded-lg bg-pink-200 text-center p-6 shadow-md">
          <HeartIcon className="h-12 w-12 text-pink-700 mx-auto animate-pulse" />
          <h2 className="text-4xl font-bold text-black opacity-80 pb-5 pt-5">
            I'm Sorry, My Baby
          </h2>
          <p className="px-5 text-lg text-gray-700">
            I know I hurt you, and that's the last thing I ever wanted to do.
            You're everything to me, and seeing you upset because of something I
            did breaks my heart more than you could ever imagine.
          </p>
          <p className="px-5 text-lg text-gray-700">
            Thank you for the second chance, and I'll spend my whole life
            proving that I've changed.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="m-5 relative z-10"
      >
        <div className="rounded-lg bg-pink-200 text-center p-6 shadow-md">
          <h2 className="text-4xl font-bold text-black opacity-80 pb-5 pt-5 flex justify-center items-center gap-2">
            Happy 21st Birthday, My Kiki{" "}
            <Rose className="h-12 w-12 text-pink-600 animate-spin-slow" />
          </h2>
          <p className="px-5 text-lg text-gray-700">
            I hope this new year of your life is filled with everything you've
            dreamed of. I hope I can be part of making those dreams come true.
            You deserve all the happiness in the world, and I want to spend my
            life trying to give that to you.
          </p>
          <p className="px-5 text-lg text-gray-700 flex justify-center items-center gap-2">
            I love you more than I could ever express in words <Heart />
          </p>
        </div>
      </motion.div>

      {/* Fun Button Section */}

      <div className="text-center mt-15">
        <p className="text-4xl font-bold opacity-80">
          Are you still mad at me????
        </p>
        <div
          id="move-container"
          className="relative m-5 mt-10 h-[300px] rounded-lg shadow-md bg-pink-400 overflow-hidden flex items-center justify-center"
        >
          {/* Yes Button (moves) */}
          <motion.button
            onClick={moveButton}
            animate={{ top: position.top, left: position.left }}
            transition={{ type: "spring", stiffness: 100 }}
            className="absolute bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full shadow-lg"
            style={{ top: position.top, left: position.left }}
          >
            Yes 😡
          </motion.button>

          {/* No Button (stays) */}
          <button
            onClick={() => setShowPopup(true)}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg"
          >
            No ❤️
          </button>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-md">
            <h2 className="text-3xl font-bold text-pink-600 mb-4">Yaaay! 🎉</h2>
            <p className="text-lg text-gray-700 mb-6">
              I knew you couldn’t stay mad at me ❤️ <br />I love you forever and
              always!
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full"
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default App;
