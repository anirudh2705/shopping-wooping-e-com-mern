import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
    setIsOpen(false);
  };
  return (
    <div>
      {isOpen ? (
        <form
          onSubmit={handleSubmit}
          className="relative flex items-center justify-center  "
        >
          <div className=" relative ">
            <input
              type="text"
              placeholder="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="text- bg-gray-100 px-4 py-0.5 pl-3 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700 "
            />
            <button
              type="submit"
              className=" absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-400"
            >
              <IoSearch />
            </button>
          </div>
        </form>
      ) : (
        <button onClick={handleSearchToggle}>
          <IoSearch className="h-6 w-6 " />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
