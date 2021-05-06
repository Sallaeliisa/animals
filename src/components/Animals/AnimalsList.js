import React from "react";
import AnimalsCard from "./AnimalsCard";

const AnimalsList = ({ animals }) => {
  return (
    <div className='posts'>
      {animals.map((animal) => (
        <AnimalsCard
        key = {animal.id}
        img = {animal.img}
        name = {animal.name}
        aclass = {animal.aclass}
        desc = {animal.desc}
        link = {animal.id}
        />
      ))}
    </div>
  );
};

export default AnimalsList;
