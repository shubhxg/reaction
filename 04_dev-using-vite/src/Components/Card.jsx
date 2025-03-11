export default function Card({ imgSource, name, rating, isNerdy}) {
  return (
    <div className="bg-gray-900 py-3 px-3 ease-out duration-300 rounded-xl hover:outline outline-2 outline-violet-800">
      <img
        className="object-cover mb-4 w-48 h-40 rounded-lg"
        src={imgSource}
        alt="Card"
        width={"200px"}
      />
      <h3 className="text-xl mt-1 font-bold">{name}</h3>
      <h5 className="text-sm ">⭐ {rating}</h5>
      <div className="flex justify-between">
        <h5 className="text-xs">{isNerdy ? "Nerdy Show" : "Drama/Comedy"}</h5>
        <button className="text-xs bg-blue-900 py-1 px-2 mt-2 rounded-md hover:bg-violet-700">👍 Like</button>
      </div>
    </div>
  );
}
