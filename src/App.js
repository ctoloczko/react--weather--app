import "./App.css";
import SearchEngine from "./SearchEngine";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

function App() {
  return (
    <>
      {" "}
      <div className="weather-app border border-dark">
        <SearchEngine />
        <div className="container">
          <div className="row">
            <div className="col-md-3 current-weather border border-dark">
              <CurrentWeather />
            </div>
            <div className="col-md-9">
              <Forecast />
            </div>
          </div>
        </div>
      </div>
      <></>
    </>
  );
}

export default App;
