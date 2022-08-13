import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { updatePerson, getPerson } from "../functions/person";

const initialPersons = {
  name: "",
  age: 0,
  company: "",
};

const EditComponent = () => {
  const [person, setPerson] = useState(initialPersons);
  const [errors, setErrors] = useState({ name: "", age: "", company: "" });
  const params = useParams();
  const navigation = useNavigate();

  const onChange = (value, feild) => {
    switch (feild) {
      case "name":
        errors.name = value !== "" ? "" : "This field is required";
        break;
      case "age":
        errors.age = value > 0 ? "" : "This field is required";
        break;
      case "company":
        errors.company = value !== "" ? "" : "This field is required";
        break;
      default:
        break;
    }

    setErrors({ ...errors });
    setPerson({
      ...person,
      [feild]: value,
    });
  };

  useEffect(() => {
    getPerson(params.id)
      .then((res) => {
        setPerson(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (Object.values(errors).every((x) => x === "")) {
      // api request
      updatePerson(params.id, person)
        .then((res) => {
          console.log(res);
          navigation("/index");
        })
        .catch((err) => {
          console.log(err);
        });
      // reset to intial
      setPerson(initialPersons);
      setErrors({ name: "", age: "", company: "" });
    }
  };

  return (
    <div className="container">
      <h2>Edit Person</h2>
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

export default EditComponent;
