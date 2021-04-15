import React from 'react';
import Sidebar from '../../Sidebar'
import Style from './Overview.module.css'

const Overview = () =>{
  return (
    <div>
      <Sidebar />
        <div className={Style.root}>
          <div className={Style.container}>

          <h3>Overview</h3>
          {/* <input placeholder="Поиск" onChange={this.filterList} /> */}
            </div>
        </div>
    </div>
  )
}
export default Overview
