import React from "react";

export default props => {
  return (
    <div className="userCard">
      <img src={props.userData.avatar_url} alt="User" />
      <h2>{props.userData.login}</h2>
      <p>
        {props.userData.name}
        <br></br>
        <em>
          Followers: {props.userData.followers} / Following:{" "}
          {props.userData.following}
        </em>
      </p>
    </div>
  );
};
