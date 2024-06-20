import React from 'react';
import CardComponent from '../Common/CardComponent';

const ProductionLines = ({ lines }) => {
  return (
    <div>
      {lines.map((line, index) => (
        <div key={index} className="mb-4">
          <h2 className="text-xl font-semibold">{line.line}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {line.cards.map((card) => (
              <CardComponent
                key={card.id}
                title={card.title}
                description={card.description}
                image={card.image}
                link={`/inspections/overview/${card.id}`}
                status={card.status}
                okCount={card.okCount}
                ngCount={card.ngCount}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductionLines;
