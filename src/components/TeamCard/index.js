import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, teamImgUrl, id} = teamDetails

  return (
    <Link to={`/team-matches/${id}`} className="team_link">
      <li className="team_list">
        <div className="team_log_name">
          <img src={teamImgUrl} alt={name} className="team_logo" />
          <p className="team_name">{name}</p>
        </div>
      </li>
    </Link>
  )
}
export default TeamCard
