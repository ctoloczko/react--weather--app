import React from "react";

export default function SearchEngine() {
  return (
    <>
      <div className="container header">
        <div className="row">
          <div className="col d-flex justify-content-start">
            {" "}
            <h1>Stockholm</h1>{" "}
          </div>
          <div className="col d-flex justify-content-end">
            <form className="d-flex">
              <input
                className="me-1 search-input "
                type="search"
                placeholder="Enter a city"
              />
              <input className="search-button" type="submit" value="🔎" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
