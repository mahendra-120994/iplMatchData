import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch/index'
import MatchCard from '../MatchCard/index'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamBanner: '',
    latestMatch: {},
    recentMatches: [],
    isLoading: true,
    backgroundColor: '',
  }

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const res = await fetch(`https://apis.ccbp.in/ipl/${id}`)

    const data = await res.json()

    console.log(data)

    const teamBannerData = data.team_banner_url
    const latestMatchData = data.latest_match_details

    const formattedRecentMatch = data.recent_matches.map(eachMatch => ({
      id: eachMatch.id,
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      result: eachMatch.result,
      matchStatus: eachMatch.match_status,
    }))
    this.setState({
      teamBanner: teamBannerData,
      latestMatch: latestMatchData,
      recentMatches: formattedRecentMatch,
      isLoading: false,
      backgroundColor: id,
    })
  }

  render() {
    const {
      teamBanner,
      latestMatch,
      recentMatches,
      isLoading,
      backgroundColor,
    } = this.state

    return (
      <div className={`team_bg_container ${backgroundColor}`}>
        <div className="bg_team_match">
          {isLoading ? (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <>
              <img src={teamBanner} alt="team banner" className="team_banner" />
              <h3 className="latest_match_heading">Latest Matches</h3>
              <LatestMatch latestMatch={latestMatch} />
              <ul className="match_list">
                {recentMatches.map(matchDetails => (
                  <MatchCard
                    key={matchDetails.id}
                    matchDetails={matchDetails}
                  />
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    )
  }
}
export default TeamMatches
