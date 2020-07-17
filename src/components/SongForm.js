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
    const { name, value, type, checked } = e.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked,
        })
      : this.setState({
          [name]: value,
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

        <select
          value={this.state.genre}
          name="genre"
          onChange={this.handleChange}
          className="rating"
        >
          <option value="">Genre</option>
          <option value="jazz">Jazz</option>
          <option value="soul">Soul</option>
          <option value="rock">Rock</option>
          <option value="dance">Dance</option>
          <option value="disco">Disco</option>
        </select>
        <label>
          <span>⭐</span>
        </label>

        <select
          value={this.state.rating}
          name="rating"
          onChange={this.handleChange}
          className="rating"
        >
          <option value=""> Hoeveel sterren? </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <button type="submit">Voeg Toe</button>
      </form>
    );
  }
}

export default SongForm;
