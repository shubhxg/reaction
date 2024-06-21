import { useState, useEffect } from "react";
import cuisinesDataList from "../data/cuisinesDataList";

export default function useCuisinesData() {
  const [cuisines, setCuisines] = useState([]);

  useEffect(() => {
    setCuisines(cuisinesDataList);
  }, []);

  return cuisines;
}
