import { Icon } from "@iconify/react"
import volcanoIcon from '@iconify/icons-mdi/volcano'
import fireIcon from '@iconify/icons-mdi/fire-alert'
import stormIcon from '@iconify/icons-mdi/flash-alert'
import iceIcon from '@iconify/icons-mdi/thermometer-minus'



const VolcanoMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
        <Icon icon={volcanoIcon} className="icon volcano-icon"/>
    </div>
  )
}

const FireMarker = ({ lat, lng, onClick }) => {
    return (
      <div className="location-marker" onClick={onClick}>
          <Icon icon={fireIcon} className="icon fire-icon"/>
      </div>
    )
  }

  const StormMarker = ({ lat, lng, onClick }) => {
    return (
      <div className="location-marker" onClick={onClick}>
          <Icon icon={stormIcon} className="icon storm-icon"/>
      </div>
    )
  }

  const IceMarker = ({ lat, lng, onClick }) => {
    return (
      <div className="location-marker" onClick={onClick}>
          <Icon icon={iceIcon} className="icon ice-icon"/>
      </div>
    )
  }

 
export {VolcanoMarker, FireMarker, StormMarker, IceMarker}