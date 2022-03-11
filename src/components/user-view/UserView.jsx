import React, {Component} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import '../user-view/UserView.scss';

class UserView extends Component {
    state = { 
        Username: '',
        Password: '',
        Email: '',
        Birthday: ''
     } 
     handleChange = (e) => {
         this.state(
             {[e.currentTarget.name]: e.currentTarget.value} )}

     handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password, email, Birthday);
        axios.put('https://frozen-sierra-28921.herokuapp.com/users/'+localStorage.getItem('user'), {
      Username: username,
      Password: password,
      Email: email,
      Birthday: Birthday
    })
    .then(response => {
        alert("Changes made")
    })
    .catch(e => {
    });
        /* Send a request to the server for authentication */
        
    };
    render() { 
        console.log(JSON.parse(localStorage.getItem('userObj')))
        const user=JSON.parse(localStorage.getItem('userObj'))
        return (
            <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Username:</Form.Label>
              <Form.Control type="text" name="Username" value={user.Username}  />
            </Form.Group>
      
            <Form.Group controlId="formPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" name="Password" value={user.Password}  />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" name="Email" value={user.Email}  />
            </Form.Group>
            <Form.Group controlId="formBirthday">
              <Form.Label>Birthday:</Form.Label>
              <Form.Control type="date"  name="Birthday" value={user.Birthday}  />
            </Form.Group>
            <Button variant="primary" type="submit">
              Edit
            </Button>
          </Form>
            );
          }
        }
 
export default UserView;