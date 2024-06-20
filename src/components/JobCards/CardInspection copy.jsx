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
  {
    title: 'Line 3',
    description: 'Description for Line 3',
    image: 'https://via.placeholder.com/150',
    link: '/dashboard/inspection/line3'
  },
  {
    title: 'Line 4',
    description: 'Description for Line 4',
    image: 'https://via.placeholder.com/150',
    link: '/dashboard/inspection/line4'
  },
  {
    title: 'Line 5',
    description: 'Description for Line 5',
    image: 'https://via.placeholder.com/150',
    link: '/dashboard/inspection/line5'
  },
  {
    title: 'Line 6',
    description: 'Description for Line 6',
    image: 'https://via.placeholder.com/150',
    link: '/dashboard/inspection/line6'
  },
  {
    title: 'Line 7',
    description: 'Description for Line 7',
    image: 'https://via.placeholder.com/150',
    link: '/dashboard/inspection/line7'
  },
  // Add more lines as needed
];

const CardOverview = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Head</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:w-11/12">
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
