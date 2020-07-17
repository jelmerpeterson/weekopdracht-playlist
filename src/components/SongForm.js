import React, { Component } from "react";

class SongForm extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      artist: "",
      genre: "",
      rating: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addSong(this.state);
    this.setState({
      [e.target.name]: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Titel:</label>
        <input
          type="text"
          name="title"
          value={this.state.title}
          placeholder="Titel"
          onChange={this.handleChange}
        />
        <label>Artiest:</label>
        <input
          type="text"
          name="artist"
          value={this.state.artist}
          placeholder="Artiest"
          onChange={this.handleChange}
        />
        <label>Genre:</label>
        <input
          type="text"
          name="genre"
          value={this.state.genre}
          placeholder="Genre"
          onChange={this.handleChange}
        />
        <label>
          <span>⭐ :</span>
        </label>
        <input
          type="number"
          min="1"
          max="5"
          name="rating"
          className="rating"
          value={this.state.rating}
          onChange={this.handleChange}
        />
        <button type="submit">Voeg Toe</button>
      </form>
    );
  }
}

export default SongForm;
