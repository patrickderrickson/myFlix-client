import React, { Component } from 'react';;
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import '../movie-card/MovieCard.scss';

class MovieCard extends Component {
    state = {  } 
    render() { 
        const { movie, onMovieClick } = this.props;
        return (
          <Card>
            <Card.Img variant="top" src={"img/"+ movie.ImagePath} />
            <Card.Body>
              <Card.Title>{movie.Title}</Card.Title>
              <Card.Text>{movie.Description}</Card.Text>
              <Button onClick={() => onMovieClick(movie)} variant="link">Open</Button>
            </Card.Body>
          </Card>
        );
    }
}
 
export default MovieCard;