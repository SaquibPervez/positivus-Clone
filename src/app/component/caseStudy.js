'use client'; // Needed if using Next.js app directory

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function CaseStudy() {
  const caseStudies = [
    {
      text: 'For a local restaurant, we implemented a targeted PPC campaign that resulted in a ',
      highlight1: '50% increase in website traffic',
      highlight2: '25% increase in sales.',
    },
    {
      text: 'A fashion e-commerce brand saw a ',
      highlight1: '60% uplift in conversions',
      highlight2: ' after optimizing their product pages and running Facebook ads.',
    },
    {
      text: 'We helped a SaaS startup reduce CAC by ',
      highlight1: '40% through content marketing',
      highlight2: ' and LinkedIn lead generation strategies.',
    },
  ];

  return (
    <>
      <div className="mx-6 py-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-12 text-center sm:text-left">
        <h1 className="py-2 px-4 text-2xl font-bold bg-[#B9FF66] rounded-lg">Case Study</h1>
        <p>
          Explore Real-Life Examples of Our Proven Digital Marketing <br className="hidden sm:block" />
          Success through Our Case Studies
        </p>
      </div>

      <div className="hidden md:flex w-[96%] mx-auto bg-black rounded-3xl p-8 flex-row my-10">
        {caseStudies.map((item, i) => (
          <div
            key={i}
            className={`flex-1 bg-black p-6 flex flex-col justify-between ${
              i !== 2 ? 'border-r border-gray-400' : ''
            }`}
          >
            <p className="text-white mb-6 text-lg leading-relaxed">
              {item.text}
              <span className="font-semibold">{item.highlight1}</span> and{' '}
              <span className="font-semibold">{item.highlight2}</span>
            </p>
            <div className="flex items-center gap-2">
              <img src="/icon.svg" alt="logo" className="w-8 h-8 object-contain" />
              <button className="text-lime-300 px-2 py-1 transition">Learn more</button>
            </div>
          </div>
        ))}
      </div>

      <div className="md:hidden px-4">
        <Swiper spaceBetween={16} slidesPerView={1}>
          {caseStudies.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="bg-black rounded-3xl p-6 my-4 flex flex-col justify-between h-[280px]">
                <p className="text-white mb-6 text-lg leading-relaxed">
                  {item.text}
                  <span className="font-semibold">{item.highlight1}</span> and{' '}
                  <span className="font-semibold">{item.highlight2}</span>
                </p>
                <div className="flex items-center gap-2">
                  <img src="/icon.svg" alt="logo" className="w-8 h-8 object-contain" />
                  <button className="text-lime-300 px-2 py-1 transition">Learn more</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default CaseStudy;
