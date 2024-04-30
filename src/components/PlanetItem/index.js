// Write your code here
import './index.css'

const PlanetItem = props => {
  const {activeId, planetsList} = props
  const eachPlanet = planetsList.filter(each => {
    if (each.id === activeId) {
      return true
    }
    return false
  })

  return (
    <div className="planets-details-container">
      <h1 className="planets-heading">PLANETS</h1>
      <img
        src={eachPlanet[0].imageUrl}
        alt={`planet ${eachPlanet[0].name}`}
        className="planets-image"
      />
      <h1 className="each-planet-name-heading">{eachPlanet[0].name}</h1>
      <p className="description-para">{eachPlanet[0].description}</p>
    </div>
  )
}

export default PlanetItem
