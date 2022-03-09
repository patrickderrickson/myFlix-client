import React, { Component, useState } from 'react';
import PropTypes from "prop-types";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import './RegistrationView.scss';

export function RegistrationView(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ Birthday, setBirthday] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password, email, Birthday);
        axios.post('https://frozen-sierra-28921.herokuapp.com/users', {
      Username: username,
      Password: password,
      Email: email,
      Birthday: Birthday
    })
    .then(response => {
      const data = response.data;
      props.OnRegistration(true, username);
    })
    .catch(e => {
    });
        /* Send a request to the server for authentication */
        
    };
    return (
      <Form>
      <Form.Group controlId="formUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="formBirthday">
        <Form.Label>Birthday:</Form.Label>
        <Form.Control type="date" value={Birthday} onChange={e => setBirthday(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Register
      </Button>
    </Form>
      );
    }

    RegistrationView.propTypes = {
      onRegister: PropTypes.func.isRequired
    };
