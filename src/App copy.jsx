// app.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthMiddleware from './utils/AuthMiddleware';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Overview from './components/Dashboard/Overview';
import PendingJobs from './components/Dashboard/PendingJobs';
import NewOverview from './components/NewJobCards/NewOverview';
import NewPendingJobs from './components/NewJobCards/NewPendingJobs';
import JobCards from './pages/JobCards';
import NewJobCards from './pages/NewJobCards';
import CardOverview from './components/JobCards/CardInspection';
import InspectionDetails from './components/Inspections/InspectionDetails'; // Import the new component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<AuthMiddleware element={Dashboard} roles={['admin']} />}>
          <Route path="overview" element={<Overview />} />
          <Route path="pending-jobs" element={<PendingJobs />} />
        </Route>

        <Route path="/newcards" element={<AuthMiddleware element={NewJobCards} roles={['admin']} />}>
          <Route path="newoverview" element={<NewOverview />} />
          <Route path="new-pending-jobs" element={<NewPendingJobs />} />
        </Route>

        <Route path="/cards" element={<AuthMiddleware element={JobCards} roles={['admin']} />}>
          <Route path="overview" element={<CardOverview />} />
          <Route path="createCard" element={<PendingJobs />} />
        </Route>

   

        <Route path="/inspections" element={<AuthMiddleware element={JobCards} roles={['admin']} />}>
          <Route path="overview/:lineId" element={<InspectionDetails />} /> {/* New route for Inspection Details */}
        </Route>

        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
