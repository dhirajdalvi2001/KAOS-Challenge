import React from "react";
import { userData } from "./userData";
import AccountFeedMain from "./account-feed-main";

function AccountFeed() {
  function createCardContainer(e) {
    const proPic = e.name.split(' ').map(item => item.toUpperCase().substring(0, 1)).join('')
    return (
      <div className="account-feed-main" key={e.id}>
        <div className="user">
          <div className="user-profile">
            <div className="profile-circle center">
              <div className="profile-photo center">
                {proPic}
              </div>
            </div>
            <h5 className="heading5 username">{e.name}</h5>
          </div>
          <div className="card-container-box">
            {e.banks.map(function (m, i) {
              return <AccountFeedMain
                key={m.ifsc}
                userName={e.name}
                cityName={m.meta.city}
                skyReport={m.meta.weather.current.comment}
                temperature={m.meta.weather.current.temperature}
                degreeH={m.meta.weather.tomorrow.max}
                degreeL={m.meta.weather.tomorrow.min}
              />;
            })}
          </div>
        </div>
      </div>
    )

  }
  return <>
    {userData[0].data.accounts.map(createCardContainer)}
  </>;
};

export default AccountFeed;