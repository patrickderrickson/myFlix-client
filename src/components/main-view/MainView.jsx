import React, { Component } from 'react';
import  MovieCard  from "../movie-card/MovieCard";
import  MovieView  from "../movie-view/MovieView";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../main-view/MainView.scss';
export default class MainView extends React.Component {
    constructor() {
        super(); 
    }
  
    state = {
      movies: [],
      selectedMovie: null,
      user: null,
      login: true,
      token: false,
      register: false
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
    render() { 
        const { movies, selectedMovie } = this.state;
        if (movies.length === 0) {
      return (<div className="main-view">This list is empty!</div>); 
        }
        return (
         <div className="main-view">
       
        {selectedMovie
          ? 
          <Row className="justify-content-md-center">
            <Col md={8}>
          <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
          </Col>
          </Row>
          : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
          ))
        }
      </div>); 
    }
}
 
export default MainView;