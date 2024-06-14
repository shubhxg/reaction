import Skeleton from "../components/Skeleton";
import CardRestroMenu from "../components/CardRestroMenu";
import { useParams } from "react-router-dom";
import useRestroMenu from "../utils/useRestroMenu";

export default function MenuPage() {
  const { resId } = useParams();
  const [resInfo, resName] = useRestroMenu(resId);

  return !resInfo.length ? (
    <section className="hero">
      <div className="cards-container flex-center">
        <Skeleton />
      </div>
    </section>
  ) : (
    <div className="menuContainer">
      <h1 style={{ margin: "1rem" }}>{resName}</h1>
      <h3 style={{ margin: "0.2rem" }}>Top Picks</h3>
      {resInfo.map((item) => (
        <CardRestroMenu {...item?.card?.info} key={item.card.info.id} />
      ))}
    </div>
  );
}
