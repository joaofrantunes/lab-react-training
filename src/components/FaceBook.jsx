import React from "react";
import profiles from "../data/berlin.json";
import "./FaceBook.css";

const FaceBook = () => {
  return (
    <div className="facebook-container">
      {profiles.map((profile, index) => (
        <div key={index} className="profile-card">
          <img src={profile.img} alt={`${profile.firstName} ${profile.lastName}`} />
          <div className="profile-info">
            <p><strong>First name:</strong> {profile.firstName}</p>
            <p><strong>Last name:</strong> {profile.lastName}</p>
            <p><strong>Country:</strong> {profile.country}</p>
            <p><strong>Type:</strong> {profile.isStudent ? "Student" : "Teacher"}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaceBook;
