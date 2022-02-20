import {Component} from 'react'

import './index.css'

class Home extends Component {
  state = {
    teamsData: [],
  }

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    console.log(updatedData)
  }

  render() {
    return (
      <div className="app-cont">
        <div className="main-cont">
          <div className="main-head-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo"
            />
            <h1 className="main-head">IPL Dashboard</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
