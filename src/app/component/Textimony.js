'use client';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const testimonials = [
  {
    name: 'Alice Johnson',
    role: 'Marketing Director at XYZ Company',
    message: 'Working with this team has been a pleasure. Engagement grew by 300%!',
  },
  {
    name: 'Bob Smith',
    role: 'Marketing Director at XYZ Company',
    message: 'Truly outstanding service. We launched on time and saw great results.',
  },
  {
    name: 'Bob Smith',
    role: 'Marketing Director at XYZ Company',
    message: 'Truly outstanding service. We launched on time and saw great results.',
  },
  {
    name: 'Bob Smith',
    role: 'Marketing Director at XYZ Company',
    message: 'Truly outstanding service. We launched on time and saw great results.',
  },
  {
    name: 'Bob Smith',
    role: 'Marketing Director at XYZ Company',
    message: 'Truly outstanding service. We launched on time and saw great results.',
  },
  {
    name: 'Bob Smith',
    role: 'Marketing Director at XYZ Company',
    message: 'Truly outstanding service. We launched on time and saw great results.',
  },
];

const TestimonialCarousel = () => (
    <>
    
     <div className="px-6 py-4 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-12">
      <h1 className="py-2 px-4 text-2xl font-bold bg-[#B9FF66] rounded-xl text-center sm:text-left">
        Testimonials
      </h1>
      <p className="text-center sm:text-left text-gray-700 max-w-2xl">
        Hear from our satisfied clients:<br className="sm:hidden" />
        Learn how our digital marketing services made a difference.
      </p>
    </div>
    <div className='max-w-[96%] h-auto bg-black m-auto my-8 rounded-3xl'>

  <div className="max-w-3xl mx-auto py-12">

    <Carousel
      showArrows={false}
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      interval={5000}
      >
      {testimonials.map((t, i) => (
          <div key={i} className="relative px-4">

          <div className="relative w-full max-w-lg mx-auto">
            <img
              src="/Bubble.svg"
              alt="Speech Bubble"
              className="object-contain w-full"
              />

            <div className="absolute inset-0 flex items-center justify-center p-6">
              <p className="text-base sm:text-lg md:text-2xl italic text-white max-w-[100%]">{t.message}</p>
            </div>
          </div>
          <div className="mb-15 text-left max-w-lg mx-auto">
            <h3 className="text-xl font-semibold text-white">{t.name}</h3>
            <p className="text-sm text-white">{t.role}</p>
          </div>
        </div>
      ))}
    </Carousel>
  </div>
      </div>
      </>
);

export default TestimonialCarousel;
