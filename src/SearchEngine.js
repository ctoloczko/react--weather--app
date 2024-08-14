import React from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
  return (
    <>
      <form class="d-flex">
        <input
          className="input-bar"
          class="me-1"
          type="search"
          placeholder="Enter a city"
        />
        <input className="search-button" type="submit" value="🔎" />
      </form>
    </>
  );
}
