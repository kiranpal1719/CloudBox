import { Link } from "react-router-dom";
import heroImage from "../assets/images/Files photo storage.png";
import { motion } from "framer-motion";
import {
  FaCloud,
  FaFileAlt,
  FaLock,
  FaDatabase,
} from "react-icons/fa";

function Hero() {
  const firstLine = "Store Your Files";
  const secondLine = "Securely";

  return (
    <section className="relative overflow-hidden min-h-screen bg-white flex flex-col-reverse lg:flex-row items-center justify-center px-6 sm:px-10 lg:px-16 py-10 gap-10">

      {/* Floating Background Icons */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <motion.div
          className="absolute top-8 left-4 sm:left-12 text-blue-300 opacity-10"
          animate={{
            y: [-25, 25, -25],
            x: [0, 15, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaCloud className="text-5xl sm:text-6xl lg:text-8xl" />
        </motion.div>

        <motion.div
          className="absolute top-24 right-4 sm:right-16 text-blue-400 opacity-10"
          animate={{
            y: [20, -20, 20],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaFileAlt className="text-4xl sm:text-5xl lg:text-7xl" />
        </motion.div>

        <motion.div
          className="absolute bottom-24 left-6 sm:left-24 text-blue-300 opacity-10"
          animate={{
            y: [-20, 20, -20],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaLock className="text-4xl sm:text-5xl lg:text-6xl" />
        </motion.div>

        <motion.div
          className="absolute bottom-10 right-6 sm:right-24 text-blue-400 opacity-10"
          animate={{
            y: [20, -20, 20],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaDatabase className="text-5xl sm:text-6xl lg:text-8xl" />
        </motion.div>

      </div>

      {/* Left Section */}

      <div className="relative z-10 w-full lg:w-1/2 text-center lg:text-left">

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-center lg:text-left">

          <div className="block">
            {firstLine.split("").map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                initial={{
                  opacity: 0,
                  filter: "blur(10px)",
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  filter: "blur(0px)",
                  y: 0,
                }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>

          <div className="block text-blue-600 mt-2">
            {secondLine.split("").map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                initial={{
                  opacity: 0,
                  filter: "blur(10px)",
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  filter: "blur(0px)",
                  y: 0,
                }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{
                  duration: 0.4,
                  delay: 0.8 + index * 0.05,
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>

        </h1>

        <p className="mt-6 text-gray-600 text-base sm:text-lg lg:text-xl">
          CloudVault is your personal cloud storage platform where you can
          upload, organize and access your files anytime, anywhere.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">

          <Link
            to="/register"
            className="bg-black hover:bg-gray-800 transition text-white px-8 py-3 rounded-xl text-center"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="border-2 border-black text-black hover:bg-black hover:text-white transition px-8 py-3 rounded-xl text-center"
          >
            Login
          </Link>

        </div>

      </div>

      {/* Right Section */}

      <div className="relative z-10 w-full lg:w-1/2 flex justify-center">

        <motion.img
          src={heroImage}
          alt="Files Storage"
          className="w-full max-w-xs sm:max-w-md lg:max-w-lg"
          animate={{
            y: [-8, 8, -8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

      </div>

    </section>
  );
}

export default Hero;