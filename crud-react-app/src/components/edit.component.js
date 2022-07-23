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
  const params = useParams();
  const navigation = useNavigate();

  const onChange = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
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

export default EditComponent;
