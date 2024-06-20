import React from 'react';
import { useParams } from 'react-router-dom';

const productionLineDetails = {
  line1: {
    title: 'Line 1',
    description: 'Detailed information about Line 1',
    details: 'More detailed information about the operations and statistics of Line 1.'
  },
  line2: {
    title: 'Line 2',
    description: 'Detailed information about Line 2',
    details: 'More detailed information about the operations and statistics of Line 2.'
  },
  // Add more lines as needed
};

const CardInspection = () => {
  const { lineId } = useParams();
  const line = productionLineDetails[lineId];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{line.title}</h1>
      <p>{line.description}</p>
      <div className="mt-4 p-4 bg-sky-100 rounded shadow">
        <h2 className="text-xl font-semibold">Details</h2>
        <p>{line.details}</p>
      </div>
    </div>
  );
};

export default CardInspection;
