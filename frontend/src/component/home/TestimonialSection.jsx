import React from "react";

const TestimonialSection = () => {
  return (
    <section className="bg-gray-200 py-16">
      <div className="max-w-screen-xl mx-auto text-center px-6">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8 overflow-hidden">
          What Our Users Are Saying
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          LandSpot has helped countless users in simplifying their property
          search and transactions. Here's what they have to say:
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {/* Testimonial 1 */}
          <div className="bg-sky-200 rounded-lg shadow-lg max-w-md w-full">
            <p className="text-lg text-gray-600 italic mb-4">
              "LandSpot made my house-hunting experience so much easier! The
              platform was easy to use, and I found the perfect home in no
              time."
            </p>
            <div className="flex items-center justify-center">
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg" // Replace with actual images
                alt="User"
                className="h-16 w-16 rounded-full object-cover mr-4"
              />
              <div>
                <p className="font-semibold text-gray-800">John Doe</p>
                <p className="text-sm text-gray-500">Buyer</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-sky-200 p-8 rounded-lg shadow-lg max-w-md w-full">
            <p className="text-lg text-gray-600 italic mb-4">
              "As a real estate agent, LandSpot has helped me connect with
              serious buyers and close deals faster. A fantastic platform!"
            </p>
            <div className="flex items-center justify-center">
              <img
                src="https://randomuser.me/api/portraits/women/2.jpg" // Replace with actual images
                alt="User"
                className="h-16 w-16 rounded-full object-cover mr-4"
              />
              <div>
                <p className="font-semibold text-gray-800">Jane Smith</p>
                <p className="text-sm text-gray-500">Agent</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-sky-200 p-8 rounded-lg shadow-lg max-w-md w-full">
            <p className="text-lg text-gray-600 italic mb-4">
              "I love how easy it is to list my properties and manage my
              applications. LandSpot has truly streamlined my workflow!"
            </p>
            <div className="flex items-center justify-center">
              <img
                src="https://randomuser.me/api/portraits/men/3.jpg" // Replace with actual images
                alt="User"
                className="h-16 w-16 rounded-full object-cover mr-4"
              />
              <div>
                <p className="font-semibold text-gray-800">Robert Brown</p>
                <p className="text-sm text-gray-500">Property Owner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
