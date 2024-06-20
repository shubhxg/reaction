import { MENU_IMG_URL } from "../utils/constants";

export default function CardRestroMenu(props) {
  const {
    name,
    imageId,
    isVeg,
    ratings: {
      aggregatedRating: { rating },
    },
    price,
  } = props;
  return (
    <div className="recommendedCard flex-sa la">
      <div>
        <span>{isVeg ? "🟢 Veg" : "🔴 Non Veg"}</span>
        <h4>{name}</h4>
        <h5>{price ? `₹${price / 100}` : ""}</h5>
        <span>⭐ {rating}</span>
      </div>
      <img className="rounded-md" src={MENU_IMG_URL + imageId} alt="cuisine image"/>
    </div>
  );
}
