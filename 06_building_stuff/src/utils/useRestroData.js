import { useState, useEffect } from "react";
import { restaurantDataAPIURL } from "../utils/constants";

export default function useRestroData() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [h2, seth2] = useState("Top restaurants near you");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchDataSetData(restaurantDataAPIURL);
  }, []);

  async function fetchDataSetData(dataAPI) {
    try {
      const response = await fetch(dataAPI);
      const dataJSON = await response.json();
      const restData =
        dataJSON?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setRestaurantData(sliceData(restData));
      setFilteredList(sliceData(restData));
    } catch (err) {
      console.log(err);
    }
  }

  const sliceData = (restData) => {
    return restData.length % 3 === 0
      ? restData
      : restData.slice(0, Math.floor(restData.length / 3) * 3);
  };

  return [
    restaurantData,
    filteredList,
    setFilteredList,
    h2,
    seth2,
    searchTerm,
    setSearchTerm,
  ];
}
