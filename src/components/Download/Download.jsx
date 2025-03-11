import React from 'react'
import './Download.css'
import {assets} from "../../assets/assets"

const Download = () => {
  return (
    <div className="download">
        <p>For Better Experience Download <br/>Tomato App</p>
        <div className="app-store">
            <img src={assets.app_store} alt=''></img>
            <img src={assets.play_store} alt=''/>
        </div>
    </div>
  )
}

export default Download