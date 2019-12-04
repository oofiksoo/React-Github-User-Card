import React from "react";

class SearchForm extends React.Component {
  state = {
    searchText: ""
  };

  handleChange = e => {
    // console.log(e.target.value);

    this.setState({
      searchText: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log("submit form: " + this.state.searchText);

    this.props.setUserName(this.state.searchText);
  };

  render() {
    return (
      <div className="search">
        <p>Username Search: </p>

        <input className="textinput" type="text" onChange={this.handleChange} />

        <button className="btngo" onClick={this.handleSubmit}>
          Go
        </button>
      </div>
    );
  }
}

export default SearchForm;
