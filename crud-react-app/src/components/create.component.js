import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialPersons = {
  name: "",
  age: 0,
  company: "",
};

const CreateComponent = () => {
  const [person, setPerson] = useState(initialPersons);
  const navigation = useNavigate();

  const onChange = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // api request
    axios
      .post("http://localhost:4000/persons/add", person)
      .then((res) => {
        console.log(res);
        navigation("/index");
      })
      .catch((err) => {
        console.log(err);
      });
    // reset to intial
    setPerson(initialPersons);
  };

  useEffect(() => {
    console.log(person);
  }, [person]);

  return (
    <div className="container">
      <h2>Add New Person</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={person.name}
            onChange={(e) => onChange(e)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={person.age}
            onChange={(e) => onChange(e)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Company</label>
          <input
            type="text"
            name="company"
            value={person.company}
            onChange={(e) => onChange(e)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateComponent;
