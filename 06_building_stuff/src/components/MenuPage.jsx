import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
import Skeleton from "../components/Skeleton";
import CardRestroMenu from "../components/CardRestroMenu";

export default function MenuPage() {
  const [menuData, setMenuData] = useState([]);
  const [topPicks, setTopPicks] = useState([]);
  const [recommendedData, setRecommendedData] = useState([]);

  useEffect(() => {
    fetchSetMenuData();
  }, []);

  async function fetchSetMenuData() {
    const data = await fetch(MENU_URL);
    const menuInfo = await data.json();
    setRecommendedData(
      menuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
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
      <h1 style={{ margin: "1rem" }}>Menu</h1>
      <h3 style={{ margin: "0.2rem" }}>Top Picks</h3>
      {recommendedData.map((item) => (
        <CardRestroMenu {...item?.card?.info} key={item.card.info.id}/>
      ))}
    </div>
  );
}
