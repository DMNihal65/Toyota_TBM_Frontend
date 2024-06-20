import React from 'react';
import { useParams } from 'react-router-dom';

const InspectionDetails = () => {
  let { lineId } = useParams();

  const inspectionDetails = {
    title: `Line ${lineId}`,
    description: `Description for Line ${lineId}`,
    image: 'https://via.placeholder.com/150',
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <input type="text" placeholder="DATE FILTER" className="p-2 border rounded" />
        <h1 className="text-xl font-bold">CONTENT PAGE</h1>
        <div className="space-x-2">
          <button className="px-4 py-2 bg-gray-200 rounded">LINE</button>
          <button className="px-4 py-2 bg-gray-200 rounded">SHIFT</button>
          <button className="px-4 py-2 bg-gray-200 rounded">DEP</button>
        </div>
      </div>
      <div className="flex items-center mb-4">
        <input type="text" value="JP130" readOnly className="p-2 border rounded mr-2" />
        <button className="px-2 py-1 bg-gray-200 rounded mr-2">CARD 1</button>
        <button className="px-2 py-1 bg-gray-200 rounded mr-2">📷</button>
        <button className="px-2 py-1 bg-gray-200 rounded mr-2">✏️</button>
        <button className="px-2 py-1 bg-gray-200 rounded mr-2">🗑️</button>
        <button className="px-4 py-2 bg-gray-200 rounded ml-auto">CHECKED BY</button>
        <button className="px-4 py-2 bg-gray-200 rounded ml-2">HISTORY ⓘ</button>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="col-span-2">
          <div className="border rounded p-4">
            <h2 className="text-lg font-semibold">INSPECTION DETAILS</h2>
            <div className="mt-4">
              <p className="mb-2">Detail 1</p>
              <p className="mb-2">Detail 2</p>
              <p className="mb-2">Detail 3</p>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <img src={inspectionDetails.image} alt={inspectionDetails.title} className="w-full h-auto border rounded" />
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="flex-1 border rounded p-4">
          <div className="flex items-center space-x-2 mb-4">
            <button className="p-2 bg-gray-200 rounded">📊</button>
            <button className="p-2 bg-gray-200 rounded">📋</button>
          </div>
          <div className="flex space-x-4">
            <button className="p-2 bg-gray-200 rounded">👍</button>
            <button className="p-2 bg-gray-200 rounded">👎</button>
            <button className="p-2 bg-gray-200 rounded">⏳</button>
          </div>
        </div>
        <button className="px-4 py-2 bg-red-500 text-white rounded">SUBMIT</button>
      </div>
    </div>
  );
};

export default InspectionDetails;
