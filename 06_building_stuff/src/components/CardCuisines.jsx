import { CUISINES_IMG_URL } from "../utils/data/constants";

export default function CardCuisines(props) {
  const { imageId } = props;

  return (
    <div className="w-32 -mb-8">
      <img
        src={CUISINES_IMG_URL + imageId}
        alt="cuisine picture"
        className="rounded-md"
      />
    </div>
  );
}