import React from 'react'
import { userData } from './userData';

function AccountFeedMain(props) {
  return (
    <div className="card-container">
      <div className="card-left flex-direction-column">
        <div className="card-left-top margin-auto fit-content center">
          {props.cityName}
        </div>
        <div className="card-left-bottom margin-auto fit-content center">
          {props.skyReport}
        </div>
      </div>
      <div className="card-right flex-direction-column">
        <div className="card-right-top margin-auto fit-content center">
          {props.temperature}°
        </div>
        <div className="card-right-bottom margin-auto fit-content center">
          H: {props.degreeH}°| L: {props.degreeL}°
        </div>
      </div>
    </div>
  )
}

export default AccountFeedMain;