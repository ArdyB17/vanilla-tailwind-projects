import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { FaCoffee, FaStar } from "react-icons/fa";
import aboutImg from "../assets/img/about.jpg";

const About = () => {
  return (
    <section className="relative min-h-screen py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFDCAB] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-[#AB6B2E] mb-4">
            About Us
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our passion for coffee and commitment to quality
          </p>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <Suspense fallback={<div>Loading...</div>}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={aboutImg}
                  alt="Coffee Shop"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.src = 'fallback-image.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
            </Suspense>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              What Makes Our Coffee Special?
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="p-2 bg-[#AB6B2E] rounded-full text-white">
                  <FaCoffee className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-xl text-gray-800">Premium Beans</h3>
                  <p className="text-gray-600">Sourced from sustainable farms worldwide</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="p-2 bg-[#AB6B2E] rounded-full text-white">
                  <FaStar className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-xl text-gray-800">Expert Baristas</h3>
                  <p className="text-gray-600">Crafting perfect coffee with passion</p>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#AB6B2E] text-white rounded-full hover:bg-[#8B571E] transition-colors"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;