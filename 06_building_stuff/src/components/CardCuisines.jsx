import { CUISINES_IMG_URL } from "../utils/data/constants";

export default function CardCuisines(props) {
  const { imageId } = props;

  return (
    <div className="">
      <img src={CUISINES_IMG_URL + imageId} alt="cuisine picture" className="w-24 rounded-md" />
    </div>
  );
}