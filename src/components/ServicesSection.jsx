import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faShippingFast,
  faShoppingCart,
  faGift,
} from "@fortawesome/free-solid-svg-icons";

function ServicesSection() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <h5 className="text-pink-500 font-semibold mb-2">
            OUR STORY & SERVICES
          </h5>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Culinary Journey <br /> And Services
          </h2>
          <p className="text-gray-600 mb-6">
            Rooted in passion, we curate unforgettable dining experiences and
            offer exceptional services, blending culinary artistry with warm
            hospitality.
          </p>
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-green-600 transition duration-300">
            Explore
          </button>
        </div>

        {/* Right Content - Services Cards */}
        <div className="grid grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-green-500 text-4xl mb-4">
              <FontAwesomeIcon icon={faUtensils} />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">CATERING</h4>
            <p className="text-gray-600 text-sm">
              Delight your guests with our flavors and presentation
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-green-500 text-4xl mb-4">
              <FontAwesomeIcon icon={faShippingFast} />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">FAST DELIVERY</h4>
            <p className="text-gray-600 text-sm">
              We deliver your order promptly to your door
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-green-500 text-4xl mb-4">
              <FontAwesomeIcon icon={faShoppingCart} />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">
              ONLINE ORDERING
            </h4>
            <p className="text-gray-600 text-sm">
              Explore menu & order with ease using our Online Ordering
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-green-500 text-4xl mb-4">
              <FontAwesomeIcon icon={faGift} />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">GIFT CARDS</h4>
            <p className="text-gray-600 text-sm">
              Give the gift of exceptional dining with Foodi Gift Cards
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
