import React, { useState } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {
  Menu, CardGroup, Card, Statistic, Grid,
} from 'semantic-ui-react';
import { Line, Scatter } from 'react-chartjs-2';


function App() {
  const [page] = useState('login');
  return (
    <div className="App">
      <Menu pointing secondary>
        <Menu.Item
          name="home"
        />
        <Menu.Item
          name="planner"
        />
        <Menu.Item
          name="stats"
        />
        <Menu.Menu position="right">
          <Menu.Item
            name="logout"
          />
        </Menu.Menu>
      </Menu>
    </div>
  );
}

export default App;
