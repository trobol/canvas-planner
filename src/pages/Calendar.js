import React from 'react';
import { Grid, Card, Modal } from 'semantic-ui-react';

import './Calendar.css';
import AssignmentPopup from '../components/AssignmentPopup';

const dayNames = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const assignments = [
  {
    id: 4,
    name: 'Essay',
    course_id: 123,
    due_at: '2012-07-01T10:00:00-06:00',
    time_remaining: 5,
    class_name: 'COR-234-09',
  },
  {
    id: 5,
    name: 'some assignment',
    course_id: 123,
    due_at: '2012-07-05T13:59:00-06:00',
    time_remaining: 1,
    class_name: 'CSI-330-01',
  },
  {
    id: 6,
    name: 'another assignment',
    course_id: 123,
    due_at: '2012-07-02T03:15:00-06:00',
    time_remaining: 0.3,
    class_name: 'EDG-240',
  },
  {
    id: 7,
    name: 'math',
    course_id: 123,
    due_at: '2012-07-03T23:01:00-06:00',
    time_remaining: 1.2,
    class_name: 'Math',
  },
];
const Calendar = () => {
  const days = [];
  for (let i = 0; i < 7; i += 1) {
    const array = new Array(24);
    for (let j = 0; j < 24; j += 1) { array[j] = []; }
    days.push(array);
  }
  for (const a of assignments) {
    a.date = new Date(a.due_at);
    a.time = 0;
    days[a.date.getDay()][a.date.getHours()].push({ ...a, due: true });
  }

  for (let i = 0; i < 6; i += 1) {
    const assignmentIndex = Math.floor(Math.random() * (assignments.length - 1));
    const assignment = assignments[assignmentIndex];
    const date = new Date(assignment.due_at);
    const day = Math.max(0, date.getDay() - Math.floor(Math.random() * 2));
    const hour = Math.max(0, date.getHours() - Math.floor(Math.random() * 24));
    const length = (1 + Math.random() * 3.0);

    assignment.time += length;
    days[day][hour].push({
      assignment, date: new Date((new Date()).getTime() + length * 60 * 60 * 1000), length,
    });
  }

  console.log(days);
  return (
    <Grid className="calendar" stretched style={{ height: '100%' }} columns={7} divided>
      {days.map((hours, day) => (
        <Grid.Column key={day} stretched>
          <Grid.Row>{dayNames[day]}</Grid.Row>
          {hours.map((events, hour) => (
            <Grid.Row key={`${day}${hour}`}>
              <span className="label">{hour % 12 + 1 + (hour > 10 ? 'pm' : 'am')}</span>
              {events.map((event, index) => {
                const assignment = event.assignment || event;
                console.log(assignment);
                const backgroundColor = `#${(assignment.date.getHours() * 1000.0 + assignment.date.getDay() * 20000.0).toString(16).padStart(6, '0')}`; return (
                  <AssignmentPopup
                    backgroundColor={backgroundColor}
                    assignment={assignment}
                    trigger={(
                      <Card
                        style={{
                          top: index * 20,
                          color: event.due ? 'white' : 'black',
                          height: `${event.length * 100}%`,
                          backgroundColor: event.due ? backgroundColor : '',
                          border: `1.5px solid ${backgroundColor}`,
                        }}
                        className="event"
                      >
                        <p>
                          {`${event.due ? 'Due: ' : ''}${assignment.name}`}
                          <span className="time">{`${event.date.getHours() % 12 + 1}:${event.date.getMinutes().toString().padStart(2, '0')}${event.date.getHours() > 10 ? 'pm' : 'am'}`}</span>
                        </p>


                      </Card>
                    )}
                  />

                );
              })}

            </Grid.Row>
          ))}

        </Grid.Column>
      ))}
    </Grid>
  );
};


export default Calendar;
