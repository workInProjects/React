import React from "react";
import "./UserInfo.css";

function UserInfo ({ user }) {

  const date = new Date(user.dob.date).toISOString().slice(0, 10);

  return (
  <div className="flip-box">
    <div className="flip-box-inner">
      <div className="flip-box-front">
        <div className="user">
          <div className="user-container">
            <img src={user.picture.medium} alt=''/>
            <ul>
              <li>{user.name.first} {user.name.last}</li>
              <li>Gender : {user.gender === 'male' ? ' 🚹 ' : ' 🚺 '}</li>
              <li>{date}</li>
            </ul>
            <p className='flip-box'>{user.email}</p>
            <h5>{user.nat}</h5>
          </div> 
        </div>
      </div>
      <div className="flip-box-back">
      <img src='Image.jpg' alt="QR"/>
      <p>Скануйте QR-код</p>  
      </div>
    </div>
  </div>
  );
}

export default UserInfo; 