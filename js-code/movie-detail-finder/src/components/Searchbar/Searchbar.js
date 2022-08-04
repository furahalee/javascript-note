import React, { Component } from "react";
import styles from "./Searchbar.module.css";
import { connect } from "react-redux";
import { fetchMovie } from "../../actions";
import Movie from "../Movie/Movie";

class Searchbar extends Component {
  state = {
    title: "",
  };

  formHandler = (event) => {
    event.preventDefault();
    this.props.fetchMovie(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <div className={styles.Form}>
        <div>
          <form onSubmit={this.formHandler}>
            <input
              type="text"
              placeholder="Movie Title"
              onChange={(e) => this.setState({ title: e.target.value })}
              value={this.state.title}
            />
            <button type="submit">Search</button>
          </form>
        </div>
        <Movie movie={this.props.movie} />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  movie: state.movie,
});
export default connect(mapStateToProps, { fetchMovie })(Searchbar);
