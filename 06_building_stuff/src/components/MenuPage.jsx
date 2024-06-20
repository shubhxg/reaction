import Skeleton from "../components/Skeleton";
import CardRestroMenu from "../components/CardRestroMenu";
import { useParams } from "react-router-dom";
import useRestroMenu from "../utils/hooks/useRestroMenu";

export default function MenuPage() {
  const { resId } = useParams();
  const [resInfo, resName] = useRestroMenu(resId);

  return !resInfo.length ? (
      <main className="hero mt-12 mx-48 h-full">
        <Skeleton />
      </main>
  ) : (
    <div className="menuContainer">
      <h1 className="m-2">{resName}</h1>
      <h3 className="m-1">Top Picks</h3>
      {resInfo.map((item) => (
        <CardRestroMenu {...item?.info} key={item.card.info.id} />
      ))}
    </div>
  );
}
