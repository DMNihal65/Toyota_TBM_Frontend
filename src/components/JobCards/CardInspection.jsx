import React from 'react';
import ProductionLines from './ProductionLineCards';

const productionLinesData = [
  {
    line: 'Head',
    cards: [
      { title: 'OP130', description: 'Card Description', image: 'https://img.icons8.com/sf-black/64/network-cable.png', id: 'cardhead1', status: 'ng', okCount: 2, ngCount: 0 },
      { title: 'OP130', description: 'Card Description', image: 'https://img.icons8.com/sf-black/64/network-cable.png', id: 'cardhead2', status: 'default', okCount: 2, ngCount: 0 },
      { title: 'OP130', description: 'Card Description', image: 'https://img.icons8.com/sf-black/64/network-cable.png', id: 'cardhead3', status: 'ok', okCount: 2, ngCount: 1 },
      { title: 'OP130', description: 'Card Description', image: 'https://img.icons8.com/sf-black/64/network-cable.png', id: 'cardhead4', status: 'ng', okCount: 1, ngCount: 0 },
      { title: 'OP130', description: 'Card Description', image: 'https://img.icons8.com/sf-black/64/network-cable.png', id: 'cardhead5', status: 'default', okCount: 1, ngCount: 0 },
      { title: 'OP130', description: 'Card Description', image: 'https://img.icons8.com/sf-black/64/network-cable.png', id: 'cardhead6', status: 'ok', okCount: 1, ngCount: 1 },
    ]
  },
  {
    line: 'Crank',
    cards: [
      { title: 'OP130', description: 'Card Description', image: 'https://img.icons8.com/sf-black/64/network-cable.png', id: 'cardcrank1', status: 'default', okCount: 2, ngCount: 0 },
      { title: 'OP130', description: 'Card Description', image: 'https://img.icons8.com/sf-black/64/network-cable.png', id: 'cardcrank2', status: 'ng', okCount: 2, ngCount: 0 },
      { title: 'OP130', description: 'Card Description', image: 'https://img.icons8.com/sf-black/64/network-cable.png', id: 'cardcrank3', status: 'ok', okCount: 2, ngCount: 1 },
      { title: 'OP130', description: 'Card Description', image: 'https://img.icons8.com/sf-black/64/network-cable.png', id: 'cardcrank4', status: 'default', okCount: 1, ngCount: 0 },
      { title: 'OP130', description: 'Card Description', image: 'https://img.icons8.com/sf-black/64/network-cable.png', id: 'cardcrank5', status: 'ng', okCount: 1, ngCount: 0 },
      { title: 'OP130', description: 'Card Description', image: 'https://img.icons8.com/sf-black/64/network-cable.png', id: 'cardcrank6', status: 'ok', okCount: 1, ngCount: 1 },
    ]
  },
];

const CardInspection = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">CardOverview</h1>
      <ProductionLines lines={productionLinesData} />
    </div>
  );
};

export default CardInspection;
