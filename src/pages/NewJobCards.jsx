import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Common/Navbar';
import Breadcrumbs from '../components/Common/Breadcrumbs';
import Tabs from '../components/Common/Tabs';
// import CardInspection from './CardInspection';

const JobCards = () => {
  const tabs = [
    { name: 'New CardOverview', route: 'newoverview' },
    { name: 'New Pending Jobs', route: 'new-pending-jobs' },
  ];

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Cards', path: '/newcards/newoverview' },
  ];

  return (
    <div>
      <Navigation />
      <div className="px-4 py-2">
        <Breadcrumbs crumbs={crumbs} />
      </div>
      <div className="px-4 py-2">
        <Tabs tabs={tabs} />
      </div>
      <div className="px-4 py-2 bg-gray-100">
        {/* <CardInspection/> */}
        <Outlet />
      </div>
    </div>
  );
};

export default JobCards;
