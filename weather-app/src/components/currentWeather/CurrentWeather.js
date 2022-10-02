import './current-weather.css'

const CurrentWeather = ({ data }) => {
  return (
    <div className='weather'>
        <div className="top">
            <div className='weather-description'>
                <p className="city">{ data.city }</p>
                <p className="weather-info">{ data.weather[0].description}</p>
            </div>
            <img src={`icons/${data.weather[0].icon}.png`}alt="weather-icon" className="weather-icon" />
        </div>
        
        <div className="bottom">
            <div className='details'>
                <div className="parameter-row">
                    <span className="parameter-label weather-info">Details</span>
                </div>

                <div className="parameter-row">
                    <span className="parameter-label">Feels Like</span>
                    <span className="parameter-value">{ data.main.feels_like.toFixed(1)}℃</span>
                </div>

                <div className="parameter-row">
                    <span className="parameter-label">Wind Speed</span>
                    <span className="parameter-value">{data.wind.speed}m/s</span>
                </div>

                <div className="parameter-row">
                    <span className="parameter-label">Humidity</span>
                    <span className="parameter-value">{data.main.humidity}%</span>
                </div>

                <div className="parameter-row">
                    <span className="parameter-label">Pressure</span>
                    <span className="parameter-value">{data.main.pressure}hPa</span>
                </div>
            </div>
            <p className="temperature">{ data.main.temp.toFixed(1) }℃</p>
        </div>
    </div>
  )
}

export default CurrentWeather