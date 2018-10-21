import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies()
  };
  render() {
    return (
      <div>
        {this.renderMoviesTopLineMessage()}
        {this.state.movies.length > 0 && this.renderMoviesTable()}
      </div>
    );
  }

  renderMoviesTopLineMessage = () => {
    let { movies } = this.state;
    console.log(movies);
    let message =
      movies.length === 0
        ? "There are no movies to display"
        : `Displaying ${movies.length} movies`;
    return (
      <div>
        <h5>{message}</h5>
      </div>
    );
  };

  getMovieRows = () => {
    return this.state.movies.map(movie => {
      const { title, genre, numberInStock, dailyRentalRate } = movie;
      const cells = [
        <td key="title">{title}</td>,
        <td key="genre">{genre.name}</td>,
        <td key="numberInStock">{numberInStock}</td>,
        <td key="dailyRentalRate">{dailyRentalRate}</td>,
        <td key="button">
          <button
            className="btn btn-danger btn-sm"
            onClick={() => {
              this.handleDelete(movie._id);
            }}
          >
            Delete
          </button>
        </td>
      ];
      return <tr key={movie._id}>{cells}</tr>;
    });
  };

  handleDelete = (id) => {
      const new_movies = this.state.movies.filter(m => m._id !== id);
      this.setState({movies: new_movies});
  }

  renderMoviesTable = () => {
    console.log(this.statemovies);
    return (
      <React.Fragment>
        <table className="table table-primary">
          <thead>
            <tr>
              <td>Title</td>
              <td>Genre</td>
              <td>Stock</td>
              <td>Rate</td>
              <td />
            </tr>
          </thead>
          <tbody>{this.getMovieRows()}</tbody>
        </table>
      </React.Fragment>
    );
  };
}

export default Movies;
