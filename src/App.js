import "./App.css";
import SearchEngine from "./SearchEngine";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import axios from "axios";

function App() {
  return (
    <>
      {" "}
      <div className="weather-app ">
        <SearchEngine />
        <div className="container">
          <div className="row">
            <div className="col-lg-3 current-weather rounded ">
              <CurrentWeather />
            </div>{" "}
            <div className="col-md-9 hide-on-small forecast-container ">
              <Forecast />
            </div>
          </div>
        </div>
        <footer>
          This project was coded by Celina Toloczko-Mastalerz and is
          open-sourced on{" "}
          <a
            href="https://github.com/ctoloczko/react--weather--app"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://foreca.netlify.app/"
            rel="noreferrer"
            target="_blank"
          >
            Netlify
          </a>
          .{" "}
        </footer>
      </div>
      <></>
    </>
  );
}

export default App;
