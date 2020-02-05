import React from 'react';
import { Grid, Card } from 'semantic-ui-react';

import './Calendar.css';

const dayNames = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
	'Sunday',
];

const Calendar = () => {
	const days = [];
	for (let i = 0; i < 7; i += 1) {
		const array = new Array(24);
		for (let j = 0; j < 24; j += 1) { array[j] = []; }
		days.push(array);
	}

	for (let i = 0; i < 6; i += 1) {
		const day = Math.floor(Math.random() * 7);
		const hour = Math.floor(Math.random() * 24);
		const length = (1 + Math.random() * 3.0);
		days[day][hour].push({
			name: 'Assignment', start: Date.now(), end: new Date((new Date()).getTime() + length * 60 * 60 * 1000), length,
		});
	}
	console.log(days);
	return (
		<Grid className="calendar" stretched style={{ height: '100%' }} columns={7} divided>
			{days.map((hours, day) => (
				<Grid.Column key={day} stretched>
					<Grid.Row>{dayNames[day]}</Grid.Row>
					{console.log(hours)}
					{hours.map((events, hour) => (
						<Grid.Row key={`${day}${hour}`}>

							{events.map((event, index) => (
								<Card
									style={{
										color: 'white', height: `${event.length * 100}%`, backgroundColor: `#${(hour * 1000.0 + day * 20000.0).toString(16).padStart(6, '0')}`,
									}}
									className="event"
								>
									<p>{event.name}</p>

								</Card>
							))}

						</Grid.Row>
					))}

				</Grid.Column>
			))}
		</Grid>
	);
};


export default Calendar;
