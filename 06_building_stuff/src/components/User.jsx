export default function User({name, location, contact: twitterUsername}) {

  return (
    <div className="user-card">
      <br />
      <h3>Name: {name}</h3>
      <h4>Location: {location} </h4>
      <h4>Contact: {twitterUsername}</h4>
      <hr/>
    </div>
  );
}
