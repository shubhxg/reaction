import Card from "./Components/Card.jsx";
import seriesData from "./data/seriesData.json";

export default function App () {
  return (
    <section className="main flex flex-col">
      <header className="text-center max-w-100">
        <h1 className="mt-8 text-3xl tracking-tighter font-bold">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent animate-pulse">
            Showify!
          </span>
        </h1>
        <h6 className="mt-1 text-xs font-regular text-gray-300">
          A place to find your next watch recommendation based on what you last
          watched.
        </h6>
        <br />
      </header>
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