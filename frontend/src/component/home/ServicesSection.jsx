import React from "react";
import {
  HomeIcon,
  ShieldCheckIcon,
  SearchIcon,
  DocumentTextIcon,
} from "@heroicons/react/outline";

const features = [
  {
    title: "Secure User Authentication",
    description:
      "Seamless registration and secure login for users with role-based access using Spring Security and JWT.",
    icon: (
      <ShieldCheckIcon className=" bg-green-500 rounded h-12 w-12 text-red-500" />
    ),
  },
  {
    title: "Property Management",
    description:
      "Easily list, manage, and edit property details including price, images, and availability.",
    icon: (
      <HomeIcon className="bg-teal-500 rounded h-12 w-12 text-yellow-500" />
    ),
  },
  {
    title: "Advanced Property Search",
    description:
      "Quickly filter properties by location, price, type, and other custom parameters to find your perfect match.",
    icon: (
      <SearchIcon className="bg-blue-950 rounded h-12 w-12 text-yellow-500" />
    ),
  },
  {
    title: "Application Tracking",
    description:
      "Buyers can apply, and owners can manage, approve or reject applications for properties.",
    icon: (
      <DocumentTextIcon className=" bg-blue-400 rounded h-12 w-12 text-yellow-500" />
    ),
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6 overflow-hidden">
          Our Core Features
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          LandSpot provides a range of features to make your real estate
          experience smooth, secure, and efficient.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="flex justify-center mb-6">{feature.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
