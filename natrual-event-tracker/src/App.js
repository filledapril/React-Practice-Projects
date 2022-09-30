import { useState, useEffect } from 'react'
import Map from "./components/Map";
import Loader from './components/Loader';


function App() {
  
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    //async function
    const fetchData = async() => {
      setLoading(true)
      const data = await fetch('https://eonet.gsfc.nasa.gov/api/v3/events')
      const { events } = await data.json()

      setEventData(events)
      setLoading(false)
    }
    fetchData()

    console.log(eventData);
  }, [])

  //   fetch('https://eonet.gsfc.nasa.gov/api/v3/events')
  //   .then(response => response.json())
  //   .then(data => setEventData(data.events))
  // }, [])

  return (
    <div>
     { !loading 
        ? <Map eventData={eventData} />
        : <Loader />}
    </div>
  );
}

export default App;
