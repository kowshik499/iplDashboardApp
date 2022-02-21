import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    teamsData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamsData: updatedData, isLoading: false})
  }

  renderLoader = () => (
    <div className="loader-cont">
      <Loader type="Oval" color="#ffffff" height={50} />
    </div>
  )

  renderTeams = () => {
    const {teamsData} = this.state
    return (
      <div className="teams-list-cont">
        <div className="main-head-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="main-head">IPL Dashboard</h1>
        </div>
        <ul className="teams-cont">
          {teamsData.map(eachTeam => (
            <TeamCard teamDetails={eachTeam} key={eachTeam.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="app-cont">
        {isLoading ? this.renderLoader() : this.renderTeams()}
      </div>
    )
  }
}

export default Home
