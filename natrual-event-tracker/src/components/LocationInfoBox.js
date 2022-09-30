import React from 'react'

const LocationInfoBox = ({ info }) => {
  return (
    <div className='location-info'>
        <h2>Event Location Info</h2>
        <ul>
            <li>Event Title: <strong>{ info.title }</strong></li>
            <li>Event ID: <strong>{ info.id }</strong></li>
        </ul>
    </div>
  )
}

export default LocationInfoBox