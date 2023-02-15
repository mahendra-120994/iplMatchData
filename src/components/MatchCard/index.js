import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = matchDetails

  const statusColor = matchStatus === 'Won' ? 'won' : 'lost'

  return (
    <li className="match_card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match_team_logo"
      />
      <p className="match_competing">{competingTeam}</p>
      <p className="match_result">{result}</p>
      <p className={`match_status ${statusColor}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
