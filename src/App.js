import React, { useState } from 'react';
import './App.css';

import 'semantic-ui-css/semantic.min.css';
import { Menu } from 'semantic-ui-react';


function App() {
  const [page] = useState('login');
  return (
    <div className="App">

      <Menu pointing secondary>
        <Menu.Item
          name="home"
        />
        <Menu.Item
          name="messages"
        />
        <Menu.Item
          name="friends"
        />
        <Menu.Menu position="right">
          <Menu.Item
            name="logout"
          />
        </Menu.Menu>
      </Menu>

      

    </div>
  );
}

export default App;
