
import React, { useState, useMemo } from "react";
import MenuCard from "../layout/MenuCard";

// Import images
import img1 from "../assets/img/menu1.jpg";
import img2 from "../assets/img/menu2.jpg";
import img3 from "../assets/img/menu3.jpg";
import img4 from "../assets/img/menu4.jpg";
import img5 from "../assets/img/menu5.jpg";
import img6 from "../assets/img/menu6.jpg";

const Menu = () => {
  // State for active category
  const [activeCategory, setActiveCategory] = useState("all");

  // Available categories
  const categories = ["all", "espresso", "milk", "special"];

  // Menu data
  const menuData = [
    {
      id: 1,
      title: "Espresso",
      description:
        "Pure coffee shot made by forcing hot water through finely-ground beans",
      price: 3.99,
      img: img1,
      isHot: true,
      isCold: false,
      category: "espresso",
    },
    {
      id: 2,
      title: "Cappuccino",
      description:
        "Classic Italian coffee with equal parts espresso, steamed milk, and foam",
      price: 4.99,
      img: img2,
      isHot: true,
      isCold: true,
      category: "milk",
    },
    {
      id: 3,
      title: "Iced Latte",
      description: "Smooth espresso with cold milk and subtle layer of foam",
      price: 4.49,
      img: img3,
      isHot: false,
      isCold: true,
      category: "milk",
    },
    {
      id: 4,
      title: "Americano",
      description: "Diluted espresso with hot water, similar to regular coffee",
      price: 3.49,
      img: img4,
      isHot: true,
      isCold: true,
      category: "espresso",
    },
    {
      id: 5,
      title: "Caramel Macchiato",
      description:
        "Vanilla-flavored drink marked with espresso and caramel drizzle",
      price: 5.49,
      img: img5,
      isHot: true,
      isCold: true,
      category: "special",
    },
    {
      id: 6,
      title: "Mocha Frappuccino",
      description:
        "Blended coffee with rich mocha and topped with whipped cream",
      price: 5.99,
      img: img6,
      isHot: false,
      isCold: true,
      category: "special",
    },
  ];

  // Memoize filtered menu items
  const filteredMenu = useMemo(
    () =>
      activeCategory === "all"
        ? menuData
        : menuData.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  return (
    <section className="min-h-screen py-12 bg-gradient-to-b from-[#FFDCAB] to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#AB6B2E] mb-4">
            Our Signature Menu
          </h1>
          <p className="text-gray-600 mb-8">
            Discover our carefully crafted coffee selections
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-1.5 rounded-full text-sm font-medium transition-colors
                  ${
                    activeCategory === category
                      ? "bg-[#AB6B2E] text-white"
                      : "bg-[#FFDCAB] text-[#AB6B2E] hover:bg-[#AB6B2E] hover:text-white"
                  }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {" "}
          {/* Added 4 columns, reduced gap */}
          {filteredMenu.map((item) => (
            <MenuCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
