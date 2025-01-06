import React from "react";
import { motion } from "framer-motion";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ img, title, price, rating }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-4"
    >
      <div className="relative group overflow-hidden rounded-xl">
        <img
          src={img}
          alt={title}
          className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-4 left-4 right-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-[#AB6B2E] text-white py-2 rounded-full flex items-center justify-center gap-2 text-sm"
            >
              <FaShoppingCart />
              Add to Cart
            </motion.button>
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <h2 className="font-semibold text-lg text-gray-800">{title}</h2>
        <div className="flex items-center gap-1">
          {[...Array(4)].map((_, i) => (
            <BsStarFill key={i} className="text-[#AB6B2E] text-sm" />
          ))}
          <BsStarHalf className="text-[#AB6B2E] text-sm" />
          <span className="text-sm text-gray-500 ml-1">{rating}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg text-[#AB6B2E]">${price}</span>
          <span className="text-xs text-gray-500">Free Shipping</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
