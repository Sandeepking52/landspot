import React from "react";

const properties = [
  {
    id: 1,
    title: "Modern 2 Bedroom Apartment",
    location: "New York, NY",
    price: "$2,500 / month",
    image:
      "https://escape2thesands.com/wp-content/uploads/2019/12/Kepwick-213-03252025_111816-1920x1080.jpg",
    type: "Apartment",
    status: "Available",
  },
  {
    id: 2,
    title: "Cozy Studio in Downtown",
    location: "San Francisco, CA",
    price: "$1,800 / month",
    image:
      "https://media.vrbo.com/lodging/84000000/83500000/83493900/83493817/1054c888.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
    type: "Studio",
    status: "Available",
  },
  {
    id: 3,
    title: "Luxury 3 Bedroom Villa",
    location: "Los Angeles, CA",
    price: "$5,000 / month",
    image:
      "https://houzone.com/wp-content/uploads/2021/01/3-bedroom-luxury-pool-house-design-house-plans-indiahousedesign-houzone-01.jpg",
    type: "Villa",
    status: "Occupied",
  },
  {
    id: 4,
    title: "Spacious 1 Bedroom Condo",
    location: "Miami, FL",
    price: "$2,000 / month",
    image:
      "https://a0.muscache.com/im/pictures/d6cfb313-3547-4ec1-8528-c0df8f8bdb39.jpg?im_w=720",
    type: "Condo",
    status: "Available",
  },
  {
    id: 5,
    title: "Elegant 2 Bedroom Townhouse",
    location: "Chicago, IL",
    price: "$3,000 / month",
    image:
      "https://i.ytimg.com/vi/atMnBZ9_z0U/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAEgkX0PFC_td9tRu4ROoiXjHD-yQ",
    type: "Townhouse",
    status: "Available",
  },
  {
    id: 6,
    title: "Charming 1 Bedroom Loft",
    location: "Austin, TX",
    price: "$1,600 / month",
    image:
      "https://a0.muscache.com/im/pictures/e64a37cc-d0af-4d3c-9c4a-b3913408075c.jpg?im_w=720",
    type: "Loft",
    status: "Available",
  },
  {
    id: 7,
    title: "Stylish 3 Bedroom Bungalow",
    location: "Denver, CO",
    price: "$4,200 / month",
    image:
      "https://i.pinimg.com/564x/e0/65/e4/e065e43e9c4ca0378fd9c85b825a8fc3.jpg",
    type: "Bungalow",
    status: "Occupied",
  },
  {
    id: 8,
    title: "Luxury Penthouse Suite",
    location: "Los Angeles, CA",
    price: "$8,000 / month",
    image:
      "https://d18slle4wlf9ku.cloudfront.net/atlantiscasino.com-1116647142/cms/cache/v2/66d782512c861.jpg/1200x630/fit/80/cad3d04615e08bb7d90b234a5de4ab5a.jpg",
    type: "Penthouse",
    status: "Available",
  },
  {
    id: 9,
    title: "Cozy Beachfront Cottage",
    location: "San Diego, CA",
    price: "$3,500 / month",
    image:
      "https://img.freepik.com/premium-photo/cozy-beachfront-cottage-sunset-tropical-paradise-with-ocean-views-palm-trees-relaxing_996993-88021.jpg",
    type: "Cottage",
    status: "Available",
  },
  {
    id: 10,
    title: "Elegant 4 Bedroom House",
    location: "Seattle, WA",
    price: "$6,000 / month",
    image:
      "https://i.pinimg.com/736x/10/1f/c4/101fc45304d0fb1ed6f8d2292aabf50e.jpg",
    type: "House",
    status: "Available",
  },
  {
    id: 11,
    title: "Modern 1 Bedroom Apartment",
    location: "Portland, OR",
    price: "$2,200 / month",
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-906776399450364783/original/1748f643-a784-4aaa-a87a-50a2ed772f34.jpeg?im_w=720",
    type: "Apartment",
    status: "Occupied",
  },
  {
    id: 12,
    title: "Comfy 2 Bedroom Condo",
    location: "Phoenix, AZ",
    price: "$2,300 / month",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5nimYb8RATpeaRgvQhjqUWIXVLQZl9qaouw&s",
    type: "Condo",
    status: "Available",
  },
  {
    id: 13,
    title: "Spacious 3 Bedroom Villa",
    location: "Las Vegas, NV",
    price: "$4,500 / month",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/585018890.jpg?k=7a0a7ab8d8fdd511b5d72ea020c048d0c47cc6875d69cb6510c2d65b4fece26a&o=&hp=1",
    type: "Villa",
    status: "Available",
  },
  {
    id: 14,
    title: "Charming Studio Apartment",
    location: "Austin, TX",
    price: "$1,700 / month",
    image:
      "https://i0.wp.com/www.dailydreamdecor.com/wp-content/uploads/2017/01/tiny-apartment.jpg",
    type: "Studio",
    status: "Available",
  },
  {
    id: 15,
    title: "Trendy 1 Bedroom Loft",
    location: "New York, NY",
    price: "$2,600 / month",
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-834853198824053007/original/93169471-a52d-48ce-a9ee-ed3414e5a93f.jpeg?im_w=720",
    type: "Loft",
    status: "Occupied",
  },
  {
    id: 16,
    title: "Spacious 4 Bedroom House",
    location: "San Francisco, CA",
    price: "$7,000 / month",
    image:
      "https://i0.wp.com/samhouseplans.com/wp-content/uploads/2021/12/15x10-Modern-House-Design-4-Bedrooms-3d-Night-View.jpg?fit=1920%2C1080&ssl=1",
    type: "House",
    status: "Available",
  },
  {
    id: 17,
    title: "Modern 2 Bedroom Condo",
    location: "Boston, MA",
    price: "$3,000 / month",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6U52OGmOhPcvmMiEJ0wAvvhZjOHHuPL7cfQ&s",
    type: "Condo",
    status: "Available",
  },
  {
    id: 18,
    title: "Luxury 5 Bedroom Mansion",
    location: "Miami, FL",
    price: "$10,000 / month",
    image:
      "https://i.etsystatic.com/21180532/r/il/418850/2933808655/il_fullxfull.2933808655_1qqx.jpg",
    type: "Mansion",
    status: "Available",
  },
  {
    id: 19,
    title: "Comfy 2 Bedroom Apartment",
    location: "Denver, CO",
    price: "$2,800 / month",
    image:
      "https://media.istockphoto.com/id/1385185506/photo/side-view-of-luxury-hotel-room-with-two-beds-chair-and-potted-plant.jpg?s=612x612&w=0&k=20&c=sO6nXqY-aFsST-dLFLiP3fzlsDOU-R1hQ-PetQ-_kKI=",
    type: "Apartment",
    status: "Occupied",
  },
  {
    id: 20,
    title: "Luxury 3 Bedroom Flat",
    location: "Washington, DC",
    price: "$5,500 / month",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-EH8rnrbO6j3ywcOilp_RSkYKGOvPNpLNQg&s",
    type: "Flat",
    status: "Available",
  },
  {
    id: 20,
    title: " 3 bhk house in village - single floor home",
    location: "Washington, DC",
    price: "$5,500 / month",
    image:
      "https://claritechinfo.in/wp-content/uploads/2024/11/3-bhk-house-in-village-1-673ec67279d02.webp",
    type: "Flat",
    status: "Available",
  },
];

const World = () => {
  return (
    <section className="container mx-auto pt-32 pb-12  px-4">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-14">
        Available Properties
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <img
              className="w-full h-64 object-cover"
              src={property.image}
              alt={property.title}
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {property.title}
              </h3>
              <p className="text-gray-500">{property.location}</p>
              <p className="text-lg font-bold text-gray-900">
                {property.price}
              </p>
              <p className="text-sm text-gray-500">Type: {property.type}</p>
              <p
                className={`mt-2 text-sm ${
                  property.status === "Available"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {property.status}
              </p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default World;
