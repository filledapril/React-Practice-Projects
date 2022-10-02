import GoogleMapReact from 'google-map-react'
import { VolcanoMarker, FireMarker, StormMarker, IceMarker } from "./LocationMarker";
import LocationInfoBox from './LocationInfoBox';
import { useState } from 'react';
import { API_KEY } from '../api';

export default function Map({eventData, center, zoom}){

    const [loacationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map(data => {
        if(data.categories[0].id === 'volcanoes') {
            return <VolcanoMarker 
            lat={data.geometry[0].coordinates[1]} 
            lng={data.geometry[0].coordinates[0]}
            key={data.id} 
            onClick={() => setLocationInfo({id: data.id, title: data.title})}/>
        } else if (data.categories[0].id === 'wildfires') {
            return <FireMarker 
            lat={data.geometry[0].coordinates[1]} 
            lng={data.geometry[0].coordinates[0]}
            key={data.id} 
            onClick={() => setLocationInfo({id: data.id, title: data.title})}/>
        } else if (data.categories[0].id === 'severeStorms') {
            return <StormMarker 
            lat={data.geometry[0].coordinates[1]}
            lng={data.geometry[0].coordinates[0]}
            key={data.id}
            onClick={() => setLocationInfo({id: data.id, title: data.title})}/>
        } else if (data.categories[0].id === 'seaLakeIce') {
            return <IceMarker
            lat={data.geometry[0].coordinates[1]}
            lng={data.geometry[0].coordinates[0]}
            key={data.id}
            onClick={() => setLocationInfo({id: data.id, title: data.title})} />
        } 
        return null
    })

    const defaultProps = {
        center: {
            lat: 54.001312,
            lng: -5.466785
        },
        zoom: 5
    };

return (
    <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact 
        bootstrapURLKeys={{ key: `${API_KEY}`}}
        defaultCenter={ defaultProps.center }
        defaultZoom={ defaultProps.zoom }
        >
        {markers}
        </GoogleMapReact>
        {loacationInfo && <LocationInfoBox info={loacationInfo}/>}
    </div>
  )
}

