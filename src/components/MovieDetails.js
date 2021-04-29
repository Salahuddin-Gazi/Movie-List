import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    selectedMovie: state.selectedMovie,
  };
};

const movieDetails = (props) => {
  if (!props.selectedMovie) {
    return (
      <div className="details-container" style={{ width: "70%" }}>
        <h2>Movie</h2>
        <div className="properties">
          <p>Select Movie</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="details-container" style={{ width: "70%" }}>
        <h2>Movie</h2>
        <div className="properties">
          <p>Title: {props.selectedMovie.title}</p>
          <p>Release Date: {props.selectedMovie.releaseDate}</p>
          <p>Ratings: {props.selectedMovie.rating}</p>
        </div>
      </div>
    );
  }
};

export default connect(mapStateToProps)(movieDetails);
