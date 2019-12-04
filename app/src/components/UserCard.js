import React from "react";

export default props => {
  return (
    <div className="userCard">
      <img src={props.userData.avatar_url} />
      <h2>{props.userData.login}</h2>
      <p>
        {props.userData.name}
        <hr></hr>
        <em>
          Followers: {props.userData.followers} / Following:{" "}
          {props.userData.following}
        </em>
      </p>
    </div>
  );
};
