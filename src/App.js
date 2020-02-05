import React, { useState } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Menu, Modal, Button } from 'semantic-ui-react';
import Charts from './pages/Charts';

function App() {
  const [page, setPage] = useState('home');
  const [isLogin, setLogin] = useState(false);
  const handleClick = (e, { name }) => setPage(name);
  return (
    <div className="App">
      <Modal
        open={!isLogin}
      >
        <Modal.Header>Login</Modal.Header>
        <Modal.Content>
          This is Content
        </Modal.Content>
        <Modal.Actions>
          <Button>Sumbit</Button>
        </Modal.Actions>

      </Modal>
      {isLogin && (
        <>
          <Menu pointing secondary>
            <Menu.Item
              name="home"
              active={page === 'home'}
              onClick={handleClick}
            />
            <Menu.Item
              name="planner"
              active={page === 'planner'}
              onClick={handleClick}
            />
            <Menu.Item
              name="stats"
              active={page === 'stats'}
              onClick={handleClick}
            />
            <Menu.Menu position="right">
              <Menu.Item
                name="logout"
              />
            </Menu.Menu>
          </Menu>
          {page === 'home' && <div>home</div>}
          {page === 'planner' && <div> planner </div>}
          {page === 'stats' && <Charts />}
        </>
      )}
    </div>
  );
}

export default App;
