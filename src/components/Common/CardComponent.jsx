import React from 'react';
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'; // Importing Font Awesome icons


const { Meta } = Card;

const CardComponent = ({ title, description, image, link, status, okCount, ngCount }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    const lineId = link.split('/').pop();
    navigate(`/cards/overview/${lineId}`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'ok':
        return 'bg-green-100 border-green-300';
      case 'ng':
        return 'bg-red-100 border-red-300';
      default:
        return 'bg-gray-100 border-gray-300';
    }
  };

  return (
    <div
      className={`w-64 p-2 rounded-lg shadow-md border-2 ${getStatusColor(status)} cursor-pointer transition-transform transform hover:scale-105`}
      onClick={handleCardClick}
    >
      <div className="flex justify-center items-center border border-gray-400 bg-white rounded-md p-2 max-w-48 ml-5">
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <div className="flex justify-center mb-1">
        <img src={image} alt={title} className="w-16 h-16" />
      </div>
      <div className="flex justify-center items-center border bg-white border-gray-500 rounded-md p-2 max-w-48 ml-5">
        <span className="mr-24">CARDS</span>
        <span>2</span>
      </div>
      <div className="flex justify-between items-center mt-4">
      <div className="flex items-center">
        <div className="flex items-center mr-2">
          <span className="text-black-500 font-bold w-6">OK</span>
          <FaThumbsUp className="ml-1 mr-1 text-black-500" /> {/* Using FaThumbsUp for thumbs-up */}
        </div>
        <div className="flex flex-col">
          <span className="text-black-500 font-bold bg-green-300 w-6 text-center">{okCount}</span>
        </div>
      </div>
        <div className="flex items-center">
          <span className="text-black-500 font-bold w-6 ">NG</span>
          <FaThumbsDown  className="mr-1 text-black-500" /> {/* Using FaTimes for thumbs-down */}
          <span className="text-black-500 font-bold bg-yellow-300 w-6 text-center">{ngCount}</span>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
