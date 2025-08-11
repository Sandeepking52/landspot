import React from 'react';
import { CheckCircleIcon, HomeIcon, UserGroupIcon } from '@heroicons/react/outline'; // You can install this icon package

const HowItWorksSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-screen-xl mx-auto text-center px-6">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-10 overflow-hidden">How LandSpot Works</h2>
        <p className="text-lg text-gray-600 mb-8">
          LandSpot makes real estate transactions simple and secure. Here's how it works:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Step 1: Browse Properties */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <HomeIcon className="h-12 w-12 text-yellow-500 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Browse Properties</h3>
            <p className="text-gray-600">
              Start by browsing through a wide range of properties for sale or rent. Use advanced filters to narrow down your search by location, price, and type.
            </p>
          </div>

          {/* Step 2: Make an Inquiry */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <UserGroupIcon className="h-12 w-12 text-yellow-500 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Make an Inquiry</h3>
            <p className="text-gray-600">
              Once you've found a property you like, simply make an inquiry to the agent or owner. Get more details about the property or arrange a visit.
            </p>
          </div>

          {/* Step 3: Secure Transaction */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <CheckCircleIcon className="h-12 w-12 text-yellow-500 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Secure Transaction</h3>
            <p className="text-gray-600">
              Once everything is set, proceed with a secure transaction via our platform. LandSpot ensures that all parties are protected throughout the process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
