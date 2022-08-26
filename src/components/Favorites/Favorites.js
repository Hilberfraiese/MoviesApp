import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import {removeMovieFavorite} from "../../actions/index"



export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          { this.props.movie && this.props.movie.map(movie =>
          <div>
            <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link> 
            <h2>{movie.imdbID }</h2>      
            <button onClick={() => this.props.removeMovieFavorite(movie.imdbID)}>-</button>
          </div>
          )}
        </ul>
      </div>
    );
  }
}


function mapStateToProps(state){
  return{
    movie: state.moviesFavourites,
  } 
}

function mapDispatchToProps(dispatch){
  return {
    removeMovieFavorite : idMovie => dispatch(removeMovieFavorite(idMovie)),
  }
}



export default connect (mapStateToProps,mapDispatchToProps) (ConnectedList);
