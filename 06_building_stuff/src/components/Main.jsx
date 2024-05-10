import CardRestro from "./CardRestro";
import { resDataList } from "../data/resDataList";

export default Hero = () => {
  return (
    <section className="hero">
      <div className="search-container">
        <input placeholder="Enter food name" type="text" />
        <button>Search</button>
      </div>
      <h2>Top restaurants near you</h2>
      <div className="cards-container flex-center">
        {resDataList.map((item) => (
          <CardRestro {...item?.info} key={item.info.id} />
        ))}
      </div>
    </section>
  );
};
