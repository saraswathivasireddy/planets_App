// Write your code here

import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import {Component} from 'react'
import {FaChevronCircleLeft, FaChevronCircleRight} from 'react-icons/fa'
import './index.css'

class PlanetsSlider extends Component {
  state = {activeId: this.props.planetsList[0].id, index: 0}

  onClickingLeftButton = id => {
    const {index} = this.state
    const {planetsList} = this.props
    if (index !== 0) {
      this.setState({activeId: planetsList[index - 1].id, index: index - 1})
    }
  }

  onClickingRightButton = id => {
    const {index} = this.state
    const {planetsList} = this.props
    if (index !== planetsList.length - 1) {
      this.setState({activeId: planetsList[index + 1].id, index: index + 1})
    }

  }

  render() {
    const {planetsList} = this.props
    const {activeId} = this.state
    return (
      <div className="planet-slider-bg-container" data-testid="planets">
        <button onClick={this.onClickingLeftButton} className="onclick-buttons">
          <FaChevronCircleLeft className="left-button-style" />
        </button>
        <Slider>
          <PlanetItem activeId={activeId} planetsList={planetsList} />
        </Slider>
        <button
          onClick={this.onClickingRightButton}
          className="onclick-buttons"
        >
          <FaChevronCircleRight className="right-button-style" />
        </button>
      </div>
    )
  }
}

export default PlanetsSlider
