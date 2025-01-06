import React from "react";
import { motion } from "framer-motion";
import ReviewCard from "../layout/RiviewCard";
import img1 from "../assets/img/pic1.png";
import img2 from "../assets/img/pic2.png";
import img3 from "../assets/img/pic3.png";

const reviews = [
  {
    id: 1,
    name: "Olivia Ava",
    image: img1,
    rating: 4.5,
    review: "The coffee here is absolutely amazing! Perfect atmosphere for work or casual meetings."
  },
  {
    id: 2,
    name: "John Deo",
    image: img2,
    rating: 5,
    review: "Best cappuccino in town! The staff is super friendly and professional."
  },
  {
    id: 3,
    name: "Sofia Zoe",
    image: img3,
    rating: 4.8,
    review: "Love the ambiance and the quality of their coffee. Will definitely come back!"
  }
];

const Riview = () => {
  return (
    <section className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#FFDCAB]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-[#AB6B2E] mb-4">
            Customer Reviews
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            What our customers say about their experience with us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Riview;