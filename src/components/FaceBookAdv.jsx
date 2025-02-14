import React, { useState } from "react";
import profiles from "../data/berlin2.json";
import "./FaceBookAdv.css";

const FaceBookAdv = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [expandedProfile, setExpandedProfile] = useState(null);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState(null);

  const uniqueCountries = [...new Set(profiles.map((profile) => profile.country))];

  const handleCountryClick = (country) => {
    setSelectedCountry(country === selectedCountry ? null : country);
  };

  const toggleProfile = (index) => {
    console.log("Toggling profile:", index);
    setExpandedProfile(expandedProfile === index ? null : index);
  };

  const handleSort = (key) => {
    setSortBy(key);
  };

  let filteredProfiles = profiles.filter((profile) =>
    `${profile.firstName} ${profile.lastName}`.toLowerCase().includes(search.toLowerCase())
  );

  if (sortBy) {
    filteredProfiles = [...filteredProfiles].sort((a, b) =>
      a[sortBy].localeCompare(b[sortBy])
    );
  }

  return (
    <div className="facebookadv-container">
      <div className="controls">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => handleSort("firstName")}>Sort by First Name</button>
        <button onClick={() => handleSort("lastName")}>Sort by Last Name</button>
      </div>

      <div className="country-buttons">
        <button onClick={() => setSelectedCountry(null)}>All</button>
        {uniqueCountries.map((country) => (
          <button
            key={country}
            className={selectedCountry === country ? "selected" : ""}
            onClick={() => handleCountryClick(country)}
          >
            {country}
          </button>
        ))}
      </div>

      {filteredProfiles.map((profile, index) => (
        <div
          key={index}
          className={`profile-card ${
            selectedCountry === profile.country ? "highlight" : ""
          }`}
        >
          <img
            src={profile.img}
            alt={`${profile.firstName} ${profile.lastName}`}
            onClick={() => toggleProfile(index)}
          />
      {expandedProfile === index ? (
        <div className="profile-info">
          <p><strong>First name:</strong> {profile.firstName}</p>
          <p><strong>Last name:</strong> {profile.lastName}</p>
          <p><strong>Country:</strong> {profile.country}</p>
          <p><strong>Type:</strong> {profile.isStudent ? "Student" : "Teacher"}</p>
        </div>
        ) : null}
        </div>
      ))}
    </div>
  );
};

export default FaceBookAdv;
