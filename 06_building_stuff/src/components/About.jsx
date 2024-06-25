import UserClass from "./UserClass";

export default function About() {
  return (
    <div className="about-us text-gray-800 my-40 w-full flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl">About Us!</h1>
      <UserClass
        name={"Shubh Sharma (Class)"}
        location={"Bareilly"}
        githubUsername={"shubhxg"}
        email={"mail.shubhsharma19@gmail.com"}
      />
      <p className="my-4">Created by Shubh Sharma ✨</p>
    </div>
  );
}
