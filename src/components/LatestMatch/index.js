import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props

  const latestMatchData = () => {
    const formattedLatestMatch = {
      id: latestMatch.id,
      umpires: latestMatch.umpires,
      result: latestMatch.result,
      manOfTheMatch: latestMatch.man_of_the_match,
      date: latestMatch.date,
      venue: latestMatch.venue,
      competingTeam: latestMatch.competing_team,
      competingTeamLogo: latestMatch.competing_team_logo,
      firstInning: latestMatch.first_innings,
      secondInning: latestMatch.second_innings,
      matchStatus: latestMatch.match_status,
    }
    return formattedLatestMatch
  }

  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInning,
    secondInning,
  } = latestMatchData()

  return (
    <div className="latest_match">
      <div className="latest_match_details_box">
        <div className="latest_match_details_1">
          <p className="competing_name">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <div className="latest_match_img">
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="competing_img"
          />
        </div>
      </div>
      <hr className="ruler" />
      <div className="latest_match_details_2">
        <h5 className="headings">First Inning</h5>
        <p className="paras">{firstInning}</p>
        <h5 className="headings">Second Inning</h5>
        <p className="paras">{secondInning}</p>
        <h5 className="headings">Man Of The Match</h5>
        <p className="paras">{manOfTheMatch}</p>
        <h5 className="headings">Umpire</h5>
        <p className="paras">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
