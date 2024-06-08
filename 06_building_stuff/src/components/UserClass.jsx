import React from "react";

export default class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, location, contact:twitterUsername } = this.props;
    return (
      <div className="user-card">
        <br />
        <h3>Name: {name}</h3>
        <h4>Location: {location}</h4>
        <h4>Contact: {twitterUsername}</h4>
      </div>
    );
  }
}