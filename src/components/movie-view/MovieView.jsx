import React, { Component } from 'react';
<<<<<<< Updated upstream
class MovieView extends Component {
    state = {  } 
=======
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
>>>>>>> Stashed changes
    render() { 
        const { movie, onBackClick } = this.props;
        return (<div className="movie-view">
        <div className="movie-poster">
          <img src={"img/"+movie.ImagePath} />
        </div>
        <div className="movie-title">
          <span className="label">Title: </span>
          <span className="value">{movie.Title}</span>
        </div>
        <div className="movie-description">
          <span className="label">Description: </span>
          <span className="value">{movie.Description}</span>
        </div>
        <button onClick={() => { onBackClick(null); }}>Back</button>
      </div>  );
    }
}
 
export default MovieView;