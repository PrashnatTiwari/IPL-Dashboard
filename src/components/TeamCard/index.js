import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails
  return (
    <div className="card-container">
      <Link to={`/team-matches/${id}`} className="link-item">
        <div className="flex-container-1">
          <img src={teamImageUrl} className="ipl-logo-1" alt={name} />
          <h1 className="ipl-team-name">{name}</h1>
        </div>
      </Link>
    </div>
  )
}

export default TeamCard
