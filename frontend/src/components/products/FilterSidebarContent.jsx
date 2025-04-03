import React, { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";

const FilterSidebarContent = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });

  const [priceRange, setPriceRange] = useState([0, 100]);

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);

    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 100,
    });
    setPriceRange([0, params.maxPrice || 100]);
  }, [searchParams]);

  const categories = ["Top Wear", "Bottom Wear"];
  const colors = [
    "Red",
    "Blue",
    "Black",
    "Green",
    "Yellow",
    "Gray",
    "White",
    "Pink",
    "Beige",
    "Navy",
  ];

  const sizes = ["s", "m", "l", "xl", "xxl"];

  const materials = [
    "Cotton",
    "Wool",
    "Denim",
    "Polyester",
    "Silk",
    "Linen",
    "Viscose",
    "Fleece",
  ];
  const brands = [
    "Urban Threads",
    "Modern Fit",
    "Street Style",
    "Beach Breeze",
    "Fashionista",
    "ChicStyle",
  ];

  const genders = ["Men", "Women"];

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    let newFilters = { ...filters };

    if (type === "checkbox") {
      if (checked) {
        newFilters[name] = [...(newFilters[name] || []), value];
      } else {
        newFilters[name] = newFilters[name].filter((item) => item !== value);
      }
    } else {
      newFilters[name] = value;
    }

    setFilters(newFilters);
    updateUrlParams(newFilters);
  };

  const updateUrlParams = (newFilters) => {
    const params = new URLSearchParams();
    Object.keys(newFilters).forEach((key) => {
      if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
        params.append(key, newFilters[key].join(","));
      } else if (newFilters[key]) {
        params.append(key, newFilters[key]);
      }
    });
    setSearchParams(params);
    navigate(`?${params.toString()}`);
  };

  const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    setPriceRange([0, newPrice]);
    const newFilters = { ...filters, minPrice: 0, maxPrice: newPrice };
    setFilters(filters);
    updateUrlParams(newFilters);
  };

  return (
    <div className="p-4">
      <div>
        <h3 className="font-medium text-xl text-gray-800 mb-4">Filter</h3>

        <div className="mb-6 flex flex-col justify-center">
          <label className="block text-gray-600 font-medium mb-2">
            Category
          </label>

          {categories.map((category) => (
            <div
              key={category}
              className="flex items-center space-x-2 space-y-1"
            >
              <input
                type="radio"
                name="category"
                value={category}
                id={category}
                className="text-blue-500 focus:ring-blue-400"
                onChange={handleFilterChange}
                checked={filters.category === category}
              />
              <Label htmlFor={category}>{category}</Label>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <label className="block text-gray-600 font-medium mb-2">Gender</label>

          {genders.map((gender) => (
            <div key={gender} className="flex items-center space-x-2 space-y-1">
              <input
                type="radio"
                name="gender"
                value={gender}
                id={gender}
                className="text-blue-500 focus:ring-blue-400"
                onChange={handleFilterChange}
                checked={filters.gender === gender}
              />
              <Label htmlFor={gender}>{gender}</Label>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <label className="block text-gray-600 font-medium mb-2">Color</label>
          <div className="flex flex-wrap gap-2">
            {colors.map((color) => (
              <Button
                name="color"
                key={color}
                value={color}
                className={`w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105 ${
                  filters.color === color ? "ring-4 ring-blue-500" : ""
                }`}
                style={{ backgroundColor: color.toLowerCase() }}
                onClick={handleFilterChange}
              />
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-600 font-medium mb-2">Size</label>
          <div className="space-y-2">
            {sizes.map((size) => (
              <div key={size} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="size"
                  value={size}
                  id={`size-${size}`}
                  onChange={handleFilterChange}
                  checked={filters.size.includes(size)}
                />
                <Label htmlFor={`size-${size}`}>{size}</Label>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-600 font-medium mb-2">
            Material
          </label>
          <div className="space-y-2">
            {materials.map((material) => (
              <div key={material} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="material"
                  value={material}
                  id={`material-${material}`}
                  onChange={handleFilterChange}
                  checked={filters.material.includes(material)}
                />
                <Label htmlFor={`material-${material}`}>{material}</Label>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-600 font-medium mb-2">Brands</label>
          <div className="space-y-2">
            {brands.map((brand) => (
              <div key={brand} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="brand"
                  value={brand}
                  id={`brand-${brand}`}
                  onChange={handleFilterChange}
                  checked={filters.brand.includes(brand)}
                />
                <Label htmlFor={`brand-${brand}`}>{brand}</Label>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-600 font-medium mb-2">
            Price Range
          </label>
          <input
            defaultValue={[50]}
            type="range"
            name="priceRange"
            min={0}
            max={100}
            onChange={handlePriceChange}
            value={priceRange[1]}
            className="w-full max-w-xs sm:max-w-full p-1 m-2 rounded-md bg-gray-200"
          />
          <div className="flex justify-between text-gray-600 mt-2">
            <span>0</span>
            <span>{priceRange[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebarContent;
