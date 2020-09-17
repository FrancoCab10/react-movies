import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import styles from './Login.module.scss';

const Login = ({ session, onDoLogin }) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [userValidation, setUserValidation] = useState('');
  const [passwordValidation, setPasswordValidation] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (session) history.push('/movies');
  }, [session, history]);
  
  const handleUserInput = (e) => setUser(e.target.value);
  const handlePasswordInput = (e) => setPassword(e.target.value);
  const handleDoLogin = () => {
    if (validateForm()) {
      onDoLogin(user, password);
    }
  }

  const validateForm = () => {
    if (user === '') setUserValidation('Complete the user field');
    else setUserValidation('');
    if (password === '') setPasswordValidation('Complete the password field');
    else setPasswordValidation('');
    
    return !(user === '' || password === '');
  }

  return (
    <div className={styles.Login}>
      <div className={`${styles['login-form']} shadow-lg`}>
        <h1 className="mb-3">Log in</h1>

        {session === false && (
          <Row>
            <Col>
            <Alert variant="danger">
              Invalid user or password.
            </Alert>
            </Col>
          </Row>
        )}
        <Row>
          <Col>
            <Form.Group controlId="user">
              <Form.Label>User</Form.Label>
              <Form.Control
                type="text"
                value={user}
                onChange={handleUserInput}
                isInvalid={userValidation}
              />
              <Form.Control.Feedback type="invalid">{userValidation}</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={handlePasswordInput}
                isInvalid={passwordValidation}
              />
              <Form.Control.Feedback type="invalid">{passwordValidation}</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col><Button block variant="secondary" onClick={handleDoLogin}>Enter</Button></Col>
          <Col><Button block variant="outline-primary" as={Link} to="/">Cancel</Button></Col>
        </Row>
      </div>
    </div>
  );
};

Login.propTypes = {
  session: PropTypes.oneOfType([ PropTypes.object, PropTypes.bool ]),
  onDoLogin: PropTypes.func
};

Login.defaultProps = {
  session: null,
  onDoLogin: () => {}
};

export default Login;