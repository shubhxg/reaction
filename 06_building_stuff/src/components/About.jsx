import UserClass from "./UserClass";

export default function About() {
  return (
    <div className="about-us" style={{margin: "1rem"}}>
      <h1>About Us!</h1>
      <UserClass
        name={"Shubh Sharma (Class)"}
        location={"Bareilly"}
        githubUsername={"shubhxg"}
        email={"mail.shubhsharma19@gmail.com"}
      />
    </div>
  );
}
