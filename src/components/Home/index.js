import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard/index'
import './index.css'

class Home extends Component {
  state = {teamData: [], isLoading: true}

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const res = await fetch('https://apis.ccbp.in/ipl')

    const data = await res.json()

    const {teams} = data

    const formattedData = teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImgUrl: eachTeam.team_image_url,
    }))
    this.setState({teamData: formattedData, isLoading: false})
  }

  render() {
    const {teamData, isLoading} = this.state

    return (
      <div className="bg_home">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <div className="home_header">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="ipl_logo"
              />
              <h1 className="home_heading">IPL Dashboard</h1>
            </div>
            <ul className="team_lists">
              {teamData.map(teamDetails => (
                <TeamCard key={teamDetails.id} teamDetails={teamDetails} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}
export default Home
