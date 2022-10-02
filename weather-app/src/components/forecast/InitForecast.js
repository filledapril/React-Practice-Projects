import './forecast.css'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'

const InitForecast = ({initForecast}) => {

  return (
    <>
        <label className="title">24H in the future</label>
        <Accordion allowZeroExpanded>
            {initForecast.list.slice(1, 10).map((item, index) => (
            <AccordionItem key={index}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <div className="daily-item">
                            <label className='forecast-time'>{item.dt_txt}</label>
                            <label className="forecast-temp">{item.main.temp.toFixed(0)}℃</label>
                            <label className="forecast-description">{item.weather[0].main}</label>            
                            <img src={`icons/${item.weather[0].icon}.png`} alt="weather-icon" className="icon-small" />
                        </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel></AccordionItemPanel>
            </AccordionItem>
            ))}        
        </Accordion>
    </>
  )
}

export default InitForecast