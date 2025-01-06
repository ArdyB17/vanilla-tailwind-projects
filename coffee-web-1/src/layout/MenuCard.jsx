/**
 * @file MenuCard.jsx
 * @description Optimized menu card component with smaller size
 * @version 2.1.0
 */

import React, { memo, useState } from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

const MenuCard = memo(({ img, title, description, price, isHot, isCold }) => {
  const [temp, setTemp] = useState(isHot ? "hot" : "cold");
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-t-lg aspect-[4/3]">
        <img
          className="w-full h-full object-cover"
          src={img}
          alt={title}
          loading="lazy"
          decoding="async"
        />
        {/* Description Overlay */}
        <div className=" absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
          <p className="text-white text-xs px-3 text-center max-w-[90%]">
            {description}
          </p>
        </div>
        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className={`absolute top-2 right-2 p-1 rounded-full ${
            isFavorite ? "bg-red-500" : "bg-white"
          } shadow-sm`}
        >
          <FaHeart
            className={`text-[10px] ${
              isFavorite ? "text-white" : "text-red-500"
            }`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-2.5">
        {/* Title and Price */}
        <div className="flex justify-between items-start gap-2 mb-2">
          <h3 className="font-medium text-sm text-gray-800 line-clamp-1">
            {title}
          </h3>
          <span className="font-medium text-sm text-[#AB6B2E] whitespace-nowrap">
            ${price.toFixed(2)}
          </span>
        </div>

        {/* Temperature and Cart Controls */}
        <div className="flex items-center justify-between gap-1.5">
          <div className="flex gap-1">
            {isHot && (
              <button
                onClick={() => setTemp("hot")}
                className={`px-2 py-0.5 text-[10px] font-medium rounded-full ${
                  temp === "hot"
                    ? "bg-[#AB6B2E] text-white"
                    : "bg-[#FFDCAB] text-[#AB6B2E]"
                }`}
              >
                Hot
              </button>
            )}
            {isCold && (
              <button
                onClick={() => setTemp("cold")}
                className={`px-2 py-0.5 text-[10px] font-medium rounded-full ${
                  temp === "cold"
                    ? "bg-[#AB6B2E] text-white"
                    : "bg-[#FFDCAB] text-[#AB6B2E]"
                }`}
              >
                Cold
              </button>
            )}
          </div>
          <button className="flex items-center gap-1 bg-[#AB6B2E] text-white px-2 py-0.5 rounded-full hover:bg-[#8B571E] transition-colors">
            <FaShoppingCart className="text-[10px]" />
            <span className="text-[10px]">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
});

MenuCard.displayName = "MenuCard";

export default MenuCard;
