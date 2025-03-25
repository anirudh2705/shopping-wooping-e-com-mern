import React from "react";
import Hero from "../components/layout/Hero";
import GenderCollectionSection from "../components/products/GenderCollectionSection";
import NewArrivals from "../components/products/NewArrivals";
import ProductDetails, {
  similarProducts,
} from "../components/products/ProductDetails";
import ProductGrid from "../components/products/ProductGrid";
import FeaturedCollection from "../components/products/FeaturedCollection";
import FeaturesSection from "../components/products/FeaturesSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />

      <h1 className="text-3xl text-center font-bold md-4">Best Seller</h1>
      <ProductDetails />

      <div className="container mx-auto">
        {" "}
        <h1 className="text-3xl text-center font-bold md-4">
          Top Wears for Women
        </h1>
        <ProductGrid products={similarProducts} />
      </div>
      <FeaturedCollection />
      <FeaturesSection />
    </div>
  );
};

export default Home;
