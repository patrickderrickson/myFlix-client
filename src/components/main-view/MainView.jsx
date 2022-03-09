import React from 'react';
import axios from 'axios';
import  LoginView  from "../login-view/LoginView";
import  Registration, { RegistrationView }  from "../registration-view/RegistrationView";
import  MovieCard  from "../movie-card/MovieCard";
import  MovieView  from "../movie-view/MovieView";
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
    onLoggedIn(authData) {
        this.setState({
          user: authData.user.Username,
          token: true,
          register: false,
          login: false
        });
        localStorage.setItem('token', authData.token);
        localStorage.setItem('user', authData.user.Username);
        //this.getMovies(authData.token);
        window.location.replace("/browse")
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
      return <Router>
        <Routes>
        <Route exact element={<LoginView  onLoggedIn={(user)=>this.onLoggedIn(user)} setRegister={()=>this.setRegister()}/>} path="/" />
        <Route exact element={<div><Navbar></Navbar><RegistrationView setLogin={()=>this.setLogin()} OnRegistration={this.OnRegistration} /></div>} path="/register" />
        <Route exact element={<div className="main-view">
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
      </div>} path="/browse" />
        </Routes>
      </Router>
      /* if(register && !login && !token) {
        return (<div><Navbar></Navbar><RegistrationView setLogin={()=>this.setLogin()} OnRegistration={this.OnRegistration} /></div>);
      }
      else if (!register && !token && login ){
        return (<LoginView  onLoggedIn={(user)=>this.onLoggedIn(user)} setRegister={()=>this.setRegister()}/>)
      }
      else if (token && !register && !login) return (
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
      </div>); */
      //   const { movies, selectedMovie } = this.state;
      //   if (movies.length === 0) {
      // return (<div className="main-view"></div>); 
      //   }
      
    }
}
 