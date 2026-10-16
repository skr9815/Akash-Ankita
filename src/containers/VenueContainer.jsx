import { wedding } from '../config.js'
import Venue from '../components/Venue.jsx'

export default function VenueContainer() {
  return <Venue venues={wedding.venues} />
}
