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
      <i class="fas fa-chart-pie"></i>
         Overview
        </Link>
      <Link className={Style['redirect-btn']} to={'/tickets'}>
      <i class="fas fa-ticket-alt"></i>
        Tickets
        </Link>
      <Link className={Style['redirect-btn']} to="/#">
      <i class="fas fa-lightbulb"></i>
          Ideas
        </Link>
        <Link className={Style['redirect-btn']} to="/#">
        <i class="fas fa-users"></i>
           Contacts
        </Link>
        <Link className={Style['redirect-btn']} to="/#">
        <i class="fas fa-user-tie"></i>
         Agents
        </Link>
        <Link className={Style['redirect-btn']} to="/#">
        <i class="fas fa-newspaper"></i>
         Articles
        </Link>
        <Link className={Style['redirect-btn']} to="/#">
        <i class="fas fa-cog"></i>
          Settings
        </Link>
        <Link className={Style['redirect-btn']} to="/#">
        <i class="fas fa-award"></i>
         Subscription
        </Link>
        
    </div>
      </div>
        </div>
  );
}

