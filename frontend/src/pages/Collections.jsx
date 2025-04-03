import FilterSidebar from "@/components/products/FilterSidebar";
import ProductGrid from "@/components/products/ProductGrid";
import SortOptions from "@/components/products/SortOptions";
import React, { useEffect, useState } from "react";

const Collections = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const fetchProducts = [
        {
          _id: 1,
          name: "Stylish Jacket",
          price: 120,
          image: [
            {
              url: "https://picsum.photos/500/500?random=1",
              altText: "Stylish Jacket 1",
            },
          ],
        },
        {
          _id: 2,
          name: "Stylish Jacket",
          price: 120,
          image: [
            {
              url: "https://picsum.photos/500/500?random=2",
              altText: "Stylish Jacket 1",
            },
          ],
        },
      ];
      setProducts(fetchProducts);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-64">
        <FilterSidebar />
      </div>

      <div className="flex-grow p-4">
        <h2 className="text-2xl uppercase mb-4">All Collection</h2>

        <SortOptions />
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default Collections;
