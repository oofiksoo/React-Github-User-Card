import React from "react";

import SearchForm from "./SearchForm";

import UserCard from "./UserCard";

import Followers from "./Followers";

export default props => {
  return (
    <div>
      <div className="searchbox">
        <SearchForm setUserName={props.setUserName} />
      </div>
      <div className="mainUser">
        <h1>My Github Usercard:</h1>
        <UserCard userData={props.userData} />
      </div>
      <div class="calendar">
        <h2>My GitHub Calendar</h2>

        <img
          src="http://ghchart.rshah.org/oofiksoo"
          alt="oofiksoo's Github chart"
        />
      </div>
      <div className="userFollowers">
        <h3>My Followers:</h3>
        <Followers followers={props.followers} />
      </div>
    </div>
  );
};
