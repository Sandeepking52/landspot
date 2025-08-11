import React, { useState } from "react";
import RoomResult from "../common/RoomResult";
import RoomSearch from "../common/RoomSearch";

const HomePage = () => {
  const [roomSearchResults, setRoomSearchResults] = useState([]);

  // Function to handle search results
  const handleSearchResult = (results) => {
    setRoomSearchResults(results);
  };

  return (
    <div className="home bg-gradient-to-br from-blue-100 to-gray-100 min-h-screen p-6 text-gray-800 ">
      {/* Hero Section */}
      <section className="text-center my-12 ">
        <h1 className="text-5xl font-extrabold mb-4 text-blue-900 py-2 overflow-hidden">
          Welcome to LandSpot{" "}
        </h1>
      </section>

      {/* Room Search Section */}
      <section className="my-10 bg-white shadow-md rounded-xl p-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6 text-indigo-800">
          Search Room And Flat Facilities
        </h2>
        <RoomSearch handleSearchResult={handleSearchResult} />
      </section>

      {/* Room Results Section */}
      <section className="my-10 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6 text-indigo-800">
          Available Facilities
        </h2>
        {roomSearchResults.length > 0 ? (
          <RoomResult roomSearchResults={roomSearchResults} />
        ) : (
          <p className="text-center text-gray-600">
            No results found. Please try searching again.
          </p>
        )}
      </section>
    </div>
  );
};

export default HomePage;
