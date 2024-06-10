import React from 'react';
import CardComponent from './CardComponent';

const productionLines = [
  {
    title: 'Line 1',
    description: 'Description for Line 1',
    image: 'https://via.placeholder.com/150',
    link: '/dashboard/inspection/line1'
  },
  {
    title: 'Line 2',
    description: 'Description for Line 2',
    image: 'https://via.placeholder.com/150',
    link: '/dashboard/inspection/line2'
  },
  // Add more lines as needed
];

const CardOverview = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Production Lines Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productionLines.map((line, index) => (
          <CardComponent
            key={index}
            title={line.title}
            description={line.description}
            image={line.image}
            link={line.link}
          />
        ))}
      </div>
    </div>
  );
};

export default CardOverview;
