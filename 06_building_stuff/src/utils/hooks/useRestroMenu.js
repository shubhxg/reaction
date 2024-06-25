import { MENU_URL } from "../data/constants";
import { useEffect, useState } from "react";

export default function useRestroMenu(resId) {
  let [resInfo, setResInfo] = useState([]);
  let [resName, setResName] = useState("");
  const URL = MENU_URL + resId;

  useEffect(() => {
    fetchMenuData(URL);
  }, [resId]);

  const fetchMenuData = async () => {
    try {
      const data = await fetch(URL);
      const menuInfo = await data.json();
      setRestroData(menuInfo);
    } catch (err) {
      console.error(err);
    }
  };

  const setRestroData = (menuInfo) => {
    setResName(menuInfo?.data?.cards[2]?.card?.card?.info.name);
    // Finding the first card within the `cards` array using find method that 
    // has an itemCards property and then only access the rest of its cards
    setResInfo(
      menuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.find(
        (card) => card?.card?.card?.itemCards
      )?.card?.card?.itemCards
    );
  };

  return [resInfo, resName];
}
