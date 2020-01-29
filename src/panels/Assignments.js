import React, { useState } from 'react';
import { Card, List } from 'semantic-ui-react';

const AssignmentsPanel = () => {
	const assignments = [
		{name: "Assignment 1", due: new Date()}
	];
	
	return (
		<List items={assignments.map(({name, due}) => (
			<Card.Content>
		  
			<Card.Header>{name}</Card.Header>
			<Card.Meta>{due.getUTCDate()}</Card.Meta>
		  </Card.Content>
	   ))} />
		
	);
}

export default AssignmentsPanel;