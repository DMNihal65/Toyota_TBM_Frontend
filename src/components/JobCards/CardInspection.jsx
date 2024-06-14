// components/JobCards/CardOverview.jsx
import React from 'react';
import ProductionLines from './ProductionLines';

// Sample data structure
const productionData = {
  Head: {
    cards: {
      1: { machinename: "TB140", details: "sample details", state: "OK", Color: "Green", total_inspections: 4 },
      2: { machinename: "TB130", details: "sample details 2", state: "NG", Color: "Yellow", total_inspections: 2 },
      3: { machinename: "TB140", details: "sample details", state: "OK", Color: "Green", total_inspections: 4 },
      4: { machinename: "TB130", details: "sample details 2", state: "NG", Color: "Yellow", total_inspections: 2 },
      5: { machinename: "TB140", details: "sample details", state: "OK", Color: "Green", total_inspections: 4 },
      6: { machinename: "TB130", details: "sample details 2", state: "NG", Color: "Yellow", total_inspections: 2 },
      7: { machinename: "TB140", details: "sample details", state: "OK", Color: "Green", total_inspections: 4 },
      8: { machinename: "TB130", details: "sample details 2", state: "NG", Color: "Yellow", total_inspections: 2 },
      9: { machinename: "TB140", details: "sample details", state: "OK", Color: "Green", total_inspections: 4 },
      10: { machinename: "TB130", details: "sample details 2", state: "NG", Color: "Yellow", total_inspections: 2 },
      11: { machinename: "TB140", details: "sample details", state: "OK", Color: "Green", total_inspections: 4 },
      12: { machinename: "TB130", details: "sample details 2", state: "NG", Color: "Yellow", total_inspections: 2 },
      13: { machinename: "TB140", details: "sample details", state: "OK", Color: "Green", total_inspections: 4 },
      14: { machinename: "TB130", details: "sample details 2", state: "NG", Color: "Yellow", total_inspections: 2 },
    },
  },
  Crank: {
    cards: {
      1: { machinename: "TB140", details: "sample details", state: "OK", Color: "Green", total_inspections: 4 },
      2: { machinename: "TB130", details: "sample details 2", state: "NG", Color: "Yellow", total_inspections: 2 },
      3: { machinename: "TB140", details: "sample details", state: "OK", Color: "Green", total_inspections: 4 },
      4: { machinename: "TB130", details: "sample details 2", state: "NG", Color: "Yellow", total_inspections: 2 },
      5: { machinename: "TB140", details: "sample details", state: "OK", Color: "Green", total_inspections: 4 },
      6: { machinename: "TB130", details: "sample details 2", state: "NG", Color: "Yellow", total_inspections: 2 },
      7: { machinename: "TB140", details: "sample details", state: "OK", Color: "Green", total_inspections: 4 },
      8: { machinename: "TB130", details: "sample details 2", state: "NG", Color: "Yellow", total_inspections: 2 },
      9: { machinename: "TB140", details: "sample details", state: "OK", Color: "Green", total_inspections: 4 },
      10: { machinename: "TB130", details: "sample details 2", state: "NG", Color: "Yellow", total_inspections: 2 },
    },
  },
  Block: {
    cards: {
      1: { machinename: "TB140", details: "sample details", state: "OK", Color: "Green", total_inspections: 4 },
      2: { machinename: "TB130", details: "sample details 2", state: "NG", Color: "Yellow", total_inspections: 2 },
      3: { machinename: "TB140", details: "sample details", state: "OK", Color: "Green", total_inspections: 4 },
      4: { machinename: "TB130", details: "sample details 2", state: "NG", Color: "Yellow", total_inspections: 2 },
      5: { machinename: "TB140", details: "sample details", state: "OK", Color: "Green", total_inspections: 4 },
    
    },
  },
};

const CardOverview = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Production Lines Overview</h1>
      <ProductionLines productionData={productionData} />
    </div>
  );
};

export default CardOverview;
