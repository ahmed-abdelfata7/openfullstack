import React, { useState } from "react";
import Contact from "./components/Contact";
const App = () => {
  const [persons, setPerson] = useState([{ name: "Ahmed Mahmoud" }]);
  const [name, setName] = useState("");
  const allPersons = persons.map(person => {
    return <Contact name={person.name} key={person.name} />;
  });
  const saveContact = event => {
    event.preventDefault();
    let newName = name;
    let newContacts = persons.concat({ name: newName });
    setPerson(newContacts);
    setName("");
  };
  const saveName = event => {
    let newName = event.target.value;
    setName(newName);
  };
  return (
    <div>
      <h1>Phone book</h1>
      <form onSubmit={saveContact}>
        <div>
          <label>Name</label>
          <br />
          <br />
          <input value={name} onChange={saveName} />
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
