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
];

const gradesByWeek = (length) => Array.from({ length }, () => ({
  x: Math.floor(Math.random() * 15) + 1,
  y: Math.floor(Math.random() * 40) + 60,
}));

const gradesByMonth = (months) => Array.from({ length: months.length }, () => Math.floor(Math.random() * 40) + 60);

const months = ['January', 'February', 'March', 'April', 'May'];


const classes = [
  {
    name: 'CSI-330-01',
    gradesByWeek: gradesByWeek(15),
    gradesByMonth: gradesByMonth(months),
  },
  {
    name: 'WEB-320-01',
    gradesByWeek: gradesByWeek(15),
    gradesByMonth: gradesByMonth(months),
  },
  {
    name: 'CSI-480-01',
    gradesByWeek: gradesByWeek(15),
    gradesByMonth: gradesByMonth(months),
  },
  {
    name: 'CSI-300-01',
    gradesByWeek: gradesByWeek(15),
    gradesByMonth: gradesByMonth(months),
  },
  {
    name: 'CSI-340-01',
    gradesByWeek: gradesByWeek(15),
    gradesByMonth: gradesByMonth(months),
  },
];

const datasets = classes.map((c, index) => ({
  label: c.name,
  data: c.gradesByMonth,
  fill: false,
  backgroundColor: pointStyle[index],
  borderColor: lineStyle[index],
}));

const data = {
  labels: months,
  datasets,
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
      {classes.map((c) => (
        <Card centered>
          <Card.Content textAlign="center">
            <Card.Header>{c.name}</Card.Header>
          </Card.Content>
          <Card.Content textAlign="center">
            <Card.Description>
              <Statistic>
                <Statistic.Value>{c.gradesByMonth[4]}</Statistic.Value>
                <Statistic.Label>Current Grade</Statistic.Label>
              </Statistic>
            </Card.Description>
          </Card.Content>
        </Card>
      ))}
    </CardGroup>
    <Grid>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Line data={data} options={options} />
        </Grid.Column>
        <Grid.Column>
          <Scatter
            data={{
              datasets: classes.map((c, index) => ({
                label: c.name,
                data: c.gradesByWeek,
                backgroundColor: pointStyle[index],
                borderColor: lineStyle[index],
              })),
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
