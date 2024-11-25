import React from "react";
import chef1 from "../../images/chef1.jpg";
import user1 from "../../images/user1.jpg";
import user2 from "../../images/user2.jpg";
import user3 from "../../images/user3.jpg";

const Testimonial = () => {
  return (
    <div className="flex items-center justify-center bg-white py-10 px-5 md:px-10">
      <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-lg shadow-lg max-w-4xl p-5 md:p-8">
        <div className="relative flex-shrink-0">
          <img
            src={chef1}
            alt="Chef"
            className="w-40 h-40 rounded-full border-4 border-white shadow-lg"
          />
          <div className="absolute bottom-2 left-2 bg-yellow-300 text-black text-xs font-medium px-2 py-1 rounded-full shadow">
            Top Chef
          </div>
        </div>

        <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">
            What Our Customers Say About Us
          </h3>
          <p className="mt-4 text-gray-600">
            "The experience offered at Food World was truly exceptional. The
            quality of food and customer service exceeded expectations!"
          </p>

          <div className="mt-4 flex items-center justify-center md:justify-start space-x-3">
            <div className="flex -space-x-2">
              <img
                src={user1}
                alt="Customer 1"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src={user2}
                alt="Customer 2"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src={user3}
                alt="Customer 3"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
            </div>

            <span className="text-gray-700 text-sm font-medium">
              Carmen Freitas
            </span>
            <span className="text-gray-400 text-xs">- VIP Club Member</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
