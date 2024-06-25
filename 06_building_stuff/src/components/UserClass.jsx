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
        className="user-card text-gray-800 flex gap-4 mt-2 p-4 w-1/3 border-2 border-gray-300 rounded bg-gray-100"
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

