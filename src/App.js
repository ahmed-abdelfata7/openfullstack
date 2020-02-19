import React, { useState } from "react";
import Contact from "./components/Contact";
const checkExistance = (array, name) => {
  return array.includes(name);
};
const App = () => {
  const [persons, setPerson] = useState([
    { name: "Ahmed Mahmoud", number: "58-5880570" }
  ]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const allPersons = persons.map(person => {
    return (
      <Contact name={person.name} key={person.name} number={person.number} />
    );
  });
  const saveContact = event => {
    event.preventDefault();
    let newName = name;
    let newNumber = number;
    const personsArr = persons.map(element => {
      return element.name;
    });
    let check = checkExistance(personsArr, newName);
    if (check) {
      alert(`${newName} already exist`);
    } else {
      let newContacts = persons.concat({ name: newName, number: newNumber });
      setPerson(newContacts);
    }
    clearForm();
  };
  const clearForm = () => {
    setName("");
    setNumber("");
  };
  const saveName = event => {
    let newName = event.target.value;
    setName(newName);
  };
  const saveNumber = event => {
    let newNumber = event.target.value;
    setNumber(newNumber);
  };
  return (
    <div>
      <h1>Phone book</h1>
      <form onSubmit={saveContact}>
        <div>
          <label>Name</label>
          <input value={name} onChange={saveName} />
          <label>Number</label>
          <input value={number} onChange={saveNumber} />
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
      <h1>Numbers</h1>
      <ul>{allPersons}</ul>
    </div>
  );
};
export default App;
