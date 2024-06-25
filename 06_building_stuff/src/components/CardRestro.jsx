import { CDN_URL } from "../utils/data/constants";

export function CardRestro({
  name,
  areaName,
  cuisines,
  avgRating,
  cloudinaryImageId,
  sla: { slaString },
}) {
  return (
    <div className="card-restro text-gray-800 w-88 rounded px-4 py-4 mx-2 my-4 hover:scale-110 hover:transition-all duration-200 ease-out">
      <img
        className="card-img w-full h-48 rounded-md object-cover mb-4"
        alt="restraunt image"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold my-1 text-xl text-gray-700">{name}</h3>
      <div className="starSpan my-1">
        <span className="text-green-700 font-semibold">
          <svg className="inline-block" viewBox="0 0 24 24" width="24">
            <circle
              cx="10"
              cy="10"
              r="9"
              fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
            ></circle>
            <path
              d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
              fill="white"
            ></path>
            <defs>
              <linearGradient
                id="StoreRating20_svg__paint0_linear_32982_71567"
                x1="10"
                y1="1"
                x2="10"
                y2="19"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#21973B"></stop>
                <stop offset="1" stopColor="#128540"></stop>
              </linearGradient>
            </defs>
          </svg>{" "}
          {avgRating}
        </span>
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

// hoc
export function withPromotedLabel(CardRestro) {
  return (props) => {
    return (
      <div>
        <label className="absolute z-10 mx-2 my-6 text-white bg-gradient-to-r from-orange-500 to-rose-600 rounded px-4 py-1">
          Must Try
        </label>
        <CardRestro {...props} />
      </div>
    );
  };
}

// hoc
export function withNewLabel(CardRestro) {
  return (props) => {
    return (
      <div>
        <label className="absolute z-10 mx-2 my-6 text-white bg-gradient-to-r from-green-500 to-green-600 rounded px-4 py-1">
          New !
        </label>
        <CardRestro {...props} />
      </div>
    );
  };
}
