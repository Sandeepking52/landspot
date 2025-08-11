import React from "react";

const About = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 pt-20 pb-2 text-white">
      <div className="max-w-10xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-cyan-400 mb-6 tracking-wide drop-shadow-[0_0_20px_rgba(34,211,238,0.4)] overflow-x-hidden overflow-hidden">
          About LandSpot
        </h2>

        <p className="text-lg text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          LandSpot is a revolutionary online real estate platform designed to
          simplify property transactions. Our goal is to make the process of
          buying, selling, and renting properties as seamless and secure as
          possible for users.
        </p>

        {/* Mission Statement */}
        <div className="mb-16">
          <h2 className="text-4xl font-extrabold text-cyan-400 mb-6 tracking-wide drop-shadow-[0_0_20px_rgba(34,211,238,0.3)] overflow-hidden">
            Our Mission
          </h2>
          <p className="text-md text-slate-300 max-w-3xl mx-auto leading-relaxed">
            To provide a platform where people can easily connect with property
            owners, agents, and tenants, making real estate transactions faster,
            more efficient, and more transparent.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-6">
          {/* Card 1 */}
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 border border-white/20">
            <h4 className="text-xl font-semibold text-purple-400 mb-4">
              🚀 Innovation
            </h4>
            <p className="text-slate-300">
              We push the boundaries of tech to offer next-gen real estate
              solutions—from seamless listings to advanced search tools.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 border border-white/20">
            <h4 className="text-xl font-semibold text-pink-400 mb-4">
              🔍 Transparency
            </h4>
            <p className="text-slate-300">
              Every transaction is clear, fair, and honest. We empower users
              with complete information to make smart decisions.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 border border-white/20">
            <h4 className="text-xl font-semibold text-blue-400 mb-4">
              💡 Customer-Centric
            </h4>
            <p className="text-slate-300">
              Designed for users first—with intuitive UX, responsive support,
              and a smooth experience every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
