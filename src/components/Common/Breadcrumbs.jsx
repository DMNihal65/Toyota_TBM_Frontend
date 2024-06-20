import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Breadcrumbs = ({ crumbs }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="text-sm text-gray-500 py-2 flex items-center">
      <button onClick={handleBackClick} className="mr-2 flex items-center text-blue-500 hover:text-blue-700">
        <FaArrowLeft className="mr-1" />
        Back
      </button>
      {crumbs.map((crumb, index) => (
        <span key={index}>
          {index > 0 && ' > '}
          <Link to={crumb.path} className="hover:underline">
            {crumb.name}
          </Link>
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
