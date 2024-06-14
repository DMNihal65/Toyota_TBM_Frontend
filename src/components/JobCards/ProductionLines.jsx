// components/JobCards/ProductionLines.jsx
import React from 'react';
import CardComponent from './CardComponent';

const ProductionLines = ({ productionData }) => {
  return (
    <div className="p-4 ">
      {Object.keys(productionData).map((line, index) => (
        <div key={index} className="mb-8 bg-sky-100 p-4 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">{line}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Object.keys(productionData[line].cards).map((cardId) => {
              const card = productionData[line].cards[cardId];
              return (
                <CardComponent
                  key={cardId}
                  cardId={cardId}
                  machineName={card.machinename}
                  details={card.details}
                  state={card.state}
                  color={card.Color}
                  totalInspections={card.total_inspections}
                  link={`/inspections/overview/${cardId}`}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductionLines;
