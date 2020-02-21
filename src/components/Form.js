import React from "react";
const Form = ({ saveContact, name, number, saveName, saveNumber }) => {
  return (
    <div>
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
    </div>
  );
};
export default Form;
