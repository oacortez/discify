import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { LeagueMembers } from '../Contexts/LeagueMembersProvider'

const RoundOverview = () => {
  const location = useLocation()
  const { leagueMembers, setLeagueMembers} = useContext(LeagueMembers)
  const sortPlayers = () => {
    location.state.scores.sort((a, b) => a.total_score - b.total_score)
  }

  const findPlayerName = (id) => {
    return leagueMembers.find(member => member.id === id).name
  }

  const playerInfo = () => {
    sortPlayers()
    return location.state.scores.map(player => {
      return (
        <div key={player.player_id}>
          <h3>{findPlayerName(parseInt(player.player_id))}</h3>
          <p>{player.total_score}</p>
          <p>({player.score})</p>
        </div>
      )
    })
  }

  return (
    <div>
      <h2>{location.state.course_name}</h2>
      <p>Par: {location.state.total_par}</p>
      <p>Date: {location.state.date}</p>
      {playerInfo()}
    </div>
  )
}

export default RoundOverview