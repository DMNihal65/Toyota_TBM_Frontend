// components/JobCards/CardComponent.jsx
import React from 'react';
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Meta } = Card;

const CardComponent = ({ cardId, machineName, details, state, color, totalInspections, link }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/inspections/overview/${cardId}`);
  };

  return (
    <Card
      hoverable
      onClick={handleCardClick}
      style={{ borderColor: color }}
      className="m-4 shadow-lg transition-transform transform hover:scale-105"
    >
      <Meta
        title={machineName}
        description={
          <div>
            <p>{details}</p>
            <p>{state}</p>
            <p>Total Inspections: {totalInspections}</p>
          </div>
        }
      />
    </Card>
  );
};

export default CardComponent;
