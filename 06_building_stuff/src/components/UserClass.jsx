import React from "react";
import useGithubData from "../utils/hooks/useGithubData";

export default class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        bio: "",
        location: "",
        login: "",
        followers: "",
      },
    };
  }

  async componentDidMount() {
      const json = await useGithubData("shubhxg");
      this.setState({ userInfo: json });
  }

  render() {
    const { name, location, bio, followers, login, avatar_url } =
      this?.state?.userInfo;
    return (
      <div
        className="user-card"
        style={{
          display: "flex",
          gap: "1rem",
          marginTop: "1rem",
          padding: "1rem",
          width: "30%",
          border: "1px solid white",
        }}
      >
        <br />
        <div>
          <img
            src={avatar_url}
            alt=""
            width="100px"
            style={{ borderRadius: "50%" }}
          />
        </div>
        <div>
          <h3>{name}</h3>
          <h4>{bio}</h4>
          <h4>{location} </h4>
          <h4>
            <a href="https://github.com/shubhxg" style={{ color: "red" }}>
              @{login}
            </a>
          </h4>
          <h4>{followers} Followers</h4>
        </div>
      </div>
    );
  }
}

