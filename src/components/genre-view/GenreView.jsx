import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

import '../genre-view/GenreView.scss';

class GenreView extends Component {
    state = {  } 
    render() { 
        const { genre } = this.props;
        return (
          <Card>
            <Card.Body>
              <Card.Title>{genre.Name}</Card.Title>
              <Card.Text>{genre.Description}</Card.Text>
            </Card.Body>
          </Card>
        );
    }
}

GenreView.propTypes = {
    genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
    }).isRequired,
  };
 
export default GenreView;