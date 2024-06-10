import React from 'react';
import { NavLink } from 'react-router-dom';

const Tabs = ({ tabs }) => {
  return (
    <div className="flex space-x-4 bg-gray-200 p-2">
      {tabs.map((tab, index) => (
        <NavLink
          key={index}
          to={tab.route}
          className={({ isActive }) =>
            isActive ? 'bg-white px-4 py-2 rounded shadow' : 'px-4 py-2'
          }
        >
          {tab.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Tabs;
