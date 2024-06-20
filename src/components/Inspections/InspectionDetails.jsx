import React from 'react';
import { useParams } from 'react-router-dom';
import DatePicker from '../Common/DateFilter'; 
import { AiFillFolderAdd, AiOutlineEdit, AiOutlineDelete,AiOutlineHistory,AiOutlineInfoCircle,AiOutlineCheckCircle  } from 'react-icons/ai';
import { FaThumbsUp, FaThumbsDown, FaHourglass } from 'react-icons/fa';

const InspectionDetails = () => {
  let { lineId } = useParams();
  let { lineTitle } = useParams();

  const inspectionDetails = {
    id: `${lineId}`,
    title:`${lineTitle}`,
    description: `Description for Line ${lineId}`,
    image: 'https://via.placeholder.com/150',
  };

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center bg-gray-200 p-2 rounded">
      <DatePicker />
        {/* <h1 className="text-xl font-bold text-center">CONTENT PAGE</h1> */}
        <h1 className="text-xl font-bold text-center">{inspectionDetails.id}</h1>
        <div className="space-x-2">
          <button className="px-4 py-2 bg-gray-300 rounded">LINE</button>
          <button className="px-4 py-2 bg-gray-300 rounded">SHIFT</button>
          <button className="px-4 py-2 bg-gray-300 rounded">DEP</button>
        </div>
      </div>
      
      {/* Toolbar */}
      <div className="flex items-center bg-gray-100 p-2 rounded">
        <input type="text" value="JP130" readOnly className="p-2 border rounded mr-2" />
        <button className="px-2 py-1 bg-gray-200 rounded mr-2">{`${lineTitle}`}</button>
        <button className="px-2 py-1 bg-gray-200 rounded mr-2">{`${lineId}`}</button>
        <button className="px-2 py-1 bg-gray-200 rounded mr-2"><AiFillFolderAdd /></button>
      <button className="px-2 py-1 bg-gray-200 rounded mr-2"><AiOutlineEdit /></button>
      <button className="px-2 py-1 bg-gray-200 rounded mr-2"><AiOutlineDelete /></button>
        <button className="px-4 py-2 bg-gray-200 rounded ml-auto flex items-center">CHECKED BY <AiOutlineCheckCircle className="mr-1" /></button>
        <button className="px-4 py-2 bg-gray-200 rounded ml-2 flex items-center">HISTORY <AiOutlineInfoCircle className="mr-5" /></button>
      </div>

      {/* Inspection Details Section */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">INSPECTION DETAILS</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-3">
            <div className="flex space-x-2">
              <div className="flex-1 bg-gray-100 p-2 rounded">Detail 1</div>
              <div className="flex-1 bg-gray-100 p-2 rounded">Detail 2</div>
              <div className="flex-1 bg-gray-100 p-2 rounded">Detail 3</div>
            </div>
          </div>
        </div>
      </div>

    
      <div className="flex">
        {/* Image Section */}
        <div className="flex-1 bg-white p-4 rounded shadow mr-4">
          <img src={inspectionDetails.image} alt={inspectionDetails.id} className="w-full h-auto border rounded" />
        </div>

        {/* Controls Section */}
        <div className="w-1/3 bg-white p-4 rounded shadow">
          <div className="space-y-4">
            <button className="flex items-center justify-center p-4 bg-gray-100 rounded w-full">
              <span className="text-2xl">📊</span>
            </button>
            <button className="flex items-center justify-center p-4 bg-gray-100 rounded w-full">
              <span className="text-2xl">📋</span>
            </button>
          </div>
          <div className="space-x-4 mt-4 flex justify-between">
            <button className="flex-1 p-4 bg-gray-100 rounded">
              <FaThumbsUp className="text-2xl" /> {/* Thumbs up icon for "ok" */}
            </button>
            <button className="flex-1 p-4 bg-gray-100 rounded">
              <FaThumbsDown className="text-2xl" /> {/* Thumbs down icon for "not okay" */}
            </button>
            <button className="flex-1 p-4 bg-gray-100 rounded">
              <FaHourglass className="text-2xl" /> {/* Hourglass icon for "pending" */}
            </button>
          </div>
          <button className="w-full mt-4 p-4 bg-red-500 text-white rounded">SUBMIT</button>
        </div>
      </div>
    </div>
  );
};

export default InspectionDetails;
