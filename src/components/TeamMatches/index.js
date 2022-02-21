import {Component} from 'react'

import './index.css'

class TeamMatches extends Component {
  state = {
    isLoading: false,
    teamMatchesData: {},
  }

  componentDidMount() {
    this.getData()
  }

  updateLatestMatchDetails = data => ({
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    date: data.date,
    firstInnings: data.first_innings,
    id: data.id,
    manOfTheMatch: data.man_of_the_match,
    matchStatus: data.match_status,
    result: data.result,
    secondInnings: data.second_innings,
    umpires: data.umpires,
    venue: data.venue,
  })

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl/RCB')
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatch: this.updateLatestMatchDetails(data.latest_match_details),
      recentMatches: data.recent_matches.map(eachMatchDetails =>
        this.updateLatestMatchDetails(eachMatchDetails),
      ),
    }
    this.setState({teamMatchesData: updatedData})
  }

  render() {
    const {teamMatchesData} = this.state
    const {teamBannerUrl, latestMatch, recentMatches} = teamMatchesData
    console.log(latestMatch)
    const {competingTeam, date, venue, result} = latestMatch
    return <h1>head</h1>
  }
}

export default TeamMatches
