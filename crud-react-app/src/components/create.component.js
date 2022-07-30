import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createPerson } from "../functions/person";

const initialPersons = {
  name: "",
  age: 0,
  company: "",
};

const CreateComponent = () => {
  const [person, setPerson] = useState(initialPersons);
  const [errors, setErrors] = useState({ name: "", age: "", company: "" });
  const navigation = useNavigate();

  const onChange = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let temp = {};
    temp.name = person.name !== "" ? "" : "This field is required";
    temp.age = person.age > 0 ? "" : "This field is required";
    temp.company = person.company !== "" ? "" : "This field is required";

    setErrors({ ...temp });

    return Object.values(temp).every((x) => x === "");
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // api request
      createPerson(person)
        .then((res) => {
          console.log(res);
          navigation("/index");
        })
        .catch((err) => {
          console.log(err);
        });
      // reset to intial
      setPerson(initialPersons);
    }
  };

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
          {errors.name.length > 0 && (
            <span className="text-danger">{errors.name}</span>
          )}
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
          {errors.age.length > 0 && (
            <span className="text-danger">{errors.age}</span>
          )}
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
          {errors.company.length > 0 && (
            <span className="text-danger">{errors.company}</span>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateComponent;
