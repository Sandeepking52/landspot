import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null); // Close if the same question is clicked
    } else {
      setActiveIndex(index); // Open new question
    }
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-screen-xl mx-auto text-center px-6">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8 overflow-hidden">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600 mb-12">
          Here are some of the most commonly asked questions about LandSpot. If you have any other questions, feel free to reach out to us.
        </p>

        <div className="space-y-6">
          {/* Question 1 */}
          <div
            className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition duration-300"
            onClick={() => toggleAnswer(0)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-800">What is LandSpot?</h3>
              <svg
                className={`w-6 h-6 transform transition-transform ${activeIndex === 0 ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {activeIndex === 0 && (
              <p className="mt-4 text-gray-600">
                LandSpot is an online real estate platform that connects buyers, tenants, property owners, and real estate agents. It allows users to list, manage, and search for properties with ease.
              </p>
            )}
          </div>

          {/* Question 2 */}
          <div
            className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition duration-300"
            onClick={() => toggleAnswer(1)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-800">How do I list a property?</h3>
              <svg
                className={`w-6 h-6 transform transition-transform ${activeIndex === 1 ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {activeIndex === 1 && (
              <p className="mt-4 text-gray-600">
                Listing a property on LandSpot is simple. You can create an account as a property owner, and from the dashboard, you'll be able to add new property details like location, price, images, and availability.
              </p>
            )}
          </div>

          {/* Question 3 */}
          <div
            className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition duration-300"
            onClick={() => toggleAnswer(2)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-800">How can I apply for a property?</h3>
              <svg
                className={`w-6 h-6 transform transition-transform ${activeIndex === 2 ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {activeIndex === 2 && (
              <p className="mt-4 text-gray-600">
                Once you find the property you like, you can easily apply by submitting a rental application form. The property owner or agent will review your application and notify you about the status.
              </p>
            )}
          </div>

          {/* Question 4 */}
          <div
            className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition duration-300"
            onClick={() => toggleAnswer(3)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-800">Is LandSpot free to use?</h3>
              <svg
                className={`w-6 h-6 transform transition-transform ${activeIndex === 3 ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {activeIndex === 3 && (
              <p className="mt-4 text-gray-600">
                Yes, LandSpot is free for buyers and tenants to search and apply for properties. Property owners and agents can create listings and manage their properties for a small fee.
              </p>
            )}
          </div>

          {/* Question 5 */}
          <div
            className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition duration-300"
            onClick={() => toggleAnswer(4)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-800">How secure is my information on LandSpot?</h3>
              <svg
                className={`w-6 h-6 transform transition-transform ${activeIndex === 4 ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {activeIndex === 4 && (
              <p className="mt-4 text-gray-600">
                LandSpot employs industry-standard encryption methods to protect your personal and payment information. We take security very seriously and strive to keep your data safe at all times.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
