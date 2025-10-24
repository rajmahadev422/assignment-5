import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-center items-center">
        <h1 className="text-2xl font-semibold text-gray-800 tracking-wide">
          Photos
        </h1>
      </div>
    </header>
  );
};

export default Header;
