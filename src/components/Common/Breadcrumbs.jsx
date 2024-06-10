import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ crumbs }) => {
  return (
    <div className="text-sm text-gray-500 py-2">
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
