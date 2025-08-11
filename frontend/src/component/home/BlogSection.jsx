import React from "react";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "How to Choose the Right Property for Investment",
      description:
        "Choosing the right property for investment can make a huge difference. Here are some tips to help you navigate the real estate market.",
      imageUrl:
        "https://cdn.prod.website-files.com/648906eb516b9abf92f186e9/64963c15c5714ebd7a090dbf_buyer-banner-image.jpg", // Use your image link
      date: "March 25, 2023",
      link: "/blog/how-to-choose-right-property",
    },
    {
      title: "Understanding the Real Estate Market Trends in 2025",
      description:
        "Stay updated on the real estate market trends of 2025. Know the key factors that will shape property investments this year.",
      imageUrl:
        "https://edcookrealestate.com/wp-content/uploads/2025/02/Pompano-Beach-Real-Estate-Market-Trends-for-2025-What-Buyers-And-Sellers-Need-To-Know.webp", // Use your image link
      date: "March 18, 2023",
      link: "/blog/real-estate-market-trends",
    },
    {
      title: "Tips for First-Time Home Buyers",
      description:
        "Are you a first-time homebuyer? Here are some essential tips and advice to help you find your dream home at the best price.",
      imageUrl:
        "https://images.ctfassets.net/14tb1sawrzct/3vR3kmKLuk9foL9RBWV5nJ/430138e9f2867353d0fb9305cce6a4d8/istockphoto-915460092-612x612.jpeg?w=1000", // Use your image link
      date: "March 10, 2023",
      link: "/blog/first-time-home-buyers-tips",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6 overflow-hidden">
          Latest Blog Posts
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
          Stay up-to-date with the latest trends, insights, and tips in the real
          estate market. Our blog provides expert advice for buyers, investors,
          and sellers.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-base mb-4">
                  {post.description}
                </p>
                <span className="text-gray-500 text-sm">{post.date}</span>
                <a
                  href={post.link}
                  className="mt-4 inline-block bg-cyan-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-cyan-400 transition duration-300"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
