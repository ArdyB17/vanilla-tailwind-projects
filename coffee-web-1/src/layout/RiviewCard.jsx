import React from "react";
import { motion } from "framer-motion";
import { FaQuoteRight } from "react-icons/fa";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

const RiviewCard = ({ image, name, rating, review }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
    >
      <div className="flex items-start gap-4">
        <img 
          src={image} 
          alt={name} 
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
          <div className="flex items-center gap-1 my-1">
            {Array.from({ length: Math.floor(rating) }).map((_, i) => (
              <BsStarFill key={i} className="text-[#AB6B2E] text-sm" />
            ))}
            {rating % 1 !== 0 && <BsStarHalf className="text-[#AB6B2E] text-sm" />}
          </div>
        </div>
        <FaQuoteRight className="text-[#AB6B2E] text-3xl opacity-20" />
      </div>
      
      <p className="mt-4 text-gray-600 leading-relaxed">{review}</p>
    </motion.div>
  );
};

export default RiviewCard;