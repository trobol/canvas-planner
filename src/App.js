import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import PageViewer from './components/PageViewer';

import {
  Home, AssignmentsPanel, Calendar, Charts, Login,
} from './pages';


const pages = {
  Home: <Home />,
  AssignmentsPanel: <AssignmentsPanel />,
  CalendarPanel: <Calendar />,
  Charts: <Charts />,
  Login: <Login />,
};

function App() {
  return (
    <PageViewer pages={pages} />
  );
}

export default App;
