import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';

const PageViewer = ({ pages }) => {
  const [activePage, setActivePage] = useState('AssignmentsPage');

  const handleItemClick = (e, { name }) => setActivePage(name);
  const keys = Object.keys(pages);
  return (
    <div className="App">
      <style jsx>
        {`
          .App {
            display: grid;
            grid-row-width:100vw;
          }
          .page {
            display:inline;
            width:100vw;
            height:100vh;
            padding: 20px;
          }
        `}
      </style>
      <Menu pointing secondary>
        {keys.map((key) => <Menu.Item onClick={handleItemClick} key={key} name={key} active={activePage === key} />)}
      </Menu>
      <div className="page">
        {pages[activePage]}
      </div>

    </div>
  );
};


export default PageViewer;
