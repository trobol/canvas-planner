import React, { useState } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {
  Menu, CardGroup, Card, Statistic, Grid,
} from 'semantic-ui-react';
import { Line, Scatter } from 'react-chartjs-2';

import Home from './pages/Home';
import AssignmentsPanel from './pages/Assignments';

import PageViewer from './components/PageViewer';
import Calendar from './pages/Calendar';

import Charts from './pages/Charts';


const pages = {
  Home: <Home />,
  AssignmentsPanel: <AssignmentsPanel />,
  CalendarPanel: <Calendar />,
  Charts: <Charts />
};

function App() {
  return (
    <PageViewer panels={pages} />
  );
}

export default App;
