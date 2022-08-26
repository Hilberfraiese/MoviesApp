import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

componentDidMount(){
 const movieID = this.props.match.params.id
 this.props.movieDetail(movieID)  
}

    render() {
        return (
                <div >
                   <div > 
                      <h3>{this.props.movie.Title}</h3>
                       <img src ={this.props.movie.Poster}/> 
                      <h4>Año: {this.props.movie.Year}</h4>
                      <h4>Duracion: {this.props.movie.Runtime}</h4>
                      <h4>Elenco: {this.props.movie.Actors}</h4> 
                      <h4>Director: {this.props.movie.Director}</h4> 
                      <h6>Sinopsis: {this.props.movie.Plot}</h6> 
                    </div> 
                 </div>
             
        );
    }
}

function mapStateToProps(state){
  return{
     movie: state.movieDetail
  }
}

function mapDispatchToProps(dispatch){
 return{
     movieDetail: idMovie => dispatch(getMovieDetail(idMovie))    
    }   
}


export default connect(mapStateToProps, mapDispatchToProps) (Movie);