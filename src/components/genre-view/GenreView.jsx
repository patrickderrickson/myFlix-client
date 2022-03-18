import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

import '../genre-view/GenreView.scss';



class GenreView extends Component {
    state = { genre: {}} 
     Name = 
      location.href.split("genres/")
      [1]
    componentDidMount(){
      console.log(this.Name)
      axios.get('https://frozen-sierra-28921.herokuapp.com/movies/genre/' + this.Name, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      })
        .then(response => {
          console.log(response)
          this.setState({
            genre: response.data[0].Genre
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
              <Card.Text>{this.state.genre.Description}</Card.Text>
            </Card.Body>
          </Card>
        );
    }
}


 
export default GenreView;