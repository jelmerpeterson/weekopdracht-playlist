import React from "react";

const SongList = ({ filteredSongs, deleteSong }) => {
  const songList = filteredSongs.length ? (
    filteredSongs.map((item) => {
      return (
        <tr key={item.id} className="content-header">
          <td>{item.title}</td>
          <td>{item.artist}</td>
          <td>{item.genre}</td>
          <td>
            {item.rating}
            <span> ⭐</span>
          </td>
          <button
            onClick={() => {
              deleteSong(item.id);
            }}
          >
            Delete song
          </button>
        </tr>
      );
    })
  ) : (
    <p>Voeg songs toe aan de playlist</p>
  );

  return <table>{songList}</table>;
};

export default SongList;
