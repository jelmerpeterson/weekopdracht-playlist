import React from "react";

function SearchBox(props) {
  return (
    <div className="fasearch">
      <span className="fa fa-search">
        <input
          placeholder="Zoeken op nummer"
          className="search-number"
          type="text"
          onChange={props.handleInput}
        />
      </span>
    </div>
  );
}

export default SearchBox;
