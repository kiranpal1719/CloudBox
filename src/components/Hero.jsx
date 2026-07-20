import { Link } from "react-router-dom";
import heroImage from "../assets/images/Cloud storage photo.jpg";

function Hero() {
  return (
    <section className="min-h-screen bg-white flex flex-col-reverse lg:flex-row items-center justify-center px-6 sm:px-10 lg:px-16 py-10 gap-10">

      {/* Left Section */}

      <div className="w-full lg:w-1/2 text-center lg:text-left">

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">

          Store Your Files

          <span className="text-blue-600">
            {" "}Securely
          </span>

        </h1>

        <p className="mt-6 text-gray-600 text-base sm:text-lg lg:text-xl">

          CloudVault is your personal cloud storage platform where you can
          upload, organize and access your files anytime, anywhere.

        </p>

        {/* Buttons */}

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

      <div className="w-full lg:w-1/2 flex justify-center">

        <img
          src={heroImage}
          alt="Cloud Storage"
          className="w-full max-w-xs sm:max-w-md lg:max-w-lg"
        />

      </div>

    </section>
  );
}

export default Hero;