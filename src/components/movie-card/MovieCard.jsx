import React, { Component } from 'react';
<<<<<<< Updated upstream
=======
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import '../movie-card/MovieCard.scss';

>>>>>>> Stashed changes
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