import React, { useState } from 'react';
import './App.css';

import 'semantic-ui-css/semantic.min.css';
import { Menu } from 'semantic-ui-react';

import Login from './panels/Login';
import AssignmentsPanel from './panels/Assignments';

import PanelViewer from './components/PanelViewer';

const token = "3~YyVoc59O3AwC7eXrVqXmKZdC9oVZwyHQ8VKatJXOYGPZe18W1zVPeg8qKzyRMNfl";

const panels = {Login:<Login/>, AssignmentsPanel: <AssignmentsPanel/>};
  


function App() {
  return (
      <PanelViewer panels={panels}/>
  );
}

export default App;
