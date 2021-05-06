import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useParams, useHistory } from 'react-router-dom';

const AnimalSingle = () => {

    const [animal, setAnimal] = useState();
    let {id} = useParams();
    let history = useHistory();

useEffect(()=> {
    if(!animal) {
        axios.get('http://localhost:3000/animals/' + id)
        .then ((res) => setAnimal(res.data));
    }
});

    console.log(animal);

    let animalData = undefined;

    if(!animal) {
        animalData = <h1>Loading...</h1>
    }
    if(animal) {
        animalData = ( <div>
            <h1>{animal.name}</h1>
            <p>{animal.desc}</p>
        </div>
        );
    }




    return (
        <div>{animalData}
        </div>
    );
};

export default AnimalSingle;