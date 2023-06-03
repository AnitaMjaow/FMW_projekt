import { useState } from "react";
import "./App.css";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import Forecast from "./components/forecast/forecast";
import Search from "./components/search/search";
import Map from "./components/map/Map";
import CurrentWeather from "./components/current-weather/current-weather";
import SaveToLSButton from "./components/local-storage/saveToLS.js"
import LoadFromLSButton from "./components/local-storage/loadfromLS.js"

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [searchData, setSearchData] = useState("");
  
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast
          ({ city: searchData.label, ...forcastResponse });
        //Sets search value
        setSearchData(searchData);
      })
      .catch(console.log);
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {/*the button that handles the local storage stuff*/}
      <div class="btn" id="top-buttons">
        <div>
        <SaveToLSButton searchValue={searchData?.label} />
        </div>
        <LoadFromLSButton></LoadFromLSButton>
      </div>
      <div class="top-panel">
        <div class="col">
          <Map searchData={searchData} />
        </div>
        <div class="col">
          {currentWeather && <CurrentWeather data={currentWeather} />}
        </div>
      </div>
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;