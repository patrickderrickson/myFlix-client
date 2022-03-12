import React, {Component} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

import '../user-view/UserView.scss';

class UserView extends Component {
    state = { 
        Username: '',
        Password: '',
        Email: '',
        Birthday: ''
     } 
     onDeleteUser() {
        const Username = localStorage.getItem('user');
        const token = localStorage.getItem('token');

        axios
            .delete(`https://frozen-sierra-28921.herokuapp.com/users/${Username}`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((response) => {
                console.log(response);
                alert("Profile deleted");
                localStorage.removeItem('user');
                localStorage.removeItem('token');
                window.open('/', '_self');
            })
            .catch(function (error) {
                console.log(error);
            });
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
            <Container>
           
            <Form>
                <h3>Edit Information</h3>
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
          <Row>
                <h3>Delete Account</h3>
                <Button className="ml-3" variant="secondary" onClick={() => this.onDeleteUser()}>Delete User</Button>
          </Row>
          </Container>
            );
          }
        }
 
export default UserView;