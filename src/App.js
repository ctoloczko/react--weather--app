import "./App.css";
import SearchEngine from "./SearchEngine";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

function App() {
  return (
    <>
      {" "}
      <div className="weather-app">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <CurrentWeather />
            </div>
            <div class="col-md-9">
              <Forecast />
            </div>
          </div>
        </div>
        <SearchEngine />
      </div>
      <></>
    </>
  );
}

export default App;
