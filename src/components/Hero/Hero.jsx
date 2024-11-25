import React from "react";
import saland from "../../images/salad.jpg";
import spicy from "../../images/spicyN.jpg";
import chef from "../../images/chef.jpg";
const Hero = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12">
        {/* Left Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Dive into Delights <br />
            Of Delectable <span className="text-green-500">Food</span>
          </h1>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            Where Each Plate Weaves a Story of Culinary Mastery <br /> and
            Passionate Craftsmanship
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
            <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-lg shadow-md text-lg">
              Order Now
            </button>
            <button className="flex items-center gap-3 text-gray-700 py-3 px-8 rounded-lg shadow-md border border-gray-300 hover:bg-gray-100 text-lg">
              <span>Watch Video</span>
              <div className="bg-gray-300 p-3 rounded-full">
                <svg
                  className="w-4 h-4 text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 relative">
          {/* Image Section */}
          <div className="relative">
            <div className="rounded-full bg-green-100 p-10">
              <img
                src={chef}
                alt="Food"
                className="w-full max-w-sm rounded-full mx-auto"
              />
            </div>
            {/* Speech Bubble */}
            <div className="absolute top-0 -right-10 bg-white p-3 rounded-lg shadow-md">
              <p className="text-sm text-gray-700 flex items-center gap-1">
                Hot spicy Food 🌶️
              </p>
            </div>
          </div>

          {/* Food Cards */}
          <div className="flex gap-6 mt-8 lg:absolute lg:-bottom-10 lg:left-0">
            {/* Spicy Noodles Card */}
            <div className="bg-white rounded-lg shadow-lg p-4 w-36 text-center">
              <img
                src={spicy} 
                alt="Spicy Noodles"
                className="rounded-lg mb-2"
              />
              <h3 className="text-sm font-semibold">Spicy noodles</h3>
              <p className="text-green-500 font-bold text-lg">$18.00</p>
            </div>
            {/* Vegetarian Salad Card */}
            <div className="bg-white rounded-lg shadow-lg p-4 w-36 text-center">
              <img
                src={saland} 
                alt="Vegetarian Salad"
                className="rounded-lg mb-2"
              />
              <h3 className="text-sm font-semibold">Vegetarian salad</h3>
              <p className="text-green-500 font-bold text-lg">$23.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
