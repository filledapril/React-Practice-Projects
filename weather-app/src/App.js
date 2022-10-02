import './App.css';
import { useState, useEffect} from 'react';
import Search from './components/search/Search';
import CurrentWeather from './components/currentWeather/CurrentWeather';
import Forecast from './components/forecast/Forecast';
import Initial from './components/currentWeather/Initial';
import { WEATHER_API_URL, WEATHER_API_KEY} from '../src/api'
import InitForecast from './components/forecast/InitForecast';


function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [initial, setInitial] = useState(null);
  const [initForecast, setInitForeCast] = useState(null);

  // initial weather display

  useEffect(() => {
      const getInitialData = async() => {
          const response = await fetch(`${WEATHER_API_URL}/weather?lat=35.689555555&lon=139.691722222&appid=${WEATHER_API_KEY}&units=metric`)
          const data = await response.json();
          setInitial(data)
      }
      getInitialData();
  }, [])

  useEffect(() => {
    const getInitForecastData = async() => {
        const response = await fetch(`${WEATHER_API_URL}/forecast?lat=35.689555555&lon=139.691722222&appid=${WEATHER_API_KEY}&units=metric`)
        const data = await response.json();
        setInitForeCast(data)
    }
    getInitForecastData();
}, [])


  //data for searching

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(' ');

    console.log("search-lat", lat, "lon", lon)


    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {

        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse })
        setForecast({ city: searchData.label, ...forecastResponse })
      })
      .catch ((err) => console.error(err))
    
  }

  // console.log(`[0]`, currentWeather)
  // console.log(`[1]`, forecast)

  return (
    <div className='container'>
    <Search onSearchChange={handleOnSearchChange}/>
    { !currentWeather && initial && <Initial initial={initial}/>}
    { currentWeather && <CurrentWeather data={currentWeather}/>}
    {!forecast && initForecast && <InitForecast initForecast={initForecast}/>}
    {forecast && <Forecast data={forecast}/>}
    </div>
  );
}

export default App;
