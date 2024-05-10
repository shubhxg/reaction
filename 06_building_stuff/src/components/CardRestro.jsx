export default CardRestro = (props) => {
  const {
    name,
    areaName,
    cuisines,
    avgRating,
    cloudinaryImageId,
    sla: { slaString },
  } = props;
  // dynamic url grabbed from swiggy images
  const imgURL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  return (
    <div className="card-restro">
      <img
        className="card-img"
        alt="restraunt image"
        src={imgURL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <div className="starSpan">
        <span>⭐ {avgRating}</span>
        <span>
          {" "}
          | {slaString} | {areaName}
        </span>
      </div>
      <div className="tagSpan">
        <span>{cuisines.slice(0, 2).join(", ")}</span>
      </div>
    </div>
  );
};
