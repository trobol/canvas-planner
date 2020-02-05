import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {
  CardGroup, Card, Statistic, Grid,
} from 'semantic-ui-react';
import { Line, Scatter } from 'react-chartjs-2';

const pointStyle = [
  '#232f49',
  '#1d2c2e',
  '#382021',
  '#1a2644',
  '#2a232e',
  '#08214e',
  '#161a46',
];

const lineStyle = [
  '#3743af',
  '#1654c3',
  '#6b5874',
  '#4161aa',
  '#8d5153',
  '#4a6f75',
  '#5976b8',
]

const datasets = [{
  label: 'CSI-330-01',

  data: [
    100,
    96,
    85,
    65,
    81,
  ],
  fill: false,
}, {
  label: 'WEB-320-01',
  fill: false,
  data: [
    100,
    92,
    90,
    83,
    85,
  ],
}]
const data = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: datasets.map((dataset, index) => ({ 
    ...dataset,
    backgroundColor: pointStyle[index],
    borderColor: lineStyle[index],
  })),
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

const Charts = () => (
  <>
    <CardGroup itemsPerRow={5}>
      <Card centered>
        <Card.Content textAlign="center">
          <Card.Header>CSI-330-01</Card.Header>
        </Card.Content>
        <Card.Content textAlign="center">
          <Card.Description>
            <Statistic.Group>
              <Statistic>
                <Statistic.Value>92</Statistic.Value>
                <Statistic.Label>Current Grade</Statistic.Label>
              </Statistic>
              <Statistic>
                <Statistic.Value>95</Statistic.Value>
                <Statistic.Label>Target Grade</Statistic.Label>
              </Statistic>
              <Statistic>
                <Statistic.Value>97</Statistic.Value>
                <Statistic.Label>Needed Grades</Statistic.Label>
              </Statistic>
            </Statistic.Group>


          </Card.Description>
        </Card.Content>
      </Card>
      <Card centered>
        <Card.Content textAlign="center">
          <Card.Header>WEB-320-01</Card.Header>
        </Card.Content>
        <Card.Content textAlign="center">
          <Card.Description>
            <Statistic.Group>
              <Statistic>
                <Statistic.Value>85</Statistic.Value>
                <Statistic.Label>Grade</Statistic.Label>
              </Statistic>
              <Statistic>
                <Statistic.Value>80</Statistic.Value>
                <Statistic.Label>Target Grade</Statistic.Label>
              </Statistic>
              <Statistic>
                <Statistic.Value>75</Statistic.Value>
                <Statistic.Label>Needed Grades</Statistic.Label>
              </Statistic>
            </Statistic.Group>
          </Card.Description>
        </Card.Content>
      </Card>
    </CardGroup>
    <Grid>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Line data={data} options={options} />
        </Grid.Column>
        <Grid.Column>
          <Scatter
            data={{
              datasets: [{
                label: 'Grades',
                data: Array.from({ length: 40 }, () => ({
                  x: Math.floor(Math.random() * 15) + 1,
                  y: Math.floor(Math.random() * 40) + 60,
                })),
                backgroundColor: '#00ffcc',
                borderColor: '#00ff00',
              }],
            }}
            options={{
              responsive: true,
              title: {
                display: true,
                text: 'Grades By Week',
              },
              scales: {
                xAxes: [{
                  type: 'linear',
                  position: 'bottom',
                }],
              },
            }}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </>
);

export default Charts;
