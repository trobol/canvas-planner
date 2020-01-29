import React, { useState } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Menu } from 'semantic-ui-react';

import Chart from './components/Chart';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [{
    label: 'CSI-330-01',
    backgroundColor: '#00ffcc',
    borderColor: '#00ff00',
    data: [
      100,
      96,
      85,
      65,
      81,
    ],
    fill: false,
  }, {
    label: 'My Second dataset',
    fill: false,
    backgroundColor: '#ffffcc',
    borderColor: '#ffff33',
    data: [
      100,
      92,
      90,
      83,
      85,
    ],
  }],
};

const options = {
  responsive: true,
  title: {
    display: true,
    text: 'Grades By Month',
  },
  tooltips: {
    mode: 'index',
    intersect: false,
  },
  hover: {
    mode: 'nearest',
    intersect: true,
  },
  scales: {
    xAxes: [{
      display: true,
      scaleLabel: {
        display: true,
        labelString: 'Month',
      },
    }],
    yAxes: [{
      display: true,
      scaleLabel: {
        display: true,
        labelString: 'Grade',
      },
    }],
  },
};

function App() {
  const [page] = useState('login');
  return (
    <div className="App">

      <Menu pointing secondary>
        <Menu.Item
          name="home"
        />
        <Menu.Item
          name="messages"
        />
        <Menu.Item
          name="friends"
        />
        <Menu.Menu position="right">
          <Menu.Item
            name="logout"
          />
        </Menu.Menu>
      </Menu>

      <Chart type="line" data={data} options={options} />

    </div>
  );
}

export default App;
