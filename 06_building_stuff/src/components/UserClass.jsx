import React from "react";

export default class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      otherCount: 10,
    };
  }

  render() {
    const { name, contact: twitterUsername, email, location } = this.props;
    const { count } = this.state;

    return (
      <div className="user-card">
        <br />
        <h3>Name: {name}</h3>
        <h4>Location: {location}</h4>
        <h4>Contact: {twitterUsername}</h4>
        <h4>Email: {email}</h4>
        <br />
        <h3>Count: {count}</h3>
        <br />
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          Add +1
        </button>
        <button
          onClick={() => {
            this.setState({ count: count - 1 });
          }}
        >
          Sub -1
        </button>
      </div>
    );
  }
}
