import React from 'react';
import { Modal, Card } from 'semantic-ui-react';

const AssignmentPopup = ({ trigger, backgroundColor, assignment }) => (
    <Modal
        style={{ backgroundColor }}
        trigger={trigger}
    >
        <Modal.Header>{assignment.name}</Modal.Header>
        <Modal.Content>
            <Modal.Description>
                <h3>
                    Class: EDG-123
        </h3>
                <h3>
                    {`Due date:
          ${assignment.date.toString()}`}
                </h3>
                <h3>
                    {`Planned hours: 
          ${assignment.time.toFixed(2)}`}
                </h3>
            </Modal.Description>
        </Modal.Content>
    </Modal>
);


export default AssignmentPopup;
