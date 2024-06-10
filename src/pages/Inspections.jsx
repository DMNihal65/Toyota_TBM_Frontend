import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Common/Navbar';
import Breadcrumbs from '../components/Common/Breadcrumbs';
import Tabs from '../components/Common/Tabs';


const Inspections = () => {
  const tabs = [
    { name: 'CardOverview', route: 'overview' },
    { name: 'Pending Jobs', route: 'pending-jobs' },
  ];

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Cards', path: '/cards/overview' },
  ];

  return (
    <div>
      <Navigation />
      <div className="px-4 py-2">
        <Breadcrumbs crumbs={crumbs} />
      </div>
      
    </div>
  );
};

export default Inspections;
