import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';

const Tabs = ({ tabs }) => {
  return (
    <div className="flex space-x-4 bg-gray-200 p-2 rounded-lg shadow-md">
      {tabs.map((tab, index) => (
        <NavLink
          key={index}
          to={tab.route}
          className={({ isActive }) =>
            isActive
              ? 'relative px-4 py-2 text-blue-600 font-semibold'
              : 'px-4 py-2 text-gray-600 font-medium'
          }
        >
          {({ isActive }) => (
            <>
              {tab.name}
              {isActive && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 bottom-0 h-1 bg-blue-600 rounded-full"
                  initial={false}
                  transition={{ duration: 0.3 }}
                />
              )}
            </>
          )}
        </NavLink>
      ))}
    </div>
  );
};

export default Tabs;
