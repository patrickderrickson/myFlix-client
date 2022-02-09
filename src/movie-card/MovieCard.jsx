import React, { Component } from 'react';
class MovieCard extends Component {
    state = {  } 
    render() { 
        const { movie, onMovieClick } = this.props;
    return <div className="movie-card" onClick={() => { onMovieClick(movie); }}>{movie.Title}</div>;
    }
}
 
export default MovieCard;