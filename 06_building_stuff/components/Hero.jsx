import CardRestro from "../components/CardRestro"

export default Hero = () => {
  return (
    <section className="hero flex-center">
      <div className="searchContainer">
        <input type="text" />
        <button>Search</button>
      </div>
      <div className="cards-container">
        <CardRestro/>
      </div>
    </section>
  )
}