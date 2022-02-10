import React, { Component } from 'react';
import  MovieCard  from "../movie-card/MovieCard";
import  MovieView  from "../movie-view/MovieView";
class MainView extends React.Component {
    state = {  
        movies: [
            {
                "Genre": {
                    "Name": "Comedy",
                    "Description": "A piece of fiction meant to entertain with humor."
                },
                "Director": {
                    "Name": "Wes Anderson",
                    "Bio": "An eccentric director of aclaimmed independent films.",
                    "Birth": "1969"
                },
                "_id": "61980e60d4331077c8bc17c1",
                "Title": "The French Dispatch",
                "Description": "An anthology following stories from a literary magazine in France.",
                "ImagePath": "thefrenchdispatch.png",
                "Featured": true
            },
            {
                "Genre": {
                    "Name": "Action",
                    "Description": "A genre of film filled with excitement and adventure."
                },
                "Director": {
                    "Name": "Peter Jackson",
                    "Bio": "A director from New Zealand most famous for his adaption of King Kong and The Lord of the Rings.",
                    "Birth": "1961"
                },
                "_id": "61980febd4331077c8bc17c4",
                "Title": "The Two Towers",
                "Description": "An adaption of the second part to JRR Tolkiens, The Lord of the Rings.",
                "ImagePath": "thetwotowers.png",
                "Featured": true
            },
            {
                "Genre": {
                    "Name": "Science Fiction",
                    "Description": "A piece of fiction set in an imagined future."
                },
                "Director": {
                    "Name": "Denis Villeneuve",
                    "Bio": "Robert Jonathan Demme was an American director, producer, and screenwriter.",
                    "Birth": "1967"
                },
                "_id": "619809ead4331077c8bc17bd",
                "Title": "Dune",
                "Description": "A young Duke's son must find his destiny on the desert planet of Arakis",
                "ImagePath": "dune.png",
                "Featured": true
            }
        ]
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
          ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
          : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
          ))
        }
      </div>); 
    }
}
 
export default MainView;