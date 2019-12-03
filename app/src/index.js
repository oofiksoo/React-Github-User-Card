import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import axios from "axios";
class App extends React.Component {
  state = {
    userCard: []
  };

  componentDidMount() {
    axios.get("https://api.github.com/users/oofiksoo").then(response => {
      console.log(response);
      this.setState({ userCard: response.data });
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state.userCard) {
      console.log("New Data");
    }
  }
  render() {
    return (
      <div>
        <h1> My Usercard: </h1>
        {
          <div className="myCard">
            <img src={this.state.userCard.avatar_url} />
            <h1> {this.state.userCard.name} </h1>
            <p>
              <em> {this.state.userCard.login} </em>
            </p>
          </div>
        }
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
