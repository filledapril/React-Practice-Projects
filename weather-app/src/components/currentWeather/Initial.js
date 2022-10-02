
import './current-weather.css'


const Initial = ({ initial }) => {


  return (
    <div className='initial-content'>
        <div className='weather'>
            <div className="top">
                <div className='weather-description'>
                    <p className="city">Tokyo, JP</p>
                    <p className="weather-info">{ initial.weather[0].description}</p>
                </div>
                <img src={`icons/${initial.weather[0].icon}.png`}alt="weather-icon" className="weather-icon" />
            </div>
            
            <div className="bottom">
                <div className='details'>
                    <div className="parameter-row">
                        <span className="parameter-label weather-info">Details</span>
                    </div>

                    <div className="parameter-row">
                        <span className="parameter-label">Feels Like</span>
                        <span className="parameter-value">{ initial.main.feels_like.toFixed(1)}℃</span>
                    </div>

                    <div className="parameter-row">
                        <span className="parameter-label">Wind Speed</span>
                        <span className="parameter-value">{initial.wind.speed}m/s</span>
                    </div>

                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">{initial.main.humidity}%</span>
                    </div>

                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">{initial.main.pressure}hPa</span>
                    </div>
                </div>
                <p className="temperature">{ initial.main.temp.toFixed(1) }℃</p>
            </div>
        </div>
    </div>
  )
}


export default Initial