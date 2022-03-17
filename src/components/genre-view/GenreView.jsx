import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

import '../genre-view/GenreView.scss';



class GenreView extends Component {
    state = { genre: {}} 
     Name = 
      location.href.split("genres/")
      [1]
      constructor (){
        console.log(this.props)
        console.log("Hello World")
      }
    componentDidMount(){
      console.log(this.Name)
      axios.get('https://frozen-sierra-28921.herokuapp.com/movies/genre/' + "Action")
        .then(response => {
          console.log(response)
          this.setState({
            genre: response.data
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
              <Card.Title>{this.state.genre.Name}</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        );
    }
}


 
export default GenreView;