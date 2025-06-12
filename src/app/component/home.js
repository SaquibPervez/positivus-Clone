import React from 'react';
import Image from 'next/image';

function Homepage() {
  return (
    <div className="px-6 py-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Navigating the digital landscape
            for success
          </h1>
          <p className="text-gray-600 text-base md:text-sm max-w-md">
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
          </p>
          <div className="flex justify-center md:justify-start">
    <button className="text-sm py-3 px-15 bg-black text-white rounded hover:bg-blue-700 transition">
      Book a consultation
    </button>
  </div>
        </div>

        <div className="md:w-1/2 flex justify-end">
          <Image
            src="/Illustration.svg"
            alt="Illustration"
            width={600}
            height={600}
            className="w-full h-auto max-w-md"
          />
        </div>
      </div>

      <div className="mt-12 flex justify-around flex-wrap ">
        <Image src="/Company logo.svg" alt="Company Logo" width={80} height={80} />
        <Image src="/Company logo (1).svg" alt="Logo" width={80} height={90} />
        <Image src="/Company logo (2).svg" alt="Logo" width={80} height={90} />
        <Image src="/Company logo (3).svg" alt="Logo" width={80} height={90} />
        <Image src="/Company logo (4).svg" alt="Logo" width={80} height={90} />
        <Image src="/Company logo (5).svg" alt="Logo" width={80} height={90} />
      </div>
    </div>
  );
}

export default Homepage;
