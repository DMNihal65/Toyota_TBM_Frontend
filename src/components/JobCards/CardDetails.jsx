import React from 'react';
import { useParams } from 'react-router-dom';

const CardDetails = () => {
  let { id } = useParams(); // Assuming you pass `id` via route params

  // Dummy data for demonstration
  const cardDetails = {
    title: `Head Card ${id}`,
    description: `Description for Head Card ${id}`,
    image: 'https://via.placeholder.com/400x300',
    // Add more details as needed
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Card Details</h1>
      <div className="flex items-center justify-center">
        <div className="max-w-md w-full">
          <div className="bg-white shadow-md rounded-lg p-4">
            <img src={cardDetails.image} alt={cardDetails.title} className="w-full h-auto" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{cardDetails.title}</h2>
              <p className="text-gray-600">{cardDetails.description}</p>
              {/* Add more detailed information as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
