import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    teamCardList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamCardData()
  }

  getTeamCardData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({
      teamCardList: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {teamCardList, isLoading} = this.state
    return (
      <div className="bg-container">
        <div className="heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="main-heading">IPL Dashboard</h1>
        </div>
        <div className="flex-container">
          {isLoading ? (
            <div data-testid="loader" className="spinner">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            teamCardList.map(eachData => (
              <TeamCard teamDetails={eachData} key={eachData.id} />
            ))
          )}
        </div>
      </div>
    )
  }
}

export default Home
