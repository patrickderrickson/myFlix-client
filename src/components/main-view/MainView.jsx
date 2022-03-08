import React from 'react';
import axios from 'axios';
import  LoginView  from "../login-view/LoginView";
import  Registration, { RegistrationView }  from "../registration-view/RegistrationView";
import  MovieCard  from "../movie-card/MovieCard";
import  MovieView  from "../movie-view/MovieView";
import Navbar from 'react-bootstrap/Navbar';

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
        console.log(authData);
        this.setState({
          user: authData.user.Username
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
      </div>); 
      //   const { movies, selectedMovie } = this.state;
      //   if (movies.length === 0) {
      // return (<div className="main-view"></div>); 
      //   }
      
    }
}
 