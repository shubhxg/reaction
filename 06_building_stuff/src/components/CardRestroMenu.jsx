import { MENU_IMG_URL } from "../utils/data/constants";

export default function CardRestroMenu(props) {
  const {
    name,
    imageId,
    isVeg,
    description,
    ratings: {
      aggregatedRating: { rating },
    },
    price,
  } = props;
  return (
    <div className="w-full my-2">
      <div className="flex justify-between">
        <div>
          <span>
            {isVeg ? (
              <img
                className="w-4"
                src="https://www.clipartmax.com/png/middle/299-2998556_vegetarian-food-symbol-icon-non-veg-symbol-png.png"
              />
            ) : (
              <img
                className="w-4"
                src="https://m.media-amazon.com/images/I/41ADK60Pn5L._AC_UF350,350_QL80_.jpg"
              />
            )}
          </span>
          <h4 className="text-lg font-bold">{name}</h4>
          <h5>{price ? `₹${price / 100}` : ""}</h5>
          <span className="flex my-1 items-center font-bold text-green-600">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1"
              role="img"
              fillcolor="#1BA672"
            >
              <rect width="14" height="14" fill="white"></rect>
              <path
                d="M5.67163 3.99166C6.22068 2.34179 6.49521 1.51686 7 1.51686C7.50479 1.51686 7.77932 2.34179 8.32837 3.99166L8.65248 4.96556H9.60668C11.4122 4.96556 12.315 4.96556 12.4703 5.45302C12.6256 5.94049 11.8893 6.4628 10.4167 7.50744L9.67376 8.03444L9.97544 8.94095C10.5325 10.615 10.8111 11.452 10.4033 11.754C9.99553 12.056 9.27604 11.5457 7.83705 10.5249L7 9.93112L6.16295 10.5249C4.72396 11.5457 4.00447 12.056 3.5967 11.754C3.18893 11.452 3.46747 10.615 4.02456 8.94095L4.04557 8.87783C4.18081 8.47145 4.24843 8.26825 4.18684 8.08006C4.12525 7.89187 3.94958 7.76725 3.59824 7.51802C2.11566 6.46633 1.37437 5.94049 1.52971 5.45302C1.68504 4.96556 2.5878 4.96556 4.39332 4.96556H5.34752L5.67163 3.99166Z"
                fill="#1BA672"
              ></path>
            </svg>
            {rating}
          </span>
          <br />
          <h6 className="text-md w-4/5 text-gray-600">
            {description?.length > 100 ? (
              <>
                {description.slice(0, 100)}...
                <span
                  className="text-gray-900 cursor-pointer font-semibold"
                  onClick={(e) => {
                    e.target.parentElement.innerHTML = description;
                  }}
                >
                  show more
                </span>
              </>
            ) : (
              description
            )}
          </h6>
        </div>
        {imageId ? (
          <img
            className="rounded-xl w-36 h-36 object-cover"
            src={MENU_IMG_URL + imageId}
            alt="cuisine image"
          />
        ) : (
          <img
            className="rounded-xl w-36 h-36 object-cover"
            src="https://images.indianexpress.com/2023/12/food.jpg"
          />
        )}
      </div>
      <hr className="my-8" />
    </div>
  );
}
