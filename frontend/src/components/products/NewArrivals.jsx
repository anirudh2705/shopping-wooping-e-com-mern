import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router";

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const newArrivals = [
    {
      _id: 1,
      name: "Product 1",
      price: 100,
      image: [
        { url: "https://picsum.photos/500/500?random=1", altText: "Stylish" },
      ],
    },
    {
      _id: 1,
      name: "Product 1",
      price: 100,
      image: [
        { url: "https://picsum.photos/500/500?random=2", altText: "Stylish" },
      ],
    },
    {
      _id: 1,
      name: "Product 1",
      price: 100,
      image: [
        { url: "https://picsum.photos/500/500?random=3", altText: "Stylish" },
      ],
    },
    {
      _id: 1,
      name: "Product 1",
      price: 100,
      image: [
        { url: "https://picsum.photos/500/500?random=4", altText: "Stylish" },
      ],
    },
    {
      _id: 1,
      name: "Product 1",
      price: 100,
      image: [
        { url: "https://picsum.photos/500/500?random=5", altText: "Stylish" },
      ],
    },
    {
      _id: 1,
      name: "Product 1",
      price: 100,
      image: [
        { url: "https://picsum.photos/500/500?random=6", altText: "Stylish" },
      ],
    },
    {
      _id: 1,
      name: "Product 1",
      price: 100,
      image: [
        { url: "https://picsum.photos/500/500?random=7", altText: "Stylish" },
      ],
    },
    {
      _id: 1,
      name: "Product 1",
      price: 100,
      image: [
        { url: "https://picsum.photos/500/500?random=8", altText: "Stylish" },
      ],
    },
    {
      _id: 1,
      name: "Product 1",
      price: 100,
      image: [
        { url: "https://picsum.photos/500/500?random=9", altText: "Stylish" },
      ],
    },
    {
      _id: 1,
      name: "Product 1",
      price: 100,
      image: [
        { url: "https://picsum.photos/500/500?random=10", altText: "Stylish" },
      ],
    },
    {
      _id: 1,
      name: "Product 1",
      price: 100,
      image: [
        { url: "https://picsum.photos/500/500?random=11", altText: "Stylish" },
      ],
    },
    {
      _id: 1,
      name: "Product 1",
      price: 100,
      image: [
        { url: "https://picsum.photos/500/500?random=12", altText: "Stylish" },
      ],
    },
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behaviour: "smooth" });
  };

  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (container) {
      const leftScroll = container.scrollLeft;
      const rightScrollable =
        container.scrollWidth > leftScroll + container.clientWidth;

      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(rightScrollable);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
    }
  });

  return (
    <section className="py-16 px-4 lg:px-20">
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest styles off the runway, freshly added to keep your
          wardrobe on the cutting edge of fashion.{" "}
        </p>
        <div className="absolute right-0 bottom-[-30px] space-x-1.5">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded-full border ${
              canScrollLeft
                ? "bg-white text-black"
                : "bg-gray-200 text-gray-400 "
            }`}
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={() => scroll("right")}
            className={`p-2 rounded-full border ${
              canScrollRight
                ? "bg-white text-black"
                : "bg-gray-200 text-gray-400 "
            }`}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className={`container mx-auto overflow-x-scroll flex space-x-6 relative ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        } `}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUpOrLeave}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUpOrLeave}
      >
        {newArrivals.map((product) => (
          <div
            key={product._id}
            className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative"
          >
            <img
              src={product.image[0]?.url}
              alt={product.image[0]?.altText || product.name}
              className="w-full h-[500px] object-cover rounded-lg border-2"
              draggable="false"
            />
            <div className=" absolute bottom-0 left-0 right-0 backdrop-blur-md text-white p-4 rounded-b-lg">
              <Link to={`/products/${product._id}`} className="block">
                <h4 className="font-medium">{product.name}</h4>
                <p className="mt-1">${product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
