import { CDN_URL } from "../utils/constants";

export default function CardRestro({
  name,
  areaName,
  cuisines,
  avgRating,
  cloudinaryImageId,
  sla: { slaString },
}) {
  return (
    <div className="card-restro w-88 rounded px-4 py-4 mx-2 my-4 hover:scale-110 hover:transition-all duration-200 ease-out">
      <img
        className="card-img w-full h-48 rounded-md object-cover mb-4"
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
}
