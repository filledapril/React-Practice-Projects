import { Icon } from "@iconify/react"
import volcanoIcon from '@iconify/icons-mdi/volcano'
import fireIcon from '@iconify/icons-mdi/fire-alert'
//wait for updating
// import fireIcon from '@iconify/icons-mdi/fire-alert'


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

export {VolcanoMarker, FireMarker}