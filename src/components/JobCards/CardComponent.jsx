// pages/JobCards.jsx
import React from 'react';
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Meta } = Card;

const CardComponent = ({ title, description, image, link }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    // Extract the lineId from the link
    const lineId = link.split('/').pop();
    navigate(`/inspections/overview/${lineId}`);
  };

  return (
    <Card
      hoverable
      onClick={handleCardClick}
      cover={<img alt={title} src={image} />}
      className="m-4 shadow-lg transition-transform transform hover:scale-105"
    >
      <Meta title={title} description={description} />
    </Card>
  );
};

export default CardComponent;
