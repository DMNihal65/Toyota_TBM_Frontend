// components/Inspection/InspectionDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const InspectionDetails = () => {
  // Use useParams to get the route parameters
  let { lineId } = useParams();

  // Logic to fetch inspection details based on lineId
  // You can fetch details from API or use dummy data

  const inspectionDetails = {
    title: `Line ${lineId}`,
    description: `Description for Line ${lineId}`,
    image: 'https://via.placeholder.com/150',
    // Add more details as needed
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Inspection Details</h1>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <h2 className="text-xl font-semibold">{inspectionDetails.title}</h2>
          <p className="text-gray-600">{inspectionDetails.description}</p>
        </div>
        <img src={inspectionDetails.image} alt={inspectionDetails.title} className="w-full h-auto" />
        {/* Add more details display as needed */}
      </div>
    </div>
  );
};

export default InspectionDetails;
