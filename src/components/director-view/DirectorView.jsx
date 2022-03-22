import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

import '../director-view/DirectorView.scss';



class DirectorView extends Component {
    state = { director: {}} 
     Name = 
      location.href.split("directors/")
      [1]
    componentDidMount(){
      console.log(this.Name)
      axios.get('https://frozen-sierra-28921.herokuapp.com/movies/director/' + this.Name, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      })
        .then(response => {
          console.log(response)
          this.setState({
            director: response.data[0].Director
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
    render() { 
        return (
          <Card>
            <Card.Body>
              <Card.Title>{this.state.director.Name}</Card.Title>
              <Card.Text>{this.state.director.Bio}</Card.Text>
              <Card.Text>Born: {this.state.director.Birth}</Card.Text>
            </Card.Body>
          </Card>
        );
    }
}

 
export default DirectorView;