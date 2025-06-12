'use client';
import React from "react";

const TeamCard = ({ name, description, image, icon }) => {
  return (
    <div className="bg-white rounded-3xl shadow-md p-6 transition-transform hover:scale-105 relative w-full max-w-xs border-b-4 border-black mt-5">
      {/* Icon */}
      <img
        src={icon}
        alt={`Icon for ${name}`}
        className="w-8 h-8 object-cover absolute top-4 right-4"
      />

      <div className="flex items-center gap-4 my-3">
        <img
          src={image}
          alt={`Portrait of ${name}`}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div className="text-left">
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <h5 className="text-sm text-gray-500">CEO and Founder</h5>
        </div>
      </div>

      <hr className="border-gray-300" />

      <p className="text-gray-600 text-sm leading-relaxed mt-3">
        {description}
      </p>
    </div>
  );
};

export default TeamCard;
