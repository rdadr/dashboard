import React from 'react'
import { Link } from 'react-router-dom'

export default function Tickets() {
  return (
    <div>
     Tickets<br/>
     <Link to={'/overview'}>Overview</Link><br/>
      <Link to={'/tickets'}>Tickets</Link><br/>
    </div>
  )
}

