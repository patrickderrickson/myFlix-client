import React from 'react';
import axios from 'axios';

import  LoginView  from "../login-view/LoginView";
import  Registration, { RegistrationView }  from "../registration-view/RegistrationView";
import  MovieCard  from "../movie-card/MovieCard";
import  MovieView  from "../movie-view/MovieView";
import DirectorView from "../director-view/DirectorView";
import NavbarView from "../navbar-view/NavbarView";
import GenreView from "../genre-view/GenreView";
import UserView from "../user-view/UserView";
import Navbar from 'react-bootstrap/Navbar';

import { connect } from 'react-redux';

import { setMovies } from '../../actions/actions';


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../main-view/MainView.scss';
class MainView extends React.Component {
    constructor() {
        super(); 
    }
  
    state = {
      selectedMovie: null,
      user: null,
      login: true,
      token: false,
      register: false,
      userObj : {}
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
    componentDidMount() {
      let accessToken = localStorage.getItem('token');
      if (accessToken !== null) {
        this.setState({
          user: localStorage.getItem('user')
        });
        this.getMovies(accessToken);
      }
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
          login: false,
          userObj: authData.user
        });
        localStorage.setItem('token', authData.token);
        localStorage.setItem('user', authData.user.Username);
        localStorage.setItem('userObj', JSON.stringify(authData.user));
        //this.getMovies(authData.token);
        window.location.replace("/browse")
      }
      onLoggedOut() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.setState({
          user: null
        });
      }
      getMovies(token) {
        axios.get('https://frozen-sierra-28921.herokuapp.com/movies', {
          headers: { Authorization: `Bearer ${token}`}
        })
        .then(response => {
          // Assign the result to the state
          this.props.setMovies(response.data);
        })
        .catch(function (error) {
          console.log(error);
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
      let { movies } = this.props;
      let { user } = this.state;
      const { selectedMovie, register, login, token} = this.state;
      return <Router>
        <NavbarView user= {this.state.user}/>
        <Routes>
          
        <Route exact element={<LoginView  onLoggedIn={(user)=>this.onLoggedIn(user)} setRegister={()=>this.setRegister()}/>} path="/" />
        <Route exact element={<div><RegistrationView setLogin={()=>this.setLogin()} OnRegistration={this.OnRegistration} /></div>} path="/register" />
        <Route exact element={<div><GenreView /></div>} path="/genres/:GenreName" />
        <Route exact element={<UserView  user={this.state.userObj}/>} path="/profile" />
        <Route path="/directors/${movie.Director.Name}" render={({ match, history }) => {
  if (movies.length === 0) return <div className="main-view" />;
  return <Col md={8}>
    <DirectorView director={movies.find(m => m.Director.Name === match.params.name).Director} onBackClick={() => history.goBack()} />
  </Col>
}
}/>
<Route path="/movies/:movieId" render={({ match, history }) => {
  return <Col md={8}>
    <MovieView movie={movies.find(m => m._id === match.params.movieId)} onBackClick={() => history.goBack()} />
  </Col>
}} />
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
    }
}
let mapStateToProps = state => {
  return { movies: state.movies }
}

export default connect(mapStateToProps, { setMovies } )(MainView);
 