import { Link } from "react-router-dom";
import heroImage from "../assets/images/Cloud Storage Photo.jpg";


function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-10">
      <div className="max-w-2xl">
        <h1 className="text-6xl font-bold leading-tight">
          Store Your Files
          <span className="text-blue-600"> Securely</span>
        </h1>

        <p className="mt-6 text-gray-600 text-lg">
          CloudVault is your personal cloud storage platform where you can
          upload, organize and access your files anytime, anywhere.
        </p>

        <div className="mt-8 flex gap-4">
          <Link to="/register" className="bg-black text-white px-6 py-3 rounded-lg">
            Get Started
          </Link>

          <Link
            to="/login"
            className="border border-black text-blue-600 px-6 py-3 rounded-lg"
          >
            Login
          </Link>
        </div>
      </div>

      <div className="hidden md:flex justify-center items-center w-1/2">
       <img src={heroImage} alt="Cloud Storage" className="w-full max-w-md" />
      </div>
    </section>
  );
}

export default Hero;