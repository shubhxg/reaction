import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
import Skeleton from "../components/Skeleton";
import CardRestroMenu from "../components/CardRestroMenu";
import { useParams } from "react-router-dom";

export default function MenuPage() {
  const [recommendedData, setRecommendedData] = useState([]);
  let [resName, setResName] = useState("");
  const { resId } = useParams();
  const URL = MENU_URL + resId;


  useEffect(() => {
    fetchSetMenuData();
  }, []);

  async function fetchSetMenuData() {
    const data = await fetch(URL);
    const menuInfo = await data.json();
    setResName(menuInfo?.data?.cards[0].card.card.text);
    setRecommendedData(
      menuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]
        ?.card?.card.itemCards
    );
  }

  return !recommendedData.length ? (
    <section className="hero">
      <div className="cards-container flex-center">
        <Skeleton />
      </div>
    </section>
  ) : (
    <div className="menuContainer">
      <h1 style={{ margin: "1rem" }}>{resName}</h1>
      <h3 style={{ margin: "0.2rem" }}>Top Picks</h3>
      {recommendedData.map((item) => (
        <CardRestroMenu {...item?.card?.info} key={item.card.info.id} />
      ))}
    </div>
  );
}
