import Card from "./Components/Card.jsx";
import seriesData from "./data/seriesData.json";

export default function App () {
  return (
    <div className="card">
      {seriesData.map((series) => {
        return (
          <Card
            key={series.id}
            name={series.name}
            value={series.tag}
            rating={series.rating}
            isNerdy={series.isNerdy}
            imgSource={series.imgSource}
          />
        );
      })}
    </div>
  );
};