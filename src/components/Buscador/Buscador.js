import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getMovies, addMovieFavorite } from "../../actions";
import './Buscador.css';




export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)

    console.log(this.state.title)
  }

  render() {
    const {title} = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form  onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul className={"carousel"}>
         <div className={"carousel__contenedor"}>
           <button aria-label="Anterior" className={"carousel__anterior"}>⬅🔺</button>
           <button aria-label="Siguiente" className={"carousel__siguiente"}>▶🟩</button>
            <div className="carousel__lista">
             {this.props.movies &&  this.props.movies.map(movie=> (
               <div key ={movie.imdbID} className="carousel__elemento" >
                 <Link to={`/movie/${movie.imdbID}`}>
                  <img src ={movie.Poster}/>  
                 </Link>  
               <button onClick={() => this.props.addMovieFavorite(movie)}>Fav</button>
              </div>
          ))}
            </div>
          </div> 
        </ul>
   
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);
