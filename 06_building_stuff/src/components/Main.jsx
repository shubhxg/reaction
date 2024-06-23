import { CardRestro, withNewLabel, withPromotedLabel } from "./CardRestro";
import Skeleton from "./Skeleton";
import useRestroData from "../utils/hooks/useRestroData";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import useCuisinesData from "../utils/hooks/useCuisinesData";
import CardCuisines from "../components/CardCuisines";
import { Link } from "react-router-dom";
import Offline from "./Offline";

export default function Main() {
  const [
    restaurantData,
    filteredList,
    setFilteredList,
    h2,
    seth2,
    searchTerm,
    setSearchTerm,
  ] = useRestroData();

  const onlineStatus = useOnlineStatus();
  const cuisines = useCuisinesData();
  const RestaurantCardPromoted = withPromotedLabel(CardRestro);
  const RestaurantCardNew = withNewLabel(CardRestro);

  if (!onlineStatus) {
    return <Offline />;
  }

  return !restaurantData.length ? (
    <main className="hero mt-12 mx-48 h-full">
      <Skeleton />
    </main>
  ) : (
    <main className="hero mt-4 mx-40 h-full">
      <h1 className="font-black ml-8 text-2xl text-gray-800 mb-4">
        What's on your mind?
      </h1>
      <div className="px-8 p-2 -m-2 overflow-x-auto">
        <div className="cuisines-container flex flex-nowrap gap-6 mb-12 pb-4">
          {cuisines.map((item) => (
            <div key={item.id} className="flex-none">
              <CardCuisines {...item} />
            </div>
          ))}
        </div>
      </div>
      <hr className="my-8" />
      <div className="heading-container mt-8 px-8">
        <h2 className="font-black text-2xl text-gray-800">{h2}</h2>
      </div>
      <div className="flex justify-between px-8 my-4 items-center">
        <div className="flex items-center">
          <input
            className="bg-gray-200 w-64 border-transparent py-2 px-4 mr-4 focus:w-80 transition-all duration-200 ease-in-out rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            placeholder="Enter Food Name"
            type="text"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            value={searchTerm}
          />
          <button
            className="py-2 px-6 bg-rose-600 hover:bg-rose-800 rounded-md flex items-center"
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search mr-2"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
            Search
          </button>
        </div>
        <button
          className="py-2 flex items-center w-75 px-6 bg-rose-600 hover:bg-rose-800 rounded"
          onClick={() => {
            setFilteredList(
              restaurantData.filter((item) => item.info.avgRating >= 4.5)
            );
            seth2("Filtered for best experience! 🤩✨");
          }}
        >
          <svg
            className="bi bi-funnel-fill filter-svg mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 14"
          >
            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z" />
          </svg>
          Filter by Top Rated Restaurants
        </button>
      </div>
      <div
        id="cards-container"
        className="grid grid-cols-3 gap-4 text-gray-800"
      >
        {filteredList.map((item) => (
          <Link to={"/res/" + item.info.id} key={item.info.id}>
            {item?.info?.promoted === true ? (
              <RestaurantCardPromoted {...item?.info} />
            ) : item?.info?.isNew === true ? (
              <RestaurantCardNew {...item?.info} />
            ) : (
              <CardRestro {...item?.info} />
            )}
          </Link>
        ))}
      </div>
    </main>
  );
}
