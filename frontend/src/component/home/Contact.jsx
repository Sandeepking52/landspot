import React from "react";

const Contact = () => {
  return (
    <section className="bg-gray-50 pt-40 pb-20 bg-gradient-to-br from-blue-100 to-gray-100">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6 overflow-hidden">
          Contact Us
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
          Have questions? We’d love to hear from you! Whether you're a buyer,
          seller, or just have inquiries about our platform, reach out to us,
          and we’ll be happy to assist.
        </p>

        {/* Contact Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Our Address
            </h4>
            <p className="text-gray-600">
              123 LandSpot Lane, Suite 456
              <br />
              Lucknow, 226028
              <br />
              India
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Phone</h4>
            <p className="text-gray-600">
              <a
                href="tel:+1234567890"
                className="text-cyan-500 hover:text-cyan-400"
              >
                +91 9795524116 <br />
                +91 6388279258
              </a>
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Email</h4>
            <p className="text-gray-600">
              <a
                href="mailto:contact@landspot.com"
                className="text-cyan-500 hover:text-cyan-400"
              >
                skbindpurwa@gmail.com <br />
                raiprashant878@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-12 flex justify-center space-x-6">
          <a
            href="https://www.facebook.com/landspot"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            <i className="fab fa-facebook-f text-2xl"></i>
          </a>
          <a
            href="https://www.twitter.com/landspot"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/landspot"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            <i className="fab fa-linkedin-in text-2xl"></i>
          </a>
          <a
            href="https://www.instagram.com/landspot"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            <i className="fab fa-instagram text-2xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
