import React from "react";

export default props => {
  return (
    <div className="followers">
      {props.followers.map(flwr => (
        <div
          className="flwrCard"
          key={flwr.avatar_url}
          onClick={props.setUserName}
        >
          <img src={flwr.avatar_url} alt={flwr.login} />
          <h1>{flwr.login}</h1>
          <h3>{flwr.id}</h3>
          <p>{flwr.type}</p>
        </div>
      ))}
    </div>
  );
};
