import { useState } from "react";
import Card from "./Components/Card.jsx";
import seriesData from "./data/seriesData.json";

export default function App () {
  const [hasLiked, setHasLiked] = useState(false);
  
  return (
    <section className="main">
      <div className="card-container">
        {seriesData.map((series) => {
          return (
            // passing the props to the card component
            <Card
              key={series.id}
              rating={series.seriesRating}
              imgSource={series.imgSource}
              name={series.seriesName}
              isNerdy={series.isNerdy}
            />
          );
        })}
      </div>
    </section>
  );
};