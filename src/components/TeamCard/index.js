import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, teamImageUrl} = teamDetails
  return (
    <li className="team-card">
      <div className="team-link">
        <img src={teamImageUrl} className="team-img" alt={name} />
        <p className="team-name">{name}</p>
      </div>
    </li>
  )
}

export default TeamCard
