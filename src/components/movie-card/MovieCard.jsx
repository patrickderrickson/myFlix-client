import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

MovieCard.propTypes = {
    movie: PropTypes.shape({
      Title: PropTypes.string,
      Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
  };
 
export default MovieCard;