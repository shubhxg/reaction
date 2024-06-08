import User from "./User";
import UserClass from "./UserClass";

export default function About() {
  return (
    <div className="about-us">
      <h1>About Us!</h1>
      <User
        name={"Shubh Sharma"}
        location={"Bareilly"}
        contact={"@shubhstwt"}
      />
      <UserClass
        name={"Shubh Sharma (Class)"}
        location={"Bareilly"}
        contact={"@shubhstwt"}
      />
    </div>
  );
}
