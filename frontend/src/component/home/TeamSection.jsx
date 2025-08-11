import React from "react";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      role: "Founder & CEO",
      description:
        "John is the visionary behind LandSpot, with over 15 years of experience in the real estate industry.",
      image:
        "https://www.shutterstock.com/image-photo/middleaged-businessman-sitting-his-office-600nw-2518313777.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Head of Marketing",
      description:
        "Jane leads our marketing efforts, ensuring LandSpot’s visibility and brand presence in the real estate market.",
      image:
        "https://img.freepik.com/free-photo/medium-shot-smiley-man-sitting-desk_23-2149927603.jpg?semt=ais_hybrid&w=740",
    },
    {
      id: 3,
      name: "Michael Lee",
      role: "Chief Technology Officer",
      description:
        "Michael is responsible for LandSpot’s tech stack and ensuring seamless performance across all platforms.",
      image:
        "https://media.istockphoto.com/id/1318327528/photo/charming-asian-businesswoman-working-with-a-laptop-at-the-office-looking-at-camera.jpg?s=612x612&w=0&k=20&c=t-DTh02iSEXHea_5ZV0hnuw-8KCMz3Z9Ki4slzQkulk=",
    },
    {
      id: 4,
      name: "Emily Johnson",
      role: "Lead Developer",
      description:
        "Emily oversees development and ensures that LandSpot’s platform is fast, secure, and user-friendly.",
      image:
        "https://img.freepik.com/premium-photo/young-asian-businesswoman-working-office_296537-5110.jpg",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12 overflow-hidden">
          Meet Our Team
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Our team of experienced professionals is dedicated to making your real
          estate experience seamless and easy.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-sky-100 shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 object-cover mx-auto mt-6 rounded-full"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{member.role}</p>
                <p className="text-gray-600 text-base">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
