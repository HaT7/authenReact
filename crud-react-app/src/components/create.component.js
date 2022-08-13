import React, { useState } from "react";
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

  const onChange = (value, field) => {
    switch (field) {
      case "name":
        errors.name = person.name !== "" ? "" : "This field is required";
        break;
      case "age":
        errors.age = person.age > 0 ? "" : "This field is required";
        break;
      case "company":
        errors.company = person.company !== "" ? "" : "This field is required";
        break;
      default:
        break;
    }

    setErrors({ ...errors });
    setPerson({
      ...person,
      [field]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (Object.values(errors).every((x) => x === "")) {
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
      setErrors({name: "", age: "", company: ""});
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
            onChange={(e) => onChange(e.target.value, "name")}
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
            onChange={(e) => onChange(e.target.value, "age")}
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
            onChange={(e) => onChange(e.target.value, "company")}
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
