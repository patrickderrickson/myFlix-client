import React, { Component } from 'react';
import axios from 'axios';
import  LoginView  from "../login-view/LoginView";
import  Registration, { RegistrationView }  from "../registration-view/RegistrationView";
import  MovieCard  from "../movie-card/MovieCard";
import  MovieView  from "../movie-view/MovieView";
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
    onLoggedIn(user) {
        this.setState({
          user,
          token: true,
          register: false,
          login: false
        });
      }
      OnRegistration(user) {
        axios.post('https://frozen-sierra-28921.herokuapp.com/users')
        .then(response => {
          // console.log(response)
        })
        .catch(error => {
          console.log(error);
        });
      }
      setLogin(){
        this.setState({
          login: true,
          register: false
        })
      }
      setRegister(){
        this.setState({
          register: true,
          login:false
        })
      }
    render() { 
      const {movies, selectedMovie, register, user, login, token} = this.state;
      if(register && !login && !token) {
        return (<RegistrationView setLogin={()=>this.setLogin()} OnRegistration={this.OnRegistration} />);
      }
      else if (!register && !token && login ){
        return (<LoginView  onLoggedIn={(user)=>this.onLoggedIn(user)} setRegister={()=>this.setRegister()}/>)
      }
      else if (token && !register && !login) return (
         <div className="main-view">
        {selectedMovie
          ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
          : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
          ))
        }
      </div>); 
      //   const { movies, selectedMovie } = this.state;
      //   if (movies.length === 0) {
      // return (<div className="main-view"></div>); 
      //   }
      
    }
}
 