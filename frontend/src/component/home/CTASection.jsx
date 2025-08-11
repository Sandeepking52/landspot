import React from "react";

const CTASection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-blue-200 to-green-300 text-gray-800 py-20 px-4 md:px-10 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight overflow-hidden">
          Find Your Perfect Dorm Today
        </h2>
        <p className="text-base md:text-xl mb-8">
          Discover comfortable, affordable, and convenient dorms near your
          campus. Join thousands of students who’ve found their ideal living
          space with DormNest.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Browse Dorms
          </button>
          <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
