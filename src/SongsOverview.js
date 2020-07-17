import React, { Component } from "react";
import SongList from "./components/SongList";
import SongForm from "./components/SongForm";

class SongOverview extends Component {
  constructor() {
    super();
    this.state = {
      songs: [],
    };
  }

  addSong = (song) => {
    song.id = this.state.songs.length + 1;
    let songs = [...this.state.songs, song];
    this.setState({
      songs: songs,
    });
  };

  deleteSong = (id) => {
    const songs = this.state.songs.filter((song) => {
      return song.id !== id;
    });
    this.setState({
      songs: songs,
    });
  };

  render() {
    return (
      <div className="playlist-container">
        <h1 className="header">Jelmer's Playlist</h1>
        <SongForm addSong={this.addSong} />
        <table>
          <tr className="song-header">
            <th className="song-row__item">Song</th>
            <th className="song-row__item">Artiest</th>
            <th className="song-row__item">Genre</th>
            <th className="song-row__item">Sterren</th>
            <th className="song-row__item"></th>
          </tr>
        </table>
        <SongList songs={this.state.songs} deleteSong={this.deleteSong} />
      </div>
    );
  }
}

export default SongOverview;
