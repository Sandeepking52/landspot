import React, { useEffect, useState } from 'react';
import ApiService from '../../service/ApiService';

function Property() {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);

  // Filters
  const [location, setLocation] = useState('');
  const [minArea, setMinArea] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  // Initial fetch + 5s refresh
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await ApiService.getAllProperties();
        setProperties(res);

        if (filteredProperties.length === 0) {
          setFilteredProperties(res);
        }
      } catch (err) {
        alert('Failed to load properties');
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, [filteredProperties.length]);

  // Apply filters
  const applyFilters = () => {
    const filtered = properties.filter((property) => {
      const matchLocation =
        location === '' || property.location.toLowerCase().includes(location.toLowerCase());
      const matchMinArea =
        minArea === '' || parseInt(property.area) >= parseInt(minArea);
      const matchMaxPrice =
        maxPrice === '' || parseInt(property.price) <= parseInt(maxPrice);
      return matchLocation && matchMinArea && matchMaxPrice;
    });

    setFilteredProperties(filtered);
  };

  // Reset filters
  const resetFilters = () => {
    setLocation('');
    setMinArea('');
    setMaxPrice('');
    setFilteredProperties(properties);
  };

  // Send Query Handler
  const handleSendQuery = (propertyTitle) => {
    alert(`Query sent for: ${propertyTitle}`);
  };

  return (
    <div className="max-w-6xl mx-auto mt-24 px-4 mb-20">
      <h2 className="text-3xl font-bold mb-6 text-center">Available Properties</h2>

      {/* Filters */}
      <div className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Search by Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          placeholder="Min Area (sq ft)"
          value={minArea}
          onChange={(e) => setMinArea(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={applyFilters}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Search
        </button>
        <button
          onClick={resetFilters}
          className="bg-gray-300 text-black px-6 py-2 rounded hover:bg-gray-400 transition"
        >
          Clear Filters
        </button>
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <div key={property._id} className="bg-white border rounded-lg shadow p-4 flex flex-col justify-between">
              <div>
                <img
                  src={property.imageUrl}
                  alt={property.title}
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h3 className="text-xl font-bold text-blue-700 mb-2">{property.title}</h3>
                <p className="text-gray-700 mb-1">{property.description}</p>
                <p className="text-gray-600">📍 {property.location}</p>
                <p className="text-gray-600">🏠 Type: {property.type}</p>
                <p className="text-gray-600">📐 Area: {property.area} sq ft</p>
                <p className="text-green-700 font-semibold mt-2">₹{property.price}</p>
              </div>

              {/* Send Query Button */}
              <button
                onClick={() => handleSendQuery(property.title)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                Send Query
              </button>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No properties found.</p>
        )}
      </div>
    </div>
  );
}

export default Property;
