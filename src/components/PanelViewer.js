import React, { useState } from 'react';
import { Menu, Container, Segment } from 'semantic-ui-react';

const PanelViewer = ({ panels }) => {
  const [activePanel, setActivePanel] = useState('AssignmentsPanel');

  const handleItemClick = (e, { name }) => setActivePanel(name);
  const keys = Object.keys(panels);
  return (
    <div className="App">
      <style jsx>
        {`
          .App {
            display: grid;
            grid-row-width:100vw;
          }
          .panel {
            display:inline;
            width:100vw;
            height:100vh;
          }
        `}
      </style>
      <Menu pointing secondary>
        {keys.map((key) => <Menu.Item onClick={handleItemClick} key={key} name={key} active={activePanel == key} />)}
      </Menu>
      <div className="panel">
        {panels[activePanel]}
      </div>

    </div>
  );
};


export default PanelViewer;
