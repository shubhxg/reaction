export default function Card({ name, value, rating, isNerdy, imgSource}) {
    const Tag = value;
  return (
    <div>
      <img src={imgSource} alt="Card" width={"200px"} />
      <Tag>{name}</Tag>
      <h5>Rating: {rating}</h5>
      <h5>For Nerds: {isNerdy ? "Yes" : "No"}</h5>
      <br />
    </div>
  );
}
