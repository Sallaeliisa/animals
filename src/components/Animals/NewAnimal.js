import React from "react";

const NewAnimal = ({ change, submit }) => {
  return (
    <form onSubmit={submit}>
      <h1>Add a new animal</h1>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" onChange={change}></input>
      <label htmlFor="img">URL to animal image</label>
      <input type="text" id="img" onChange={change}></input>
      <label htmlFor="class">Animal class</label>
      <select id="class" onChange={change}>
        <option value="Select">Select</option>
        <option value="mammal">Mammal</option>
        <option value="bird">Bird</option>
        <option value="fish">Fish</option>
        <option value="reptile">Reptile</option>
        <option value="amphibian">Amphibian</option>
        <option value="insect">Insect</option>
      </select>
      <label htmlFor="desc">Description</label>
      <textarea type="textarea" id="desc" onChange={change}></textarea>
      <label>URL to animal info</label>
      <input type="url" id="link" onChange={change} />
      <button type="submit">Send</button>
    </form>
  );
};

export default NewAnimal;
