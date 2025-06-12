'use client';
import React from "react";
import TeamCard from "./TeamCard/card";

const teamMembers = [
  {
    name: "Alice Johnson",
    description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.",
    image: "./Picture.svg",
    icon: './Social icon.svg'
  },
  {
    name: "Bob Smith",
    description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.",
    image: "./Picture.svg",
    icon: './Social icon.svg'
  },
  {
    name: "Charlie Davis",
    description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.",
    image: "./Picture.svg",
    icon: './Social icon.svg'
  },
  {
    name: "Alice Johnson",
    description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.",
    image: "./Picture.svg",
    icon: './Social icon.svg'
  },
  {
    name: "Bob Smith",
    description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.",
    image: "./Picture.svg",
    icon: './Social icon.svg'
  },
  {
    name: "Charlie Davis",
    description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.",
    image: "./Picture.svg",
    icon: './Social icon.svg'
  },
];

const Team = () => {
  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
      <div className="mb-8 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-10">
        <h1 className="py-2 px-4 text-2xl font-bold bg-[#B9FF66] rounded-xl text-center sm:text-left">
          Team
        </h1>
        <p className="text-center sm:text-left text-gray-700 max-w-2xl">
          Meet the skilled and experienced team behind our <br className="hidden sm:block" />
          successful digital marketing strategies
        </p>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center">
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            description={member.description}
            image={member.image}
            icon={member.icon}
          />
        ))}
      </div>

      <div className="max-w-[96%] flex justify-center md:justify-end mt-10">
        <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
          See All Team
        </button>
      </div>
    </div>
  );
};

export default Team;
