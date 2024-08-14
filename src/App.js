import "./App.css";
import SearchEngine from "./SearchEngine";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

function App() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-3">
            <SearchEngine />
            <CurrentWeather />
          </div>
          <div class="col-9">
            <Forecast />
          </div>
        </div>
      </div>
      <></>
    </>
  );
}

export default App;
