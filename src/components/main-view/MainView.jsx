import React, { Component } from 'react';
import axios from 'axios';
import  LoginView  from "../login-view/LoginView";
import  MovieCard  from "../movie-card/MovieCard";
import  MovieView  from "../movie-view/MovieView";
export class MainView extends React.Component {
    constructor() {
        super();
        this.state = {
          movies: [],
          selectedMovie: null,
          user: null
        }
    }
  
    componentDidMount(){
      axios.get('https://frozen-sierra-28921.herokuapp.com/movies')
        .then(response => {
          this.setState({
            movies: response.data
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
    setSelectedMovie(newSelectedMovie) {
        this.setState({
          selectedMovie: newSelectedMovie
        });
      }  
      onLoggedIn(user) {
        this.setState({
          user
        });
      }
    render() { 
        const { movies, selectedMovie } = this.state;
        if (movies.length === 0) {
      return (<div className="main-view"></div>); 
        }
        return (
         <div className="main-view">
        {selectedMovie
          ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
          : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
          ))
        }
      </div>); 
    }
}
 
export default MainView;