import React, { useState } from 'react';
import { Menu, Container, Segment } from 'semantic-ui-react';

const PanelViewer = ({ panels }) => {
    const [activePanel, setActivePanel] = useState('');
  
  const handleItemClick = (e, { name }) => setActivePanel(name);
  const keys = Object.keys(panels)
  return (
    <div className="App">

      <Menu pointing secondary>
        {keys.map(key => 
          <Menu.Item onClick={handleItemClick} key={key} name={key} active={activePanel == key}/>
        )}
      </Menu>
      <Segment>
      
        {panels[activePanel]}
        
      </Segment>
    </div>
  );
};


export default PanelViewer;
