'use client';
import React, { useState } from "react";

function Card({ step, title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`
        w-full max-w-sm sm:max-w-md lg:max-w-7xl md:max-w-7xl
        mx-auto px-4 sm:px-6 py-4 rounded-4xl shadow-md mb-6
        transition-colors duration-300 border-b-3 border-r-3 border-l-3
        ${isOpen ? 'bg-lime-400' : 'bg-gray-200'}
      `}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-3xl sm:text-sm md:text-5xl text-black font-bold">{step}</div>
            <h2 className="text-base sm:text[8px] md:text-2xl font-semibold text-black">{title}</h2>
          </div>
          <button onClick={toggleDescription} aria-label="Toggle Description">
            <img
  className="w-6 h-6 transition-transform duration-200"
  src={isOpen ? './minus.svg' : './plus.svg'}
  alt={isOpen ? 'Collapse' : 'Expand'}
/>

          </button>
        </div>

        <hr className="border-black" />

        {isOpen && (
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed transition-opacity duration-300">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;
