import React from 'react';
import './UserPanel.scss';
import default_photo from './Default_pfp.svg.png';

function UserPanel() {
  return (
    <>
        <div className="user-panel">
            <div className="left-side">
                <img src={default_photo} className="default-photo" alt="user profile pic"/>
                <div className="user-info">
                  <h2>Username</h2>
                  <br />
                  <h2>Streak: </h2>
                  <br />
                  <h2>Streak message</h2>
                </div>
            </div>
            <div className="right-side">
                <p>Points</p>
            </div>
        </div>
    </>
  )
}

export default UserPanel