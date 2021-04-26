import React, { useState, useEffect } from "react";
import axios from "axios";
import AnimalsCard from "./AnimalsCard";

const AnimalsList = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/animals")
      .then((res) => setAnimals(res.data));
  }, []);
  console.log(animals);

  return (
    <div className='posts'>
      {animals.map((animal) => (
        <AnimalsCard
        key = {animal.id}
        img = {animal.img}
        name = {animal.name}
        aclass = {animal.aclass}
        desc = {animal.desc}
        link = {animal.link}
        />
      ))}
    </div>
  );
};

export default AnimalsList;
