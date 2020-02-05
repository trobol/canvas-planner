import React, { useState } from 'react';
import {
  Modal, Button, Form, Input,
} from 'semantic-ui-react';

const Login = () => {
  const [isLogin, setLogin] = useState(false);
  return (
    <Modal
      open={!isLogin}
    >
      <Modal.Header>Login</Modal.Header>
      <Modal.Content>
          This webiste does not work without a Canvas API.
        <Form>
          <Form.Field
            label="Access Token"
            control={Form.Input}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button>Sumbit</Button>
      </Modal.Actions>

    </Modal>
  );
};

export default Login;
