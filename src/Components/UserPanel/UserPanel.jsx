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
                  <h3>Username</h3>
                  <br />
                  <h3>Streak: </h3>
                  <br />
                  <h3>Streak message</h3>
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