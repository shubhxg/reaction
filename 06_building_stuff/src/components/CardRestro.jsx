import { CDN_URL } from "../utils/constants";

export default CardRestro = (props) => {
  const {
    name,
    areaName,
    cuisines,
    avgRating,
    cloudinaryImageId,
    sla: { slaString },
  } = props;
  return (
    <div className="card-restro">
      <img
        className="card-img"
        alt="restraunt image"
        src={CDN_URL + cloudinaryImageId}
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
