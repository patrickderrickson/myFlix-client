import React, { Component } from 'react';

import '../movie-view/MovieView.scss';

export class MovieView extends React.Component {

  keypressCallback(event) {
    console.log(event.key);
  }

  componentDidMount() {
    document.addEventListener('keypress', this.keypressCallback);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.keypressCallback);
  }
    render() { 
        const { movie, onBackClick } = this.props;
        return (<div className="movie-view">
        <div className="movie-poster">
          <img src={"img/"+ movie.ImagePath} />
        </div>
        <div className="movie-title">
          <span className="label">Title: </span>
          <span className="value">{movie.Title}</span>
        </div>
        <div className="movie-description">
          <span className="label">Description: </span>
          <span className="value">{movie.Description}</span>
        </div>
        <div className="movie-genre">
          <span className="label">Genre: </span>
          <span className="value"><a href={"/genres/"+movie.Genre.Name}> {movie.Genre.Name}</a></span>
        </div>
        <div className="movie-director">
          <span className="label">Director: </span>
          <span className="value"><a href={"/directors/"+movie.Director.Name}> {movie.Director.Name}</a></span>
        </div>
        <button onClick={() => { onBackClick(null); }}>Back</button>
      </div>  );
    }
}
 
export default MovieView;