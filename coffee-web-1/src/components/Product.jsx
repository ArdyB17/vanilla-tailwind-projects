import React, { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "../layout/ProductCard";
import img1 from "../assets/img/product1.jpg";
import img2 from "../assets/img/product2.jpg";
import img3 from "../assets/img/product3.jpg";

const Product = () => {
  const products = [
    {
      id: 1,
      img: img1,
      title: "Nespresso",
      price: 15.99,
      rating: 4.5,
      category: "machine",
    },
    {
      id: 2,
      img: img2,
      title: "AeroPress",
      price: 29.99,
      rating: 4.8,
      category: "brewer",
    },
    {
      id: 3,
      img: img3,
      title: "Chemex",
      price: 39.99,
      rating: 4.7,
      category: "brewer",
    },
  ];

  return (
    <section className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#FFDCAB]">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold text-center text-[#AB6B2E] mb-12"
        >
          Our Products
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
