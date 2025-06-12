'use client';
import React from 'react';
import Card from './WorkProcessCard/Card';

const stepsData = [
  {
    step: '01',
    title: 'Consultation',
    description:
      'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
  },
  {
    step: '02',
    title: 'Research and Strategy Development',
    description:
      'Based on the consultation, we’ll create a detailed digital marketing strategy aligned with your goals, including SEO, content, social media, and advertising plans.',
  },
  {
    step: '03',
    title: 'Implementation',
    description:
      'We implement the strategy and continuously monitor performance using analytics tools, making data-driven adjustments to optimize results.',
  },
  {
    step: '04',
    title: 'Monitoring and Optimization',
    description:
      'We implement the strategy and continuously monitor performance using analytics tools, making data-driven adjustments to optimize results.',
  },
  {
    step: '05',
    title: 'Reporting and Communication',
    description:
      'We implement the strategy and continuously monitor performance using analytics tools, making data-driven adjustments to optimize results.',
  },
  {
    step: '06',
    title: 'Continual Improvement',
    description:
      'We implement the strategy and continuously monitor performance using analytics tools, making data-driven adjustments to optimize results.',
  },
];

function WorkingProcess() {
  return (
    <div className="mx-6">
      <div className="my-4 py-4 flex flex-col sm:flex-row items-center sm:items-center gap-6 sm:gap-12">
        <h1 className="py-2 px-4 text-xl sm:text-2xl font-bold text-center bg-[#B9FF66] rounded-lg">
          Our Work Process
        </h1>
        <p className="text-sm sm:text-base text-gray-700 text-center">
          Step-by-Step Guide to Achieving<br className="block sm:hidden" /> Your Business Goals
        </p>
      </div>

      {stepsData.map((step, index) => (
        <Card
          key={index}
          step={step.step}
          title={step.title}
          description={step.description}
        />
      ))}
    </div>
  );
}

export default WorkingProcess;
