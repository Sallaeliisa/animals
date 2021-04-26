import React from "react";

const NewAnimal = () => {
  return (
    <form>
      <h1>Add a new animal</h1>
      <label for name>
        Name
      </label>
      <input type="text" id="name"></input>
      <label for img>
        Link to animal image
      </label>
      <input type="text" id="img"></input>
      <label for class>
        Animal class
      </label>
      <select id="class">
        <option value="Select">Select</option>
        <option value="mammal">Mammal</option>
        <option value="bird">Bird</option>
        <option value="fish">Fish</option>
        <option value="reptile">Reptile</option>
        <option value="amphibian">Amphibian</option>
        <option value="insect">Insect</option>
      </select>
      <label for desc>
        Description
      </label>
      <textarea type="textarea" id="desc"></textarea>
    </form>
  );
};

export default NewAnimal;
