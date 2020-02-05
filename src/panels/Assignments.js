import React, { useState } from 'react';
import { Card, List, Icon } from 'semantic-ui-react';
import './Assignments.css';

/*
const assignment = {
	id: 4,
	name: 'some assignment',
	description: '<p>Do the following:</p>...',
	created_at: '2012-07-01T23:59:00-06:00',
	updated_at: '2012-07-01T23:59:00-06:00',
	due_at: '2012-07-01T23:59:00-06:00',
	lock_at: '2012-07-01T23:59:00-06:00',
	unlock_at: '2012-07-01T23:59:00-06:00',
	has_overrides: true,
	all_dates: null,
	course_id: 123,
};
*/
const AssignmentsPanel = () => {
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
			due_at: '2012-07-01T21:59:00-06:00',
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
			due_at: '2012-07-03T23:00:00-06:00',
			time_remaining: 1.2,
			class_name: 'Math',
		},
	];
	assignments.sort((a, b) => new Date(a.due_at) < new Date(b.due_at));
	const dates = {};
	assignments.forEach((assignment) => {
		const [date] = assignment.due_at.split('T');
		if (!dates[date]) dates[date] = [];
		dates[date].push(assignment);
	});
	return (
		<List>
			{Object.keys(dates).map((date, index) => (
				<List.Item>
					<List.Header>
						{(new Date(date).toDateString())}
					</List.Header>
					<List.List>
						{dates[date].map(({
							name, due_at, time_remaining, class_name,
						}) => {
							const date = new Date(due_at);
							// https://stackoverflow.com/a/8888498/8781351
							let hours = date.getHours();
							const daytime = hours < 13 && hours > 1;
							let minutes = date.getMinutes();
							const ampm = hours >= 12 ? 'PM' : 'AM';
							hours %= 12;
							hours = hours || 12;
							minutes = minutes < 10 ? `0${minutes}` : minutes;

							return (
								<List.Item>

									<div className="assignment-container">
										<span>
											<span style={{ width: 150, display: 'inline-block', borderRight: '1px solid' }}>
												{class_name}
												{' '}
											</span>
											<span style={{ paddingLeft: 10 }}>{name}</span>
										</span>
										<span className="assignment-time-remaining">
											<span>{time_remaining}</span>
										</span>
										<span className="assignment-time">
											{`${hours}:${minutes} ${ampm}`}
											<Icon name={daytime ? 'sun' : 'moon'} />
										</span>
									</div>
								</List.Item>
							);
						})}
					</List.List>
				</List.Item>
			))}
		</List>

	);
};

export default AssignmentsPanel;
