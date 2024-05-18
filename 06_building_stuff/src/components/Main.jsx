import CardRestro from "./CardRestro";
import Skeleton from "./Skeleton";
import { useState, useEffect } from "react";
import { restaurantDataAPIURL } from "../utils/constants";

export default function Main() {
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
        : restData.slice(0, Math.floor(restData.length / 3) * 3)
  }

  return !restaurantData.length ? (
    <section className="hero">
      <div className="cards-container flex-center">
        <Skeleton />
      </div>
    </section>
  ) : (
    <section className="hero">
      <div className="button-container flex-sa">
        <div>
          <input
            placeholder="Enter food name"
            type="text"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            value={searchTerm}
          />
          <button
            onClick={() => {
              if (searchTerm) {
                setFilteredList(
                  restaurantData.filter((item) =>
                    item?.info?.name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                      ? item
                      : ""
                  )
                );
                seth2("Searched food 🔍🤤🍕");
              } else {
                setFilteredList(restaurantData);
                seth2("Enter a valid food name! 😲😖");
              }
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            setFilteredList(
              restaurantData.filter((item) => item.info.avgRating >= 4.5)
            );
            seth2("Filtered for best experience! 🤩✨");
          }}
        >
          <svg
            className="filter-svg"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-funnel-fill"
            viewBox="0 0 16 10"
          >
            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z" />
          </svg>
          Filter by Top Rated Restaurants
        </button>
      </div>
      <h2>{h2}</h2>
      <div className="cards-container flex-center">
        {filteredList.map((item) => (
          <CardRestro {...item?.info} key={item.info.id} />
        ))}
      </div>
    </section>
  );
}
