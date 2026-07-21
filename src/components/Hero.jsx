import { Link } from "react-router-dom";
import heroImage from "../assets/images/Files photo storage.png";
import { motion } from "framer-motion";

function Hero() {
  const firstLine = "Store Your Files";
  const secondLine = "Securely";

  return (
    <section className="
      relative
      overflow-hidden
      min-h-screen
      bg-white
      flex
      flex-col-reverse
      lg:flex-row
      items-center
      justify-center
      px-6
      sm:px-10
      lg:px-16
      py-10
      gap-10
    "
    >
      {/* Left Section */}

      <div
        className="
        relative
        z-10
        w-full
        lg:w-1/2
        text-center
        lg:text-left
      "
      >
        <h1
          className="
          text-4xl
          sm:text-5xl
          lg:text-6xl
          font-bold
          leading-tight
        "
        >
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
                viewport={{
                  once: false,
                  amount: 0.6,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>

          <div
            className="
            block
            text-blue-600
            mt-2
          "
          >
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
                viewport={{
                  once: false,
                  amount: 0.6,
                }}
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

        <p
          className="
          mt-6
          text-gray-600
          text-base
          sm:text-lg
          lg:text-xl
        "
        >
          Efficiently manage your files with secure cloud storage, providing
          fast access, reliable storage, and seamless file management.
        </p>

        <div
          className="
          mt-8
          flex
          flex-col
          sm:flex-row
          justify-center
          lg:justify-start
          gap-4
        "
        >
          <Link
            to="/register"
            className="
              bg-black
              hover:bg-gray-800
              transition
              text-white
              px-8
              py-3
              rounded-xl
              text-center
            "
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="
              border-2
              border-black
              text-black
              hover:bg-black
              hover:text-white
              transition
              px-8
              py-3
              rounded-xl
              text-center
            "
          >
            Login
          </Link>
        </div>
      </div>

      {/* Right Section */}

      <div
        className="
        relative
        z-10
        w-full
        lg:w-1/2
        flex
        justify-center
      "
      >
        <img
          src={heroImage}
          alt="Files Storage"
          className="
            w-full
            max-w-xs
            sm:max-w-md
            lg:max-w-lg
          "
        />
      </div>
    </section>
  );
}

export default Hero;
