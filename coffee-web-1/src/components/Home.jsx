import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaCoffee, FaArrowRight } from "react-icons/fa";
import heroImage from "../assets/img/home.png";
import CountUp from "react-countup";

const Home = () => {
  // State for button hover animation
  const [isHovered, setIsHovered] = useState(false);

  const stats = [
    { number: 20, label: "Years Experience" },
    { number: 100, label: "Coffee Varieties" },
    { number: 500, label: "Happy Customers" },
  ];

  return (
    <section className="min-h-screen pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 text-center lg:text-left pt-8"
        >
          {/* Hero Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            Start Your Day With
            <span className="text-[#AB6B2E] block mt-2">Perfect Coffee</span>
          </h1>

          {/* Hero Description */}
          <p className="mt-6 text-gray-700 text-lg sm:text-xl max-w-lg mx-auto lg:mx-0">
            Boost your productivity and build your mood with a glass of coffee
            in the morning.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link to="menu" smooth={true} duration={500}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                className="w-full sm:w-auto px-8 py-3 bg-[#AB6B2E] text-white rounded-full hover:bg-[#8B571E] transition-colors flex items-center justify-center gap-2"
              >
                View Menu
                <motion.div animate={{ x: isHovered ? 5 : 0 }}>
                  <FaArrowRight />
                </motion.div>
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-3 bg-white text-[#AB6B2E] rounded-full hover:bg-[#FFDCAB] transition-colors flex items-center justify-center gap-2"
            >
              Order Now <FaCoffee />
            </motion.button>
          </div>

          {/* Stats Section */}
          <div className="mt-12 grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-[#AB6B2E]">
                  <CountUp end={stat.number} suffix="+" duration={2.5} />
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 relative"
        >
          {/* Hero Image */}
          <div className="max-w-lg mx-auto">
            <img
              src={heroImage}
              alt="Coffee Cup"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="hidden sm:block absolute top-10 right-10 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg"
          >
            <p className="text-sm font-semibold text-[#AB6B2E]">
              Premium Quality
            </p>
          </motion.div>
          <motion.div
            animate={{
              y: [0, 10, 0],
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              },
            }}
            className="hidden sm:block absolute bottom-10 left-10 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg"
          >
            <p className="text-sm font-semibold text-[#AB6B2E]">
              Fresh Coffee Beans
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
