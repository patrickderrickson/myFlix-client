import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

import '../director-view/DirectorView.scss';

class DirectorView extends Component {
    state = {  } 
    render() { 
        const { director } = this.props;
        return (
          <Card>
            <Card.Body>
              <Card.Title>{director.Name}</Card.Title>
              <Card.Text>{director.Bio}</Card.Text>
              <Card.Text>{director.Birth}</Card.Text>
            </Card.Body>
          </Card>
        );
    }
}

DirectorView.propTypes = {
    director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.string.isRequired,
    }).isRequired,
  };
 
export default DirectorView;