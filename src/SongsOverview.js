import React, { Component } from "react";
import SongList from "./components/SongList";
import SongForm from "./components/SongForm";
import SearchBox from "./components/SearchBox";

class SongOverview extends Component {
  constructor() {
    super();
    this.state = {
      songs: [
        {
          id: "1",
          title: "That's Life",
          artist: "Frank Sinatra",
          genre: "Jazz",
          rating: "5",
        },
        {
          id: "2",
          title: "Creep",
          artist: "Radiohead",
          genre: "Rock",
          rating: "5",
        },
        {
          id: "3",
          title: "Alive",
          artist: "Pearl Jam",
          genre: "Rock",
          rating: "5",
        },
        {
          id: "4",
          title: "House of the Rising Sun",
          artist: "The Animals",
          genre: "Rock",
          rating: "5",
        },
        {
          id: "5",
          title: "The Dock of the Bay",
          artist: "Otis Redding",
          genre: "Jazz",
          rating: "5",
        },
      ],
      searchSong: "",
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

  handleInput = (e) => {
    console.log(e.target.value);
    this.setState({
      searchSong: e.target.value,
    });
  };

  render() {
    let filteredSongs = this.state.songs.filter((song) => {
      return song.title
        .toLowerCase()
        .includes(this.state.searchSong.toLocaleLowerCase());
    });
    return (
      <div className="playlist-container">
        <h1 className="header">Jelmer's Playlist</h1>

        <SongForm addSong={this.addSong} />
        <div className="search">
          <SearchBox handleInput={this.handleInput} />
        </div>
        <table>
          <tr className="song-header">
            <th className="song-row__item">Song</th>
            <th className="song-row__item">Artiest</th>
            <th className="song-row__item">Genre</th>
            <th className="song-row__item">Sterren</th>
          </tr>
        </table>
        <SongList filteredSongs={filteredSongs} deleteSong={this.deleteSong} />
      </div>
    );
  }
}

export default SongOverview;
