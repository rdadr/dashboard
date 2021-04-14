import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Overview, Tickets, Sidebar } from './Components/Pages'

export default function MainRouter() {
  return (
    <Switch>
      <Route path={'/tickets'}>
        <Tickets/>
      </Route>
      <Route path={'/overview'}>
        <Overview/>
      </Route>
      <Route path={'/'}>
        <Sidebar/>
      </Route>
    </Switch>
  )
}