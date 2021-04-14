import React from 'react'
import { Link } from 'react-router-dom'

export default function Overview() {
  return (
    <div>
     <h1>Overview<br/></h1>
     <Link to={'/overview'}>Overview</Link><br/>
      <Link to={'/tickets'}>Tickets</Link><br/>
    </div>
  )
}

