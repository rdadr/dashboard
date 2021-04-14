import React from 'react'
import { Link } from 'react-router-dom'
import Style from './Sidebar.module.css'

export default function Sidebar() {
  return (
    <div className={Style.root}>
      <div className={Style.container}>
        <div className={Style.sidebar}>
          <h3 className={Style.dashboard}>Dashbord Kit</h3>

      <Link className={Style['redirect-btn']} to={'/overview'}>
        Overview
        </Link>
      <Link className={Style['redirect-btn']} to={'/tickets'}>
        Tickets
        </Link>
      <Link className={Style['redirect-btn']} to="/#">
          Ideas
        </Link>
        <Link className={Style['redirect-btn']} to="/#">
         Agents
        </Link>
        <Link className={Style['redirect-btn']} to="/#">
          Settings
        </Link>
        <Link className={Style['redirect-btn']} to="/#">
         Subscription
        </Link>
        
    </div>
      </div>
        </div>
  );
}

