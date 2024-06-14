import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Breadcrumbs = ({ crumbs }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);  // Navigate back to the previous page
  };

  return (
    <div className="flex items-center text-sm text-gray-600 py-2">
      <button
        onClick={handleBack}
        className="flex items-center text-sky-600 hover:text-sky-400 transition-colors duration-300 focus:outline-none mr-4"
      >
        <FaArrowLeft className="mr-1" />
        Back
      </button>
      {crumbs.map((crumb, index) => (
        <span key={index} className="flex items-center">
          {index > 0 && <span className="mx-2">{'>'}</span>}
          <Link to={crumb.path} className="hover:underline hover:text-sky-600 transition-colors duration-300">
            {crumb.name}
          </Link>
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
