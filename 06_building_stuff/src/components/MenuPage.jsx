import Skeleton from "../components/Skeleton";
import CardRestroMenu from "../components/CardRestroMenu";
import { useParams } from "react-router-dom";
import useRestroMenu from "../utils/hooks/useRestroMenu";

export default function MenuPage() {
  const { resId } = useParams();
  const [resInfo, resName] = useRestroMenu(resId);
  console.log(resInfo);

  return !resInfo.length ? (
    <main className="hero mt-12 mx-48 h-full">
      <Skeleton />
    </main>
  ) : (
    <div className="max-w-2xl mx-auto">
      <div>
        <h1 className="text-gray-800 text-2xl font-black mt-8">{resName}</h1>
        <h3 className="text-gray-800 text-lg font-black mt-1 mb-6">
          Top Picks
        </h3>
      </div>
      <div className="menuContainer text-gray-800 flex flex-col items-center">
        {resInfo.map((item) => (
          <CardRestroMenu {...item?.card?.info} key={item.card.info.id} />
        ))}
      </div>
    </div>
  );
}
