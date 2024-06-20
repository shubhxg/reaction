import { MENU_URL } from "../constants";
import { useEffect, useState } from "react";

export default function useRestroMenu(resId) {
  let [resInfo, setResInfo] = useState([]);
  let [resName, setResName] = useState("");
  const URL = MENU_URL + resId;

  useEffect(() => {
    fetchMenuData();
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
    setResInfo(
      menuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]
        ?.card?.card?.categories[0]?.itemCards[0]?.card?.info
    );
    
  };

  return [resInfo, resName];
}
