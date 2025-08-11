import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../../service/ApiService';
import Pagination from '../common/Pagination';
import RoomResult from '../common/RoomResult';

const ManageRoomPage = () => {
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [roomTypes, setRoomTypes] = useState([]);
  const [selectedRoomType, setSelectedRoomType] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [roomsPerPage] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await ApiService.getAllRooms();
        const allRooms = response.roomList;
        setRooms(allRooms);
        setFilteredRooms(allRooms);
      } catch (error) {
        console.error('Error fetching rooms:', error.message);
      }
    };

    const fetchRoomTypes = async () => {
      try {
        const types = await ApiService.getRoomTypes();
        setRoomTypes(types);
      } catch (error) {
        console.error('Error fetching room types:', error.message);
      }
    };

    fetchRooms();
    fetchRoomTypes();
  }, []);

  const handleRoomTypeChange = (e) => {
    setSelectedRoomType(e.target.value);
    filterRooms(e.target.value);
  };

  const filterRooms = (type) => {
    if (type === '') {
      setFilteredRooms(rooms);
    } else {
      const filtered = rooms.filter((room) => room.roomType === type);
      setFilteredRooms(filtered);
    }
    setCurrentPage(1); // Reset to first page after filtering
  };

  // Pagination
  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  const currentRooms = filteredRooms.slice(indexOfFirstRoom, indexOfLastRoom);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='mt-36 mb-16 flex justify-center px-4'>
      <div className='w-full max-w-4xl bg-white rounded-xl shadow-md p-6'>
        <div className='flex items-center justify-between mb-6'>
          <h2 className='text-2xl font-bold text-gray-800'>Manage Rooms</h2>
          <button
            className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200'
            onClick={() => navigate('/admin/add-room')}
          >
            Add Room
          </button>
        </div>

        <div className='mb-4'>
          <label className='block mb-1 font-medium text-gray-700'>Filter by Room Type:</label>
          <select
            value={selectedRoomType}
            onChange={handleRoomTypeChange}
            className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            <option value="">All</option>
            {roomTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <RoomResult roomSearchResults={currentRooms} />

        <div className='mt-6'>
          <Pagination
            roomsPerPage={roomsPerPage}
            totalRooms={filteredRooms.length}
            currentPage={currentPage}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
};

export default ManageRoomPage;
