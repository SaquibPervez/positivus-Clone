'use client';
import React from 'react';

const ContactCard = () => {
  return (
    <>
      <div className="px-6 py-4 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-12">
        <h1 className="py-2 px-4 text-2xl font-bold bg-[#B9FF66] rounded-xl text-center sm:text-left">
          Contact Us
        </h1>
        <p className="text-center sm:text-left text-gray-700 max-w-2xl">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>

      <div className="max-w-[96%] mx-auto my-10 rounded-3xl overflow-hidden bg-[#f6f6f6]">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">

          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-6 mb-6 flex-wrap">  
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="purpose"
                  className="form-radio h-4 w-4 text-lime-500 border-gray-300"
                />
                <span>Say Hi</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="purpose"
                  className="form-radio h-4 w-4 text-black border-gray-300"
                />
                <span>Get a Quote</span>
              </label>
            </div>

            <form className="space-y-4">
              <div>
                <label className="text-sm">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full mt-1 px-4 py-2 border border-black bg-white rounded-md focus:outline-none"
                />
              </div>
              <div>
                <label className="text-sm">Email*</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full mt-1 px-4 py-2 border bg-white border-black rounded-md focus:outline-none"
                />
              </div>
              <div>
                <label className="text-sm">Message*</label>
                <textarea
                  rows={4}
                  placeholder="Message"
                  className="w-full mt-1 px-4 py-2 border bg-white border-black rounded-md focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-md"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="hidden md:flex justify-center items-center p-6">
            <img
              src="./icon 2.svg"
              alt="Contact Design"
              className="object-contain max-w-full h-auto"
            />
          </div>

        </div>
      </div>
    </>
  );
};

export default ContactCard;
